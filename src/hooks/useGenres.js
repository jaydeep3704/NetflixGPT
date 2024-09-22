import { useEffect } from "react"
import { options } from "../constants"
import { useDispatch } from "react-redux"
import { addGenres } from "../store/slices/movieSlice"

const useGenres=()=>{
const dispatch=useDispatch()
    const fetchGenre=async()=>{
        const response=await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        const json=await response.json()
        dispatch(addGenres(json))
    }

    useEffect(()=>{
        fetchGenre()
    },[])
}

export default useGenres