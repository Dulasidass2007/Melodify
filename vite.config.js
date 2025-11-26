import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use repo base when building for production (GitHub Pages),
  // but use root when running `npm run dev` locally.
  base: process.env.NODE_ENV === 'production' ? '/Melodify/' : '/'
})
