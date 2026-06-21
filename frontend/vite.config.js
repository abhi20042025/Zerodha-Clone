import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/auth': { target: process.env.VITE_API_URL, changeOrigin: true },
      '/api': { target: process.env.VITE_API_URL, changeOrigin: true },
      '/allHoldings': { target: process.env.VITE_API_URL, changeOrigin: true },
      '/allPositions': { target: process.env.VITE_API_URL, changeOrigin: true },
      '/newOrder': { target: process.env.VITE_API_URL, changeOrigin: true },
    },
  },
  publicDir: 'public',
});