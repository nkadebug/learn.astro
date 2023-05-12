import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://nkadebug-learn-astro.pages.dev/',
  integrations: [tailwind(), sitemap(), svelte(), prefetch()]
});