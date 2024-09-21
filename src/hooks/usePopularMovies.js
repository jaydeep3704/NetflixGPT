import { useEffect } from "react"
import { addPopularMovies} from "../store/slices/movieSlice"
import { useDispatch } from "react-redux"
import {options} from "../constants.js"
const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const fetchPopularMovies=async ()=>{
        try {
          const response=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', options)
          const json=await response.json()
          const results=json.results
          dispatch(addPopularMovies(results))
        } catch (error) {
          console.log(error)
        }
      }
    useEffect(()=>{
        fetchPopularMovies()
    })

    
}

export default usePopularMovies

