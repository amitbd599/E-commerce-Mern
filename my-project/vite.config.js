import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    mainFields: [],
    alias: [
      {
        find: 'axios',
        replacement: path.resolve(__dirname, 'node_modules', 'axios/dist/esm/axios.js'),
      },
    ],
  },
  server: {
    port: 4000,
    proxy: {

      '/api': {
        target: 'https://mern-api.amitjs.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  define: {
    'process.env': {}
  }
})
