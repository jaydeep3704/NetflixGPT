
import { useEffect } from "react"
import { addUpcomingMovies} from "../store/slices/movieSlice"
import { useDispatch } from "react-redux"
import {options} from "../constants.js"
const useUpcomingMovies=()=>{
    const dispatch=useDispatch()
    const fetchUpcoming=async ()=>{
        try {
          const response=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', options)
          const json=await response.json()
          const results=json.results
          dispatch(addUpcomingMovies(results))
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        fetchUpcoming()
    })

    
}

export default useUpcomingMovies

