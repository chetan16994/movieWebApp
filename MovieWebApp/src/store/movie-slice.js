import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movies: [],
    },
    reducers: {
        setMovies(state,action){
            state.movies=action.payload.movies;
            console.log(state.movies);
        },
        increaseCapacity(state,action){
            const id = action.payload;
            for (let key in state.movies) {
                console.log(key, state.movies[key].id)
                if (id === state.movies[key].id) {
                    state.movies[key].capacity += 1;
                }
            }
        },
        decreaseCapacity(state,action){
            const id=action.payload;
            console.log(id)
            for(let key in state.movies){
                if (id === state.movies[key].id){
                    state.movies[key].capacity -= 1;
                }
            }
        },
        deleteMovie(state,action){
            const id=action.payload;
            console.log(id)
            for (let key in state.movies) {
                if (id === state.movies[key].id) {
                    console.log(state.movies[key])
                    delete state.movies[key];
                    // .pop(state.movies[key]);
                }
            }
        }
    },
});

export const moviesActions = movieSlice.actions;

export default movieSlice;