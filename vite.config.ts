import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@tokens': resolve(__dirname, './src/tokens'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MPRSDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'es' ? 'mprs-ds.es.js' : 'mprs-ds.cjs'),
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
