import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import validate from '../utils/validate'
import { createUserWithEmailAndPassword ,updateProfile} from 'firebase/auth'
import { auth } from '../utils/firebase'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'
import DefaultUserProfile from "../assets/netflixUser.jpg"
const SignUpForm = () => {
  const emailPhoneRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const navigate=useNavigate()
  const [error, setError] = useState({
    emailPhone: '',
    password: '',
    confirmPassword: ''
  })

  const [loading,setLoading]=useState(false)
  const[authError,setAuthError]=useState(null)

  const handleSignUp =async (e) => {
    e.preventDefault()
    setLoading(true)
    const emailPhone = emailPhoneRef.current?.value || ''
    const password = passwordRef.current?.value || ''
    const confirmPassword = confirmPasswordRef.current?.value || ''

    // Validate inputs
    const validatedError = validate(emailPhone, password, confirmPassword)
    setError(validatedError)
     
    if (Object.keys(validatedError).length === 0) {
      await createUserWithEmailAndPassword(auth,emailPhone,password)
      .then((userCredentials)=>{
          
          setAuthError('')
          updateProfile(auth.currentUser,{
            photoURL:DefaultUserProfile
          })
          .catch((error)=>console.log(error))
          setLoading(false)
      })
      .catch((error)=>{
        if(error.code=="auth/email-already-in-use")
        {
          setAuthError('Email already in use')
        }
        setLoading(false)
      })

    }
    else{
      setLoading(false)
    }
  }

  return (
    <div className='~py-20/40 w-full h-full sm:max-w-[480px] mx-auto flex justify-center'>
      <form className="z-10 flex flex-col w-full gap-3 bg-black bg-opacity-100 ~p-10/20 sm:bg-opacity-80 mt-10">
        <h2 className="text-3xl font-bold text-white">Sign Up</h2>
        {authError && <div className='py-2 text-sm text-red-600'>{authError}</div>}
        <div>
          <input
            type="text"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Email "
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
        <div>
          <input
            type="password"
            className="w-full px-5 py-4 bg-[#333] rounded-sm bg-opacity-40 text-white outline-none focus:bg-[#292828] border-b-2 border-transparent focus:border-red-600"
            placeholder="Confirm Password"
            ref={confirmPasswordRef}
          />
          <div className='py-2 text-sm text-red-600'>{error.confirmPassword}</div>
        </div>


        <button
          className="bg-[#E50914] py-3 text-lg rounded-md text-white font-semibold w-full flex items-center justify-center disabled:bg-red-700"
          onClick={handleSignUp}
          disabled={loading}
        >
          {loading ? <Spinner/> : 'Sign Up'}
        </button>
        <Link className='text-white' to={'/login'}>
          <span className='text-gray-400'>Have an Account? </span>
          <span className='cursor-pointer'>Sign In</span>
        </Link>
      </form>
    </div>
  )
}

export default SignUpForm
