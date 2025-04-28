import { createSlice } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [
    { id: 1, name: 'Apple iPhone 15', price: 999 },
    { id: 2, name: 'Samsung Galaxy S24', price: 899 },
    { id: 3, name: 'Google Pixel 8', price: 799 },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // You can add product-related reducers later if needed
  },
});

export default productsSlice.reducer;
export type { Product };
