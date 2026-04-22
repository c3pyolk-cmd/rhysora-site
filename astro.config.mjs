import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rhysora.com',

  build: {
    assets: 'assets',
  },

  integrations: [sitemap()],
});