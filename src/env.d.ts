// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
	readonly PUBLIC_SITE_TAGLINE: string;
	readonly PUBLIC_SITE_DESCRIPTION: string;
	readonly PUBLIC_SITE_REPOSITORY: string;
	readonly DEV: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
