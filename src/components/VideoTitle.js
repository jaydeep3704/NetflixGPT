
import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
const VideoTitle = ({title,overview}) => {
  return (
   <div className='z-30 w-full mt-20 sm:mt-0 md:h-full md:absolute md:bg-gradient-to-r from-black md:-top-10 '>
    <div className='md:absolute z-20 flex flex-col gap-5 px-5 text-white md:pt-52 md:px-20 top-[240px] '>
    <h1 className='text-2xl font-bold md:text-5xl '>{title}</h1>
    <p className='w-full text-base lg:w-1/2'>{overview}</p>
    <div className='flex gap-3'>
       <button className='w-[150px] text-center p-2 bg-white text-black text-xl flex justify-center items-center gap-3 rounded-md'><FaPlay className='text-sm'/>Play</button>
       <button className='w-[150px] text-center p-2 bg-gray-400 bg-opacity-50 text-xl flex justify-center items-center gap-3 rounded-md'><FiInfo className='text-md'/>More Info</button>
    </div>
   </div>
    
 </div>
  
    
  
   
  )
}

export default VideoTitle
