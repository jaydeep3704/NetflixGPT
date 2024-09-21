
import { useEffect } from "react"
import { addTopRatedMovies} from "../store/slices/movieSlice"
import { useDispatch } from "react-redux"
import {options} from "../constants.js"
const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const fetchTopRated=async ()=>{
        try {
          const response=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', options)
          const json=await response.json()
          const results=json.results
          dispatch(addTopRatedMovies(results))
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        fetchTopRated()
    })

    
}

export default useTopRatedMovies

