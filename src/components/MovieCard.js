import React, { useEffect } from 'react'
import { IMG_CDN } from '../constants'

const MovieCard = ({poster_path,movie}) => {

 

  return (
    <div className='flex-shrink-0 overflow-hidden transition aspect-[2/3]' draggable={true}>
       <img src={IMG_CDN+poster_path} alt="" className='transition duration-150 ease-in-out rounded-md hover:scale-110' />
    </div>
  )
}

export default MovieCard
