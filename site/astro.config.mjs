// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'http://localhost:4321',
  integrations: [sitemap()],
  server: {
    // Desarrollo interno con Cloudflare Tunnel temporal para demos externas.
    allowedHosts: true,
  },
  vite: {
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
