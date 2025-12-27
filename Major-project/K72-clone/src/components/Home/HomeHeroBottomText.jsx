import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

const HomeHeroBottomText = () => {
    const [currentTime,setCurrentTime] = useState(new Date())

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date())
        },1000)

        return ()=>clearInterval(timer)
    },[])
    const formattedTime = currentTime.toLocaleTimeString()
  return (
    <div className='flex justify-center items-center font-[font2] gap-2'>
        <div className='flex left-5 absolute'>⏰ {formattedTime}</div>
      <div className='text-[4vw] h-[85px] leading-[4.5vw] uppercase border-4 rounded-full px-8 hover:border-[#d3f350]-600 hover:text-[#d3f350]'>
        <Link to="/projects">Projects</Link>
      </div>
      <div className='text-[4vw] h-[85px] leading-[4.5vw] uppercase border-4 rounded-full px-8 hover:border-[#d3f350]-600 hover:text-[#d3f350]'>
        <Link to="/agence">Agence</Link>
      </div>
    </div>
  )
}

export default HomeHeroBottomText
