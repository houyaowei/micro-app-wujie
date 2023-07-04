import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  server: {
    proxy: {
      '/user': {
        target: "http://localhost:8000",
        changeOrigin: true
      }
    }
  }
})
