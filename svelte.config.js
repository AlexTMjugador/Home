import { vitePreprocess } from "@astrojs/svelte";

/** @type {import("@sveltejs/kit").Config} */
export default {
	preprocess: vitePreprocess(),
};
