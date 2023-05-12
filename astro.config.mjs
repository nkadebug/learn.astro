import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://nkadebug-learn-astro.pages.dev/',
  integrations: [tailwind(), sitemap(), svelte()]
});