import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Live URL. Change when a custom domain is added
  site: 'https://tosin-design-portfolio.vercel.app',
  integrations: [mdx(), sitemap()],
});
