// VITE CONFIG
// ADDED COPY
import copy from 'vite-plugin-copy'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    copy({
      targets: [
        { src: 'RenuSolutions.client/sitemap.xml', dest: 'docs' }
      ],
      hook: 'writeBundle'
    })
  ],
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


// NOTE see also robots.txt