import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import mainSlice from './mainSlice';

const store = configureStore({
    reducer: {
        cart: cartSlice,
        main: mainSlice,
    }
});

export default store;


