import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";

export default defineConfig({
	integrations: [
		tailwind(),
		image(),
		sitemap(),
		mdx(),
		frontendistahtmlMinify(),
	],
});
