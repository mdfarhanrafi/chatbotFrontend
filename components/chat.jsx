"use client"
import Image from 'next/image'
import React, { useContext } from 'react'
import { User } from './user'
import { Input } from './ui/input'
import { Context } from '@/app/Context/context'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

const Chat = () => {
    const { prevPrompt, setprevPrompt, setrecentPrompt, recentPrompt, showResult, setShowResult, loading, setInput, input, resultData, setloading, setResultData,onSent } = useContext(Context)
   
  return (
    <div className='flex-1 min-h-screen pb-[15vh] relative'>
          <div className='flex items-center justify-between text-2xl p-5 text-[#585858]'>
              <p>Gemini</p>
              <User/>
          </div>      
          <div className='max-w-4xl m-auto'>
              {!showResult ?
                (  <>
              <div className='my-[50px] mx-0 text-6xl text-[#c4c7c5] font-[500] p-5'>
                  <p><span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Hello,People</span></p>
                  <p>How can I help you Today?</p>
              </div>
              <div className='grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4 p-5'>
                  <div className='h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                      <p className='text-[#585858] text-base'>suggest beautiful places to see on an upcoming road trip</p>
                      <Image
                          className='p-1 absolute bg-white rounded-[20px] bottom-3 right-3'
                          src={"/compass.svg"}
                          height={25}
                          width={25}
                          alt="Compass"
                      />
                  </div>
                  <div className='h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                      <p className='text-[#585858] text-base'>Briefly summerize this concept: urban planning</p>
                      <Image
                          className='p-1 absolute bg-white rounded-[20px] bottom-3 right-3'
                          src={"/bulb.svg"}
                          height={25}
                          width={25}
                          alt="Bulb"
                      />
                  </div>
                  <div className='h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                      <p className='text-[#585858] text-base'>Brainstrom team bonding activities for our work retreat</p>
                      <Image
                          className='p-1 absolute bg-white rounded-[20px] bottom-3 right-3'
                          src={"/message_icon.svg"}
                          height={25}
                          width={25}
                          alt="Message_icon"
                      />
                  </div>
                  <div className='h-[200px] p-4 bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]'>
                      <p className='text-[#585858] text-base'>Improve the readability of the following code</p>
                      <Image
                          className='p-1 absolute bg-white rounded-[20px] bottom-3 right-3'
                          src={"/code.svg"}
                          height={25}
                          width={25}
                          alt="Code"
                      />
                  </div>
              </div>
                      
                  </>) : (
                      <div className='px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide'>
                          <div className='my-10 flex items-center gap-5'>
                              <Image src={"/user.svg"} width={50} height={25} alt='user icon' className='rounded-[50%]' />
                              <p>{recentPrompt}</p>
                          </div> 
                          <div className='my-10 flex items-center gap-5'>
                              <Image src={"/bot.svg"} width={50} height={25} alt='bot icon' className='rounded-[50%]'/>
                              {loading ? (
                                  <div className='space-y-2'>
                                      <Skeleton className="h-5 w-[896px]"/>
                                      <Skeleton className="h-5 w-[896px]"/>
                                  </div>
                              ) : (
                                      <p dangerouslySetInnerHTML={{ __html: resultData }} className='text-lg font-light leading-7' />
                              )
                              }
                              
                              
                          </div>
                  
                      </div>) 
            
            }


              <div className="absolute bottom-0 px-5 py-0 w-full max-w-[900px] m-auto">
                  <div className='flex items-center justify-between gap-5 bg-[#f0f4f9] py-3 px-5 rounded-[50px] '>
                      <Input type="text" placeholder="Enter your prompt here" className="flex-1 bg-transparent border-none outline-none p-2 text-lg" value={input} onChange={(e) => setInput(e.target.value)}/>
                      <div className="flex items-center gap-4">
                          <Button className="p-2 bg-primary rounded-full bg-slate-50"><Image src={"/images.svg"} width={25} height={25} alt="the gallery" /></Button>
                          <Button className="p-2 bg-primary rounded-full bg-slate-50"><Image src={"/mic.svg"} width={25} height={25} alt="the mis" /></Button>
                          <Button className="p-2 bg-primary rounded-full bg-slate-50" onClick={()=>onSent()}><Image src={"/send.svg"} width={25} height={25} alt='send icon'/></Button>
                      </div>
                      
                  </div>
                  <p className='text-sm my-4 mx-auto text-center font-light'>Gemini may display inaquarate info,icluding about people so double check its response</p>

              </div>

          </div> 

    </div>
  )
}

export default Chat