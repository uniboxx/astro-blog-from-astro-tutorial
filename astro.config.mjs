// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://uniboxx.github.io',
  base: '/astro-blog-from-astro-tutorial',

  integrations: [preact()],
});
