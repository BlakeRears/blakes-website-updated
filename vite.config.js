import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Set the base path to your custom domain or repository name
  base: 'https://blakerears.com/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'build', // Output directory for the build
    assetsDir: 'assets', // Directory for assets like JS, CSS
    rollupOptions: {
      output: {
        // Ensure JavaScript files have .js extension
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
});