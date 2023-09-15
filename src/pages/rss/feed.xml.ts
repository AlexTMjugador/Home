import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import type { RSSOptions } from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

type RSSFeedItem = Extract<RSSOptions["items"], unknown[]>[number];

export async function GET(context: APIContext) {
	const blogPosts = await getCollection(
		"blog",
		(blogPost) => !blogPost.data.draft,
	);

	const markdownParser = new MarkdownIt();

	return rss({
		title: import.meta.env.PUBLIC_SITE_TAGLINE,
		description: import.meta.env.PUBLIC_SITE_DESCRIPTION,
		site: String(context.site),
		stylesheet: "/rss/pretty-feed-v3.xsl",
		items: blogPosts.map(
			(blogPost): RSSFeedItem => ({
				title: blogPost.data.title,
				description: blogPost.data.description,
				pubDate: blogPost.data.publishDate,
				content: sanitizeHtml(markdownParser.render(blogPost.body)),
				link: `/blog/post/${blogPost.slug}`,
			}),
		),
	});
}
