import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react({
      // Routes all JSX through typography wrappers (NBSP before ?!:;)
      jsxImportSource: '@typography-jsx',
    }),
  ],
  resolve: {
    alias: {
      '@typography-jsx': path.resolve(
        rootDir,
        'src/site/utils/typography-jsx',
      ),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
  esbuild: {
    // Firebase ships @license comments that Lighthouse counts as "unminified JS"
    legalComments: 'none',
  },
  build: {
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Keep Firebase out of the main vendor chunk (loaded only on form submit)
            if (id.includes('firebase')) {
              return 'firebase';
            }
            // All React-dependent libs in ONE chunk so they share the same React instance (avoids createContext/useLayoutEffect undefined)
            if (
              id.includes('react-dom') ||
              id.includes('/react/') ||
              id.includes('\\react\\') ||
              id.includes('/scheduler/') ||
              id.includes('\\scheduler\\') ||
              id.includes('@chakra-ui') ||
              id.includes('@emotion') ||
              id.includes('react-router') ||
              id.includes('framer-motion')
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
    '**/*.webp',
    '**/*.WEBP',
  ],
});
