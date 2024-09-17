import { options } from "../constants";
import { addTrailer } from "../store/slices/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch()

    const getMovieVideos = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          options
        );
        const json = await response.json();
    
        const trailerList = json.results.filter(
          (movie) => movie.type === "Trailer"
        );
        const trailer = trailerList.length > 0 ? trailerList[0] : json.results[0];
        dispatch(addTrailer(trailer));
      };
    
      useEffect(() => {
        getMovieVideos();
      }, []);
    
}

export default useMovieTrailer