
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const {prompt} =req.body
        const apiKey = process.env.NEXT_GEMINI_API_KEY;
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-pro",
        });
        const generationConfig = {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        };
        const safetySettings = [
            {
                category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
            },
            {
                category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
            },
        ];
            const chatSession = model.startChat({
                generationConfig,
                safetySettings,
                history: [
                ],
            });
    
        const result = await chatSession.sendMessage(prompt);
        return NextResponse.json({ success: true, message: result.response.text() }, { status: 200 });
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, message: "We are facing an issue" }, { status: 500 });
    }
    






}