import { configureStore } from '@reduxjs/toolkit';
import cartSlice, { cartsFetch } from './features/cartSlice';
import { cartSliceApi } from './features/cartSliceApi';
const store = configureStore({
    reducer: {
        cart: cartSlice,
        [cartSliceApi.reducerPath]: cartSliceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartSliceApi.middleware),
});

store.dispatch(cartsFetch());


export default store;