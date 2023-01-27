import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';


export default defineConfig({
  plugins: [vue(), viteCompression({
    verbose: true,
    algorithm: 'brotliCompress' 
  })]
})
