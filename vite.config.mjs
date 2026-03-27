import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Same-origin proxy: avoids CORS when POSTing JSON from localhost to Render.
    proxy: {
      '/api/webhooks/leads/website': {
        target: 'https://llp-erp-server.onrender.com',
        changeOrigin: true,
      },
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // All React-dependent libs in ONE chunk so they share the same React instance (avoids createContext/useLayoutEffect undefined)
            if (
              id.includes('react-dom') ||
              id.includes('react/') ||
              id.includes('scheduler') ||
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('react-router') ||
              id.includes('framer-motion') ||
              id.includes('react-compare-image') ||
              id.includes('react-simple-image-slider')
            ) {
              return 'vendor';
            }
          }
        },
      },
    },
  },
  assetsInclude: [
    '**/*.PNG',
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.JPG',
    '**/*.JPEG',
  ],
});
