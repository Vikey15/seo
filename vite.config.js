import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/ecommerce-api/bo': {
        target: 'http://34.212.167.225:9000', 
        changeOrigin: true, 
        rewrite: (path) => path.replace(/^\/ecommerce-api\/bo/, '/ecommerce-api/bo'), 
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: './src/main.js', // Entry point for your app
  //     output: {
  //       dir: 'dist', // Output directory
  //     },
  //   },
  // }
});
