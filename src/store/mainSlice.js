import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCartVisible: false,
    fetchStatusState: null,
};

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeShowOrHideCard(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        changeFetchStatus(state, action) {
            state.fetchStatusState = action.payload;
        }
    }
});
export const mainActions = mainSlice.actions;
export default mainSlice.reducer;