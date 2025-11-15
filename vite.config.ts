import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // הנתיב הבסיסי שחייב להיות שם המאגר (כולל סלאשים)
  base: '/my_profile/',
  // 👇 וודא שהפלט הוא אכן 'dist' (זו ברירת המחדל, אך חשוב לוודא)
  build: {
    outDir: 'dist',
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});