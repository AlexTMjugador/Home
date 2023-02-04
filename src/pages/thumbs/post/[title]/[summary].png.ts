import { Resvg } from "@resvg/resvg-js";
import type { APIContext, GetStaticPathsResult } from "astro";
import satori from "satori";

export async function get({ params }: APIContext) {
	return {
		body: new Resvg(
			await satori(
				{
					type: "div",
					props: {
						children: `${params.title}: ${params.summary}`,
						style: {
							fontSize: 128,
							background: "white",
							width: "100%",
							height: "100%",
							display: "flex",
							textAlign: "center",
							alignItems: "center",
							justifyContent: "center",
						},
					},
				},
				{
					width: 1200,
					height: 600,
					fonts: [
						{
							name: "Roboto",
							data: await (
								await fetch(
									"https://api.fontsource.org/v1/fonts/roboto/latin-300-normal.ttf"
								)
							).arrayBuffer(),
							weight: 300,
						},
					],
				}
			)
		)
			.render()
			.asPng(),
		encoding: "binary",
	};
}

export function getStaticPaths(): GetStaticPathsResult {
	// TODO generate static paths from the frontmatter data of blog posts
	// collections. See:
	// https://docs.astro.build/en/guides/content-collections/
	return [
		{
			params: {
				title: "Hello world",
				summary: "Static, build-time blog post thumbnail generation test.",
			},
		},
	];
}
