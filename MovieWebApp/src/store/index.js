import {configureStore} from '@reduxjs/toolkit';

import movieSlice from './movie-slice';
import cartSlice from './cart-slice';

const store = configureStore({
    reducer: { cart:cartSlice.reducer, movies: movieSlice.reducer },
});

export default store;

