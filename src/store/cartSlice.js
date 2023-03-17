import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    isCartView: false,
    numberOfGoodsCart: 0,
    totalAmountOfGood: 0,
    priceOfGood: 7,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        incrementGood(state) {
            state.totalAmountOfGood += state.priceOfGood;
            state.numberOfGoodsCart++;
        },
        decrementGood(state) {
            state.numberOfGoodsCart--;
            state.totalAmountOfGood -= state.priceOfGood;
        },
        toggleCartView(state) {
            state.isCartView = !state.isCartView;
        },
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;