import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from "../components/MainContainer"
import SecondaryContainer from '../components/SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {

  const user=useSelector((store)=>store.auth.user)
  const navigate=useNavigate()
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  

  useEffect(()=>{
    if(!user)
    {
      navigate('/login')
    }
  },[])


  return (
    <div className='bg-black'>
      <Navbar/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
