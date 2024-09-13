import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useValidation from '../utils/useValidation'
const SignUpForm = () => {

 
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confirmPassword,setConfirmPassword]=useState('')
  const {emailError,passwordError}=useValidation(email,password)
  return (
    <div className='~py-20/40   w-full h-full  sm:max-w-[480px] mx-auto flex  justify-center '>
    <form className="z-10 flex flex-col w-full gap-3  bg-black bg-opacity-100   ~p-10/20     sm:bg-opacity-80 mt-10">
        <h2 className="text-3xl font-bold text-white">Sign Up</h2>
        <div>
          <input
            type="text"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="py-2 text-sm text-red-600">{emailError}</div>
        </div>
        <div>
          <input
            type="text"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="py-2 text-sm text-red-600">{passwordError}</div>
        </div>
      <div>
        <input type="text" className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
        <div className='py-2 text-sm text-red-600'>{confirmPassword!==password ? "passwords do not match":""}</div>
      </div>
       
        <button className="bg-[#E50914] py-3 text-lg rounded-md text-white font-semibold w-full">Sign Up</button>
        <Link className='text-white ' to={'/login'}><span className='text-gray-400'>Have an Account ? </span><span className='cursor-pointer'>Sign In</span></Link>
    </form>
  </div>
  )
}

export default SignUpForm
