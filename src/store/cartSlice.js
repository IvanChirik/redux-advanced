import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    items: [],
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        incrementGood(state, action) {
            const actionItem = action.payload;
            const newItem = state.items.find(item => item.id === action.payload.id);
            state.totalAmount++;
            if (!newItem) {
                state.items.push({
                    id: actionItem.id,
                    title: actionItem.title,
                    price: actionItem.price,
                    quantityItem: 1,
                    totalPrice: actionItem.price,
                });
            }
            else {
                newItem.quantityItem++;
                newItem.totalPrice += newItem.price;
            }
        },
        decrementGood(state, action) {
            const actionId = action.payload;
            state.totalAmount--;
            const currentItem = state.items.find(item => item.id === actionId);
            if (currentItem.quantityItem === 1) {
                state.items = state.items.filter(item => item.id !== actionId);
            }
            else {
                currentItem.quantityItem--;
                currentItem.totalPrice -= currentItem.price;
            }
        },
    }
});
export const cartActions = cartSlice.actions;
export default cartSlice.reducer;