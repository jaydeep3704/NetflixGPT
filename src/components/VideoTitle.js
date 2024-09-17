import React from 'react'
import { FaPlay ,FaInfoCircle} from 'react-icons/fa'

const VideoTitle = ({title,description}) => {
  return (
    <div className='absolute top-0 z-20 flex flex-col items-start justify-center h-full gap-5 mb-10 text-white md:w-1/2 md:px-20 bg-gradient-to-r from-black to-transparent'>
       <h1 className='w-full text-4xl font-bold text-center md:text-left md:text-5xl '>{title}</h1>
       <div className='flex justify-center w-full gap-5 mt-5 md:justify-start'>
          <button className='flex items-center gap-3 ~px-5/10 py-2 text-lg hover:bg-opacity-80 bg-white text-black rounded-md'><FaPlay className='text-sm'/>Play</button>
          <button className='flex items-center gap-3 ~px-3/5 py-2 text-lg text-white bg-gray-400 rounded-md hover:bg-opacity-100 bg-opacity-60'><FaInfoCircle className='text-md'/>More info</button>
         
       </div>
       <p className='text-lg text-center md:text-xl text-wrap md:text-left '>{description}</p>
    </div>
  )
}

export default VideoTitle
