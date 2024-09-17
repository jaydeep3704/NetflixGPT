import React, { useRef, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import validate from '../utils/validate'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

import Spinner from './Spinner'
const LoginForm = () => {
  const emailPhoneRef = useRef()
  const passwordRef = useRef()
   const [loading,setLoading]=useState(false)
  const [authError,setAuthError]=useState('')
  const [error, setError] = useState({
    emailPhone: '',
    password: '',
    
  })

  const navigate=useNavigate()


  const handleLogIn =async (e) => {
    e.preventDefault()

    setLoading(true)
    const emailPhone = emailPhoneRef.current?.value || ''
    const password = passwordRef.current?.value || ''
 
     
    // Validate inputs
    const validatedError = validate(emailPhone, password)
    setError(validatedError)

    if (Object.keys(validatedError).length === 0) {
       try {
         const userCredentails=await signInWithEmailAndPassword(auth,emailPhone,password)
         
         setAuthError('')
         setLoading(false)
       
        
       } catch (error) {
          
          if(error.code=='auth/invalid-credential')
          {
            setAuthError('Invalid Credentials')
          }
          setLoading(false)
       }

    }
    else{
      setLoading(false)
    }
    
  }

  return (
    <div className='~py-20/40 w-full h-full sm:max-w-[480px] mx-auto flex justify-center'>
      <form className="z-10 flex flex-col w-full gap-3 bg-black bg-opacity-100 ~p-10/20 sm:bg-opacity-80 mt-10">
        <h2 className="text-3xl font-bold text-white">Sign In</h2>
        <div className='text-sm text-red-600'>{authError}</div>
        <div>
          <input
            type="text"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Email"
            ref={emailPhoneRef}
          />
          <div className="py-2 text-sm text-red-600">{error.emailPhone}</div>
        </div>
        <div>
          <input
            type="password"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Password"
            ref={passwordRef}
          />
          <div className="py-2 text-sm text-red-600">{error.password}</div>
        </div>
        <button
          className="bg-[#E50914] h-[50px] text-lg rounded-md text-white font-semibold w-full flex items-center justify-center disabled:bg-red-700"
          onClick={handleLogIn}
          disabled={loading}
        >
          {loading ? <Spinner/> : 'Sign In'}
        </button>
        <Link className='text-white' to={'/signup'}>
          <span className='text-gray-400'>New to NetflixGPT? </span>
          <span className='cursor-pointer'>Sign Up</span>
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
