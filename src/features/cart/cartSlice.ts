import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../products/productsSlice'; // reuse Product type

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<Product>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart(state, action: PayloadAction<number>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Remove the item completely
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
export type { CartItem };
