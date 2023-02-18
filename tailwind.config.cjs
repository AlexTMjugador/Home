// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			sans: ["'Exo 2'", ...defaultTheme.fontFamily.sans],
			mono: defaultTheme.fontFamily.mono,
		},
		colors: {
			// Inspired by https://davidpiesse.github.io/tailwind-md-colours/
			transparent: "transparent",
			"amber-400-accent": "#ffc400",
			"brown-400": "#8d6e63",
			"brown-500": "#795548",
			"amber-50": "#fff8e1",
		},
		extend: {
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						"--tw-prose-body": theme("colors.amber-50"),
						"--tw-prose-headings": theme("colors.amber-50"),
						"--tw-prose-lead": theme("colors.amber-50"),
						"--tw-prose-links": theme("colors.amber-50"),
						"--tw-prose-bold": theme("colors.amber-50"),
						"--tw-prose-counters": theme("colors.amber-50"),
						"--tw-prose-bullets": theme("colors.amber-50"),
						"--tw-prose-hr": theme("colors.amber-50"),
						"--tw-prose-quotes": theme("colors.amber-50"),
						"--tw-prose-quote-borders": theme("colors.amber-50"),
						"--tw-prose-captions": theme("colors.amber-50"),
						"--tw-prose-code": theme("colors.amber-50"),
						"--tw-prose-pre-code": theme("colors.amber-50"),
						"--tw-prose-pre-bg": theme("colors.amber-50"),
						"--tw-prose-th-borders": theme("colors.amber-50"),
						"--tw-prose-td-borders": theme("colors.amber-50"),
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		// From https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
		function ({ addBase, theme }) {
			function extractColorVars(colorObj, colorGroup = "") {
				return Object.keys(colorObj).reduce((vars, colorKey) => {
					const value = colorObj[colorKey];

					const newVars =
						typeof value === "string"
							? { [`--color${colorGroup}-${colorKey}`]: value }
							: extractColorVars(value, `-${colorKey}`);

					return { ...vars, ...newVars };
				}, {});
			}

			addBase({
				":root": extractColorVars(theme("colors")),
			});
		},
	],
};
