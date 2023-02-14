// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	readonly PUBLIC_SITE_TAGLINE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
