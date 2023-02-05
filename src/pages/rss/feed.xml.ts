import rss from "@astrojs/rss";
import type { APIContext } from "astro";

export function get(context: APIContext) {
	return rss({
		title: import.meta.env.PUBLIC_SITE_TAGLINE,
		description: "A humble Astronaut’s guide to the stars",
		site: String(context.site),
		stylesheet: "/rss/pretty-feed-v3.xsl",
		// Array of `<item>`s in output xml
		// See "Generating items" section for examples using content collections and
		// glob imports
		// https://docs.astro.build/en/guides/rss/
		items: [],
	});
}
