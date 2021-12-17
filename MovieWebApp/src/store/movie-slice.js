import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies(state,action){
            state.movies=action.payload.movies;
        },
        
    },
});

export const moviesActions = movieSlice.actions;

export default movieSlice;