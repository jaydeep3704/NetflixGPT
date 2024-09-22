import React,{useState} from "react";
import MovieCard from "./MovieCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore from "swiper"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useGenres from "../hooks/useGenres";





const MovieList = ({ title, movies }) => {

  const [slidesPerView, setSlidesPerView] = useState(3);
  SwiperCore.use([Navigation, Pagination]);
  const handleResize = () => {
 
      setSlidesPerView(Math.floor(window.innerWidth/190))

  };


  if (!movies ) {
    return;
  }




  return (
    <div className="px-5 mt-10 text-white md:px-10">
      <h2 className="mb-5 text-lg font-bold md:text-2xl">{title}</h2>
    
        {/* <div className="z-20 flex gap-4 mt-5 overflow-x-scroll container-snap no-scrollbar" > */}
          <Swiper modules={[Navigation,Pagination]}   slidesPerView={slidesPerView}  navigation={true}  slidesPerGroup={1} onResize={handleResize} spaceBetween={20} className="container-snap mySwiper">
          {movies.map((movie) => {
            return  (
              <SwiperSlide>
                <MovieCard poster_path={movie.poster_path} movie={movie} key={movie.id}/>
              </SwiperSlide>     
              
              
            ) 
            
          })}

          </Swiper>
          
         
        {/* </div> */}
       
      </div>

  );
};

export default MovieList;
