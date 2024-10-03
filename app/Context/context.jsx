"use client"
import React, { createContext, useState } from "react";
import axios from "axios";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
    const [input, setInput] = useState("")
    const [recentPrompt, setrecentPrompt] = useState("")
    const [prevPrompt, setprevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setloading] = useState(false)
    const [resultData, setResultData] = useState("")
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 60 * index)

    }
    const newChat = () => {
        setloading(false)
        setShowResult(false)
    }


    const onSent = async (prompt) => {
        
        try {
            setResultData("")
            setloading(true)
            setShowResult(true)
            let response 
            if (prompt !== undefined) {
                const payload = {
                    prompt: prompt
                }
               response = await axios.post(`${process.env.NEXT_PUBLIC_API}/chat`,payload)
                setrecentPrompt(prompt)
            } else { 
                const payload = {
                    prompt: input
                }
                setprevPrompt(prev => [...prev, input])
                setrecentPrompt(input)
                response = await axios.post(`${process.env.NEXT_PUBLIC_API}/chat`, payload)
            }
            
            if (response.data.success) {
                const responsearray = response.data.message.split("**")
                let newarray = ""
                for (let index = 0; index < responsearray.length; index++) {
                    if (index === 0 || index % 2 !== 1) {
                        newarray += responsearray[index]
                    }
                    else {
                        newarray += "<b>" + responsearray[index] + "</b>"
                    }
                }
                let newResponse = newarray.split("*").join("</br>")
                let newResponsearray = newResponse.split(" ")
                for (let index = 0; index < newResponsearray.length; index++) {
                    let nextWord = newResponsearray[index];
                    delayPara(index, nextWord + " ")
                }
                setloading(false)
            } else {
                throw new Error(response.data.message);
            }
            setInput('');
        } catch (error) {
            console.error("Error calling API:", error);
        } finally {
            setloading(false);
        }
    } 

    const contextValue = {
        prevPrompt,
        setprevPrompt,
        setrecentPrompt,
        recentPrompt,
        showResult,
        setShowResult,
        loading,
        setInput,
        input, resultData, setResultData, setloading,
        onSent,newChat
    }

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}