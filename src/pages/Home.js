import React from "react";
import Navbar from "../components/Navbar";
import Background from "../assets/netflixbg.jpg";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="absolute top-0 left-0 z-0 w-full h-full sm:block">
        <img src={Background} alt="" className="object-cover w-full h-full" />
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-black opacity-65 sm:block"></div>
      </div>
      <Navbar />
      <div className="z-50 ">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center justify-center w-3/4">
            <div className=" gap-2 ~text-4xl/6xl font-bold text-white text-center text-wrap">
              Unlimited movies, TV shows and more
            </div>
            <div className="font-bold text-white ~text-lg/xl">
              Starts at ₹149. Cancel anytime.
            </div>
            <div className="font text-white ~text-sm/lg mt-5 text-center text-wrap">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <button className="bg-[#E50914] ~px-20/40 h-[50px] text-lg rounded-md text-white font-semibold  
            flex items-center justify-center disabled:bg-red-700 mt-20 hover:bg-red-700" onClick={()=>navigate('/signup')}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
