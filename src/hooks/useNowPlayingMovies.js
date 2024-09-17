import { useEffect } from "react"
import { addNowPlayingMovies } from "../store/slices/movieSlice"
import { useDispatch } from "react-redux"
import {options} from "../constants.js"
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch()
    const fetchNowPlaying=async ()=>{
        try {
          const response=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
          const json=await response.json()
          const results=json.results
          dispatch(addNowPlayingMovies(results))
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        fetchNowPlaying()
    })

    
}

export default useNowPlayingMovies

