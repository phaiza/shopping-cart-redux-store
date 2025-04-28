import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice'; // <-- add this
import cartReducer from '../features/cart/cartSlice'; // <-- add this

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer, // <-- register it here
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
