import React, { useEffect ,useState,useRef} from "react";
import Logo from "../assets/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { setUserInfo, logoutUser } from "../store/slices/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import { FaCaretDown, FaCaretUp, FaSearch } from "react-icons/fa";
import { motion,useAnimationControls } from "framer-motion";
import Netflix from "../assets/N.png"
const Navbar = () => {
  const navigate = useNavigate();
 
  const dispatch=useDispatch()
  const [showOptions,setShowOptions]=useState(false)
 const [scroll,setScroll]=useState(null)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(setUserInfo({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe();
  }, []);


  const handleScroll=(e)=>{
   setScroll(window.scrollY)
  }



  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[scroll])





  const user = useSelector((store) => store.auth.user);

  const handleLogout = async () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("An Error Occured while logging out");
      });
  };

 const handleOptions=()=>{
    setShowOptions((prev)=>!prev)
    
 }


  return (
    <div className={`fixed top-0 left-0  right-0 flex items-center w-full  h-[80px]   px-5 py-5 md:px-20 sm:px-10 bg-gradient-to-b from-black to-transparent justify-between z-[100] 
     transition duration-150 ease-in-out ${scroll>300 && 'bg-[#141414]'}`} >
        

      <div className="flex items-center gap-5"> 
        {/* Logo  */}
        <div>
            <img src={Logo} alt="" className="hidden w-40 md:block" />
            <img src={Netflix} alt="" className="h-10 md:hidden" />
        </div>
        {/* Links  */}
        {user && <div className="hidden lg:block">
            <ul className="flex gap-5 text-lg text-white">
              <li>Home</li>
              <li>TV Series</li>
              <li>Movies</li>
              <li>News & Popular</li>
              <li>My List</li>
            </ul>
        </div>}
      </div>  

       {/* SearchIcon And Options    */}
      {user && <div className="flex items-center gap-6 text-white">
        <FaSearch className="text-lg"/>
        <div className="w-10 h-10"><img src={user.photoURL} alt="" className="object-cover w-full h-full"/></div>
        <motion.div onClick={handleOptions} initial={{rotate:0}}   animate={{ rotate: showOptions ? 180 : 0 }}  transition={{ duration: 0.3 }} className="cursor-pointer"> <FaCaretDown/></motion.div>
       </div>
      } 
       {/* options  */}
       {
         (showOptions && <div className="fixed top-20 md:right-20  sm:right-16  right-14   w-[150px]">
          <button className="w-full py-[10px] text-lg font-medium text-center text-white bg-black border border-white" onClick={handleLogout} >Logout</button>
          </div>)
       }

    </div>
  );
};

export default Navbar;
