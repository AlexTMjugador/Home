import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";
import pagefind from "astro-pagefind";
import frontendistahtmlMinify from "@frontendista/astro-html-minify";
import critters from "astro-critters";
import compress from "astro-compress";

export default defineConfig({
	site: import.meta.env.DEV ? "http://localhost:3000" : "https://alegon.dev",
	build: {
		format: "file",
		assets: "assets",
	},
	integrations: [
		tailwind({
			applyBaseStyles: true,
		}),
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
		pagefind(),
		frontendistahtmlMinify({
			html: {
				decodeEntities: true,
				removeComments: true,
				sortAttributes: true,
				sortClassName: true,
				collapseWhitespace: true,
				conservativeCollapse: true,
			},
		}),
		critters(),
		compress({
			path: ["./dist/giscus", "./dist/icons", "./dist/thumbs"],
		}),
	],
});
