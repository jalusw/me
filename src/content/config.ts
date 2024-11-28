import { defineCollection, z } from "astro:content";

export const writingSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().max(200),
});

export type Writing = z.infer<typeof writingSchema>;

export const blogCollection = defineCollection({
  schema: writingSchema,
});

export const collections = {
  blog: blogCollection,
};
