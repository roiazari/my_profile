import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 הוספת הנתיב הבסיסי של המאגר ב-GitHub Pages
  base: '/my_profile/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});