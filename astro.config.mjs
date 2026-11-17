import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://nurultaqwaioh.github.io', 
  // WAJIB: Sesuai nama repositori Anda agar aset CSS/JS terbaca sempurna
  base: '/mnt', 
  vite: {
    plugins: [tailwindcss()],
  },
});
