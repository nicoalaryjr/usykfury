import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',  // Change this from true to '0.0.0.0'
    port: 5178,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})