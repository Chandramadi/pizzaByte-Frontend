import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // <-- ensures paths work correctly from the root
  build: {
    outDir: 'dist', // <-- tells Vite to put build files here (Render expects this by default)
  },
  server: {
    cors: true
  }
})
