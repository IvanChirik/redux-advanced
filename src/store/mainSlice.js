import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartVisible: false,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeShowOrHideCard(state) {
            state.isCartVisible = !state.isCartVisible;
        },
    }
});
export const mainActions = mainSlice.actions;
export default mainSlice.reducer;