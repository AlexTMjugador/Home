import { OGImageRoute } from "astro-og-canvas";

const loremIpsum =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar tristique lectus eget pellentesque. Donec consectetur dolor nec hendrerit rhoncus. Proin nec sapien at arcu convallis tempus non eu erat. Vestibulum tincidunt neque egestas ante rutrum laoreet. Nullam at viverra nulla. Nam vitae erat augue. Ut et est venenatis, aliquet mi eu, rutrum nulla. Cras in risus lobortis, ultricies dui vitae, finibus massa. Suspendisse potenti. Phasellus pretium elementum elit, quis luctus orci aliquet id. Donec scelerisque convallis massa, sed interdum mauris tempus ac. Nullam aliquam at magna sit amet dictum.";

const title = trimAndEllideAfterLastWord(loremIpsum);
const description = trimAndEllideAfterLastWord(loremIpsum);

const titleFontSize = fitFontSizeForText(title, 32, 72);
const descriptionFontSize = fitFontSizeForText(
	description,
	26,
	Math.min(38, titleFontSize)
);

export const { getStaticPaths, get } = OGImageRoute({
	param: "postId",
	// TODO generate static paths from the frontmatter data of blog posts
	// collections. See:
	// https://docs.astro.build/en/guides/content-collections/
	pages: {
		"post/3": {
			title: title,
			description: description,
		},
	},
	getSlug: (postId) => postId,
	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		padding: 60,
		font: {
			title: {
				color: [255, 255, 255],
				size: titleFontSize,
				lineHeight: 1.3,
				weight: "Bold",
			},
			description: {
				color: [255, 255, 255],
				size: descriptionFontSize,
				lineHeight: 1.15,
				weight: "Medium",
			},
		},
		logo: {
			path: "./src/images/favicon.svg",
			size: [105, 105],
		},
		bgGradient: [
			[64, 64, 64],
			[0, 0, 0],
		],
		border: {
			color: [0, 0, 255],
			side: "inline-start",
			width: 10,
		},
	}),
});

function trimAndEllideAfterLastWord(
	text: string,
	maxLength = 200, // ~ 3 lines of text (see comments at fitFontSizeForText), after adjustments for a minimum font size of 26
	ellipsisMarker = "..."
) {
	text = text.trim();

	if (text.length <= maxLength) {
		return text;
	}

	let lastWordSeparator = text.lastIndexOf(
		" ",
		maxLength - ellipsisMarker.length
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
	initialSize: number
) {
	// 16px ~= 12pt, so in a 1200px wide image containing text at 36pt, 1200 /
	// (72 * 1.33) ~= 12.5 * 2 ~= 25 characters fit there (a character is assumed
	// to be half as wide as tall). This is a very rough approximation, but it
	// works for our purposes
	return Math.max(
		minimumSize,
		Math.round(initialSize * Math.min(25 / text.length, 1))
	);
}
