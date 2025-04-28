import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shopping-cart-redux-store', // <-- your repo name here!
  plugins: [react()],
});
