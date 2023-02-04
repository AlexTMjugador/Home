import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";

export default defineConfig({
	site: "https://www.example.com",
	integrations: [
		tailwind(),
		svelte(),
		image(),
		sitemap(),
		mdx(),
		prefetch(),
		robotsTxt(),
		webmanifest({
			name: "Alejandro's personal space",
			icon: "src/images/favicon.svg",
			theme_color: "#3367D6",
		}),
		frontendistahtmlMinify(),
	],
});
