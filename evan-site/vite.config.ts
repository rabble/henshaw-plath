import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['tseep', '@nostr-dev-kit/ndk'],
    exclude: []
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'nostr': ['@nostr-dev-kit/ndk', 'nostr-tools']
        }
      }
    }
  }
})
