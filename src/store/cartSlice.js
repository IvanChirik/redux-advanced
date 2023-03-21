import { createSlice } from '@reduxjs/toolkit';
import { mainActions } from './mainSlice';

const initialCartState = {
    items: [],
    totalAmount: 0,
    isCartContentChanged: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        incrementGood(state, action) {
            const actionItem = action.payload;
            const newItem = state.items.find(item => item.id === action.payload.id);
            state.totalAmount++;
            state.isCartContentChanged = true;
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
            state.isCartContentChanged = true;
            const currentItem = state.items.find(item => item.id === actionId);
            if (currentItem.quantityItem === 1) {
                state.items = state.items.filter(item => item.id !== actionId);
            }
            else {
                currentItem.quantityItem--;
                currentItem.totalPrice -= currentItem.price;
            }
        },
        updateCart(state, action) {
            state.items = action.payload.items || [];
            state.totalAmount = action.payload.totalAmount;
        },
    }
});
export const sendCartData = (cartData) => {
    return async (dispatchAction) => {
        dispatchAction(mainActions.changeFetchStatus({
            status: 'request',
            title: 'Отправка запроса',
            message: 'Подождите пока отправляются данные корзины'
        }));
        const sendHttpRequest = async () => {
            const response = await fetch('https://react-joke-course-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
                method: 'PUT',
                body: JSON.stringify({ items: cartData.items, totalAmount: cartData.totalAmount }),
            });
            if (!response.ok) {
                throw new Error('Ошибка в обновлении данных корзины на сервере');
            }
        };
        try {
            await sendHttpRequest();
            dispatchAction(mainActions.changeFetchStatus({
                status: 'success',
                title: 'Запрос обработан',
                message: 'Данные успешно отправлены на сервер',
            }));
        } catch (error) {
            dispatchAction(mainActions.changeFetchStatus({
                status: 'error',
                title: 'Ошибка в отправке запроса',
                message: error.message,
            }));
        }
    }
};
export const cartActions = cartSlice.actions;
export const getRemoteCart = () => {
    return async (dispatchAction) => {
        try {
            const response = await fetch('https://react-joke-course-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            if (!response.status === 200) {
                throw new Error('Ошибка в получении данных корзины с сервера');
            }
            const cartData = await response.json();
            dispatchAction(cartActions.updateCart(cartData));
        } catch (error) {
            dispatchAction(mainActions.changeFetchStatus({
                status: 'error',
                title: 'Ошибка в отправке запроса',
                message: error.message,
            }));
        }
    }
}
export default cartSlice.reducer;