import { defineCollection, z } from "astro:content"
import { glob, file } from "astro/loaders"

const posts = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/data/posts" })
})
// const posts = defineCollection({
// 	loader: file("src/data/posts/data.json")
// })

export const collections = { posts }
