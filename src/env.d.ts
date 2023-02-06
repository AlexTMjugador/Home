/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
	readonly PUBLIC_SITE_TAGLINE: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
