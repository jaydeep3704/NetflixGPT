import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies=useSelector((store)=>store.movies)
    
    if(!movies) return 

  return (
    <div className='bg-black'>
         <div className='relative z-50 w-full md:-mt-[320px]  '>
       <MovieList movies={movies.nowPlayingMovies} title={"Now Playing Movies"}/>
       <MovieList movies={movies.topRatedMovies} title={"Top Rated"}/>
       <MovieList movies={movies.popularMovies} title={"Popular"}/>
       <MovieList movies={movies.upcomingMovies} title={"Upcoming Movies"}/>
       <MovieList movies={movies.nowPlayingMovies} title={"Top 10 TV Shows"}/>
    </div>
    </div>
   
  )
}

export default SecondaryContainer
