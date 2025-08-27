import type { BlogPost, BlogPostMeta } from '$lib/types/blog';
import { parseMarkdown } from '$lib/utils/blog';

export async function loadBlogPosts(): Promise<BlogPostMeta[]> {
	const modules = import.meta.glob('/src/content/blog/**/*.md', { query: '?raw', import: 'default' });
	const posts: BlogPostMeta[] = [];

	for (const path in modules) {
		const content = await modules[path]() as string;
		const slug = path.replace('/src/content/blog/', '').replace('.md', '');
		
		const post = parseMarkdown(content, slug);
		
		posts.push({
			slug: post.slug,
			title: post.title,
			description: post.description,
			publishDate: post.publishDate,
			categories: post.categories,
			tags: post.tags,
			coverImage: post.coverImage,
			author: post.author,
			language: post.language,
			readingTime: post.readingTime
		});
	}

	return posts;
}

export async function loadBlogPost(slug: string): Promise<BlogPost | null> {
	const modules = import.meta.glob('/src/content/blog/**/*.md', { query: '?raw', import: 'default' });
	
	for (const path in modules) {
		const postSlug = path.replace('/src/content/blog/', '').replace('.md', '');
		if (postSlug === slug) {
			try {
				const content = await modules[path]() as string;
				return parseMarkdown(content, slug);
			} catch {
				return null;
			}
		}
	}
	
	return null;
}
