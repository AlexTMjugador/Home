import { OGImageRoute } from "astro-og-canvas";
import { CollectionEntry, getCollection } from "astro:content";

const blogPosts = await getCollection(
	"blog",
	(blogPost) => !blogPost.data.draft,
);

export const { getStaticPaths, get } = OGImageRoute({
	param: "postId",
	pages: blogPosts.reduce(
		(pagesObject, blogPost) => {
			pagesObject[blogPost.slug] = blogPost;
			return pagesObject;
		},
		{} as Record<string, CollectionEntry<"blog">>,
	),
	getSlug: (postSlug: string) => `blog/post/${postSlug}`,
	getImageOptions: (_: string, page: CollectionEntry<"blog">) => {
		const title = trimAndEllideAfterLastWord(page.data.title);
		const description = trimAndEllideAfterLastWord(page.data.description);

		const titleFontSize = fitFontSizeForText(title, 32, 72);
		const descriptionFontSize = fitFontSizeForText(
			description,
			26,
			Math.min(38, titleFontSize),
		);

		return {
			title: title,
			description: description,
			format: "PNG",
			padding: 60,
			fonts: ["https://api.fontsource.org/v1/fonts/exo-2/latin-400-normal.ttf"],
			font: {
				title: {
					color: [255, 248, 225],
					families: ["Exo 2"],
					size: titleFontSize,
					lineHeight: 1.3,
					weight: "Bold",
				},
				description: {
					color: [255, 248, 225],
					families: ["Exo 2"],
					size: descriptionFontSize,
					lineHeight: 1.15,
					weight: "Medium",
				},
			},
			logo: {
				path: "./src/images/favicon_light_og.png",
			},
			bgGradient: [
				[141, 110, 99],
				[121, 85, 72],
			],
			border: {
				color: [255, 196, 0],
				side: "inline-start",
				width: 10,
			},
		};
	},
});

function trimAndEllideAfterLastWord(
	text: string,
	maxLength = 200, // ~ 3 lines of text (see comments at fitFontSizeForText), after adjustments for a minimum font size of 26
	ellipsisMarker = "...",
) {
	text = text.trim();

	if (text.length <= maxLength) {
		return text;
	}

	let lastWordSeparator = text.lastIndexOf(
		" ",
		maxLength - ellipsisMarker.length,
	);

	lastWordSeparator =
		lastWordSeparator == -1
			? maxLength - ellipsisMarker.length
			: lastWordSeparator;

	return text.substring(0, lastWordSeparator) + ellipsisMarker;
}

function fitFontSizeForText(
	text: string,
	minimumSize: number,
	initialSize: number,
) {
	// 16px ~= 12pt, so in a 1200px wide image containing text at 36pt, 1200 /
	// (72 * 1.33) ~= 12.5 * 2 ~= 25 characters fit there (a character is assumed
	// to be half as wide as tall). This is a very rough approximation, but it
	// works for our purposes
	return Math.max(
		minimumSize,
		Math.round(initialSize * Math.min(25 / text.length, 1)),
	);
}
