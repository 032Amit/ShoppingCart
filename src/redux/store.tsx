import {configureStore} from '@reduxjs/toolkit';
import ProductReducer from '../redux/ProductsSlice';
import CartReducer from '../redux/CartSlice';

export const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
