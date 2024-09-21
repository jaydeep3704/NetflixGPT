import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'




const MainContainer = () => {

   const nowPlayingMovies=useSelector((store)=>store.movies?.nowPlayingMovies)
   if(nowPlayingMovies==null) return 

   const mainMovie=nowPlayingMovies[1]
  
   const {original_title,overview,id}=mainMovie


  return (
    <div className='md:h-screen' >
        <VideoBackground movieId={id}/>
        <VideoTitle title={original_title} overview={overview}/>
    </div>
  )
}

export default MainContainer
