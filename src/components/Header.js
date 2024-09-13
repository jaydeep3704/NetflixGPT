import React from 'react'
import Logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className='w-full h-[100px] items-center ~px-5/60   md:bg-gradient-to-b from-black to-transparent     absolute top-0 left-0 z-40 flex'>
      <div className='flex-shrink-0 ~w-32/44'>
         <img src={Logo} alt="logo" className='h-full' />
      </div>
      
    </div>
  )
}

export default Header
