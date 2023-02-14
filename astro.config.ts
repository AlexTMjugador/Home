import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";
import critters from "astro-critters";

export default defineConfig({
	site: import.meta.env.DEV
		? "http://localhost:3000"
		: "https://alegon.pages.dev",
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
			},
		}),
		svelte(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		sitemap(),
		mdx(),
		robotsTxt(),
		webmanifest({
			name: "Alejandro's personal space",
			icon: "src/images/favicon.svg",
			theme_color: "#795548",
		}),
		frontendistahtmlMinify({
			htmlTerserMinifierOptions: {
				decodeEntities: true,
				removeComments: true,
				sortAttributes: true,
				sortClassName: true,
				collapseWhitespace: true,
				conservativeCollapse: true,
			},
		}),
		critters(),
	],
});
