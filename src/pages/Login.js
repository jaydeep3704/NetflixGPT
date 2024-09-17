import React from 'react';
import Background from "../assets/netflixbg.jpg";
import Navbar from '../components/Navbar';
import LoginForm from '../components/LoginForm';
const Login = () => {

  console.log(Background)
    return (
        <div className='w-full h-screen bg-black'>
          <div className='absolute top-0 left-0 z-0 hidden w-full h-full sm:block'>
            <img src={Background} alt="" className='object-cover w-full h-full'/>
            <div className='absolute top-0 left-0 z-10 hidden w-full h-full bg-black opacity-65 sm:block'></div>
          </div>
          <Navbar/>
          <LoginForm/>
           
        </div>
    );
};

export default Login;