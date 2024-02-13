import { defineCollection } from "astro/content/runtime";
import { z } from "astro/zod";

export const collections = {
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().default(false),
			publishDate: z.date(),
		}),
	}),
};
