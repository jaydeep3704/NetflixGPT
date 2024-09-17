import { createSlice } from "@reduxjs/toolkit";

const authSlice=createSlice({
    name:'auth',
    initialState:{
        user:null
    },
    reducers:{
        setUserInfo:(state,action)=>{
            state.user=action.payload
        },
        logoutUser:(state)=>{
            state.user=null
        }
    }
})


export const {setUserInfo,logoutUser}=authSlice.actions
export default authSlice.reducer


