import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    cors: true,
  },
  // Add this for production rewrites
  resolve: {
    alias: {
      '@': '/src', // optional alias
    },
  },
})
