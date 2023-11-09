import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    // NOTE added alias
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    // NOTE added alias
  },
  build: {
    outDir: 'docs',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
