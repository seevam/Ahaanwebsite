import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: import.meta.env.PUBLIC_SITE_URL ?? 'https://example.com',
  vite: { plugins: [tailwindcss()] },
});
