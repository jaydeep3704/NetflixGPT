import React, { useEffect } from 'react'
import { IMG_CDN } from '../constants'

const MovieCard = ({poster_path}) => {


  return (
    <div className='flex-shrink-0 w-32 overflow-hidden transition md:w-44'>
       <img src={IMG_CDN+poster_path} alt="" className='transition duration-150 ease-in-out rounded-md hover:scale-110' />
    </div>
  )
}

export default MovieCard
