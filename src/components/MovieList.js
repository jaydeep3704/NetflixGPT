import React from "react";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return;
  }

  return (
    <div className="px-5 py-6 text-white md:px-20 ">
      <h2 className="text-lg font-bold md:text-2xl">{title}</h2>
      
       
        <div className="z-20 flex gap-4 mt-5 overflow-x-scroll container-snap no-scrollbar">
       
          {movies.map((movie) => {
            return <MovieCard poster_path={movie.poster_path}  key={movie.id}/>;
          })}
          
        </div>
       
      </div>

  );
};

export default MovieList;
