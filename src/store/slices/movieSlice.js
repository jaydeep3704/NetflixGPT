import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
   
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        upcomingMovies:null,
        genres:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addGenres:(state,action)=>{
            state.upcomingMovies=action.payload
        }
    }
})

export const {addNowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addGenres}=movieSlice.actions
export default movieSlice.reducer