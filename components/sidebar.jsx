"use client"
import { Context } from '@/app/Context/context'
import Image from 'next/image'
import { useContext, useState } from 'react'
const Sidebar = () => {
  const [extended, setextended] = useState(true)
  const { prevPrompt, setrecentPrompt, onSent,newChat} = useContext(Context)
  const loadPrompt = async (prompt)=>{
    setrecentPrompt(prompt)    
    await onSent(prompt)
  }

  return (
    <div className='sm:hidden md:inline-flex min-h-screen px-7 py-4 flex-col justify-between bg-[#f0f4f9]'>
      <div>
        <Image
          onClick={()=>setextended(!extended)}
          className='block ml-3 cursor-pointer'
          src={"./Menu.svg"}
          width={25}
          height={25}
          alt="Picture of the menu"
        />
        <div onClick={()=>newChat()} className='mt-[50px] inline-flex items-center gap-3 px-4 py-3 bg-[#e6eaf1] cursor-pointer rounded-[50px] text-sm text-grey'>
          <Image
            src={"./NewChat.svg"}
            width={25}
            height={25}
            alt="Picture of the Newchat" />
          {extended ? <p>New chat</p>:null}  
        </div>
        {extended ? <div className='flex flex-col'>
          <p className='mt-[30px] mb-[20px]'>Recent</p>
          {prevPrompt.map((item, index) => {
            return(
            <div onClick={()=>loadPrompt(item)} key={index} className='flex items-start gap-3 p-3 pr-[40px] rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]'>
              <Image
                src={"./message_icon.svg"}
                width={25}
                height={25}
                alt="Picture of the message"
              />
              <p>{item.slice(0,18)}...</p>
              </div>   
            )  
          })}
          
        </div>: null}
        

      </div>
      <div className=''>
        <div className='flex gap-2 px-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]'>
          <Image
            src={"./question.svg"}
            width={25}
            height={25}
            alt="Picture of the menu"
          />
          {extended ? <p>Help</p> : null}
        </div>
        <div className='flex gap-2 px-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]'>
          <Image
            src={"./history.svg"}
            width={25}
            height={25}
            alt="Picture of the menu"
          />
          {extended ? <p>History</p> : null}
        </div>
        <div className='flex gap-2 px-4 py-3 rounded-[50px] cursor-pointer hover:bg-[#e2e6eb]'>
          <Image
            src={"./settings.svg"}
            width={25}
            height={25}
            alt="Picture of the menu"
          />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar