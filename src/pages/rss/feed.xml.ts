import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export function get(context: APIContext) {
	return rss({
		// `<title>` field in output xml
		title: "Buzz’s Blog",
		// `<description>` field in output xml
		description: "A humble Astronaut’s guide to the stars",
		// Pull in your project "site" from the endpoint context
		// https://docs.astro.build/en/reference/api-reference/#contextsite
		site: String(context.site),
		stylesheet: "/rss/pretty-feed-v3.xsl",
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and
		// glob imports
		// https://docs.astro.build/en/guides/rss/
		items: [],
	});
}
