// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// SITE_URL / BASE_PATH let the same code deploy to a custom domain (default),
// Vercel/Netlify, or a GitHub Pages project URL, e.g.
//   SITE_URL=https://<user>.github.io BASE_PATH=/era-of-tech npm run build
const site = process.env.SITE_URL || 'https://eraoftech.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
  build: { inlineStylesheets: 'auto' },
});
