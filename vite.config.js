import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensures proper handling of client-side routes
    historyApiFallback: true
  }
});

