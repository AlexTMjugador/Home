import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
	site: "https://www.example.com",
	integrations: [
		tailwind(),
		svelte(),
		image(),
		sitemap(),
		mdx(),
		frontendistahtmlMinify(),
		prefetch(),
		robotsTxt(),
	],
});
