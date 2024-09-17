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
    <div className='absolute top-0 left-0 z-20 w-screen  md:h-screen h-[50vh] bg-slate-200'>
      
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
