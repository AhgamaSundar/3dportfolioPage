import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext' // ✅ final bundle supports TLA
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext' // ✅ dep pre-bundling supports TLA
    }
  }
});