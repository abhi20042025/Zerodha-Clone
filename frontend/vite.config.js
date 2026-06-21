import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
    proxy: {
      '/auth': { target: 'http://localhost:3002', changeOrigin: true },
      '/api': { target: 'http://localhost:3002', changeOrigin: true },
      '/allHoldings': { target: 'http://localhost:3002', changeOrigin: true },
      '/allPositions': { target: 'http://localhost:3002', changeOrigin: true },
      '/newOrder': { target: 'http://localhost:3002', changeOrigin: true },
    },
  },
  publicDir: 'public',
});
