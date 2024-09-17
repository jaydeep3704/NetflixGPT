import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import movieReducer from "./slices/movieSlice"
const store=configureStore({
       reducer:{
        auth:authReducer,
        movies:movieReducer
       }
})

export default store