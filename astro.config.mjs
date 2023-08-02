import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://adapt2.com',
  integrations: [tailwind(), partytown(), image(), sitemap(), mdx()]
});