import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import pagefind from "astro-pagefind";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	site: import.meta.env.DEV ? "http://localhost:4321" : "https://alegon.dev",
	build: {
		format: "file",
		assets: "assets",
	},
	integrations: [
		tailwind({
			applyBaseStyles: true,
		}),
		sitemap(),
		mdx(),
		robotsTxt(),
		webmanifest({
			name: "Alejandro's personal space",
			icon: "src/images/favicon.svg",
			theme_color: "#795548",
		}),
		pagefind(),
		critters(),
		compress({
			Path: ["./dist"],
			Exclude: ["./dist/assets"],
		}),
	],
});
