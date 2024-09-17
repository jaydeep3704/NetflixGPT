import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import {useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from '../components/MainContainer'
import SecondaryContainer from '../components/SecondaryContainer'
const Browse = () => {

  const user=useSelector((store)=>store.auth.user)
  const navigate=useNavigate()
  useNowPlayingMovies()

  useEffect(()=>{
    if(!user)
    {
      navigate('/login')
    }
  },[])


  return (
    <div>
       <Navbar/>
{/*     main container
         -VideoBackground
         -video title
        Secondary Container
          -MovieList * n
            - cards*n
*/}
      <MainContainer/>
      {/* <SecondaryContainer/> */}

    </div>
  )
}

export default Browse
