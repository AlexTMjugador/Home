import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "typescript-eslint";
import globals from "globals";
import parser from "astro-eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { open } from "node:fs/promises";

const baseDirectory = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
	baseDirectory: baseDirectory,
	recommendedConfig: eslint.configs.recommended,
	allConfig: eslint.configs.all,
});

async function gitignorePatterns(): Promise<string[]> {
	const lines = [];
	const linesProducer = (
		await open(path.join(baseDirectory, ".gitignore"))
	).readLines({
		encoding: "utf8",
	});

	for await (const line of linesProducer) {
		// Every line in a .gitignore file is a pattern, except for empty lines and comments
		if (line && !line.startsWith("#")) {
			lines.push(line);
		}
	}

	return lines;
}

export default defineConfig([
	globalIgnores(await gitignorePatterns()),
	eslint.configs.recommended,
	typescriptEslint.configs.recommended,
	{
		extends: compat.extends(
			"plugin:astro/recommended",
			"plugin:jsx-a11y/recommended",
			"prettier",
		),

		languageOptions: {
			globals: {
				...globals.browser,
			},

			ecmaVersion: "latest",
			sourceType: "module",
		},

		rules: {},
	},
	{
		files: ["**/tailwind.config.cjs"],

		languageOptions: {
			globals: {
				...globals.commonjs,
			},
		},
	},
	{
		files: ["**/*.astro"],

		languageOptions: {
			parser: parser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
		},
	},
]);
