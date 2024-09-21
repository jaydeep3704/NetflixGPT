import React,{useRef,useEffect} from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideoBackground = ({movieId}) => {

 useMovieTrailer(movieId)
 const trailer=useSelector((store)=>store.movies.trailerVideo)

  if(!trailer)
  {
    return
  }


  return (
   
    <div className="relative w-full md:-top-36 top-[60px]">
   <iframe
  className="w-full aspect-video"
  src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=1&loop=1&playlist=${trailer?.key}&frameborder=0&controls=0`}
  title="YouTube video player"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
></iframe>

  </div>
  
  );
}

export default VideoBackground
