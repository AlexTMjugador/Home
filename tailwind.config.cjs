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
	},
	plugins: [],
};
