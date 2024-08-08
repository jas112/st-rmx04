import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://jas112.github.io/st-rmx04/",
  plugins: [react()],
})
