import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Update once the Vercel URL / custom domain is known
  site: 'https://design-portfolio.vercel.app',
  integrations: [mdx(), sitemap()],
});
