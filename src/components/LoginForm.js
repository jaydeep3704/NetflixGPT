import React, { useState } from "react";
import { Link } from "react-router-dom";
import useValidation from "../utils/useValidation";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { emailError, passwordError } = useValidation(email, password);
  const handleSignIn=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="~py-20/40   w-full h-full sm:max-w-[480px] mx-auto flex  justify-center ">
      <form className="z-10 flex flex-col w-full gap-8  bg-black bg-opacity-100   ~p-10/20     sm:bg-opacity-80 mt-10">
        <h2 className="text-3xl font-bold text-white">Sign In</h2>
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
          <div className="pt-2 text-sm text-red-600">{passwordError}</div>
        </div>

        <button className="bg-[#E50914] py-3 text-lg rounded-md text-white font-semibold w-full" onClick={handleSignIn}>
          Sign In
        </button>

        <a href="" className="w-full text-center text-white">
          Forgot Password ?
        </a>
        <Link className="text-white " to={"/signup"}>
          <span className="text-gray-400">New to Netflix ? </span>
          <span className="cursor-pointer">Sign Up Now</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
