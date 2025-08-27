import { marked } from 'marked';
import type { BlogPost, BlogPostMeta, BlogFrontmatter } from '$lib/types/blog';

export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const wordCount = content.trim().split(/\s+/).length;
	return Math.ceil(wordCount / wordsPerMinute);
}

function parseFrontmatter(fileContent: string): { frontmatter: BlogFrontmatter; content: string } {
	const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
	const match = fileContent.match(frontmatterRegex);
	
	if (!match) {
		throw new Error('Invalid frontmatter format');
	}
	
	const [, frontmatterText, content] = match;
	const frontmatter: Partial<BlogFrontmatter> = {};
	
	// Parse YAML-like frontmatter
	const lines = frontmatterText.split('\n');
	for (const line of lines) {
		const colonIndex = line.indexOf(':');
		if (colonIndex === -1) continue;
		
		const key = line.substring(0, colonIndex).trim();
		let value = line.substring(colonIndex + 1).trim();
		
		// Remove quotes
		if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
			value = value.slice(1, -1);
		}
		
		// Parse arrays
		if (value.startsWith('[') && value.endsWith(']')) {
			const arrayContent = value.slice(1, -1);
			const items = arrayContent.split(',').map(item => {
				item = item.trim();
				if ((item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))) {
					return item.slice(1, -1);
				}
				return item;
			}).filter(item => item.length > 0);
			(frontmatter as Record<string, unknown>)[key] = items;
		} else {
			(frontmatter as Record<string, unknown>)[key] = value;
		}
	}
	
	return {
		frontmatter: frontmatter as BlogFrontmatter,
		content: content.trim()
	};
}

export function parseMarkdown(fileContent: string, slug: string): BlogPost {
	const { frontmatter, content } = parseFrontmatter(fileContent);
	
	const htmlContent = marked.parse(content) as string;
	const readingTime = calculateReadingTime(content);
	
	return {
		slug,
		title: frontmatter.title,
		description: frontmatter.description,
		content: htmlContent,
		publishDate: frontmatter.publishDate,
		categories: frontmatter.categories || [],
		tags: frontmatter.tags || [],
		coverImage: frontmatter.coverImage,
		author: frontmatter.author,
		language: frontmatter.language || 'en',
		readingTime
	};
}

export function formatDate(dateString: string, locale = 'en'): string {
	const date = new Date(dateString);
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
	
	return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', options);
}

export function sortPostsByDate(posts: BlogPostMeta[]): BlogPostMeta[] {
	return posts.sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
}

export function filterPostsByCategory(posts: BlogPostMeta[], category: string): BlogPostMeta[] {
	return posts.filter(post => post.categories.includes(category));
}

export function filterPostsByLanguage(posts: BlogPostMeta[], language: 'en' | 'es'): BlogPostMeta[] {
	return posts.filter(post => post.language === language);
}

export function getAllCategories(posts: BlogPostMeta[]): string[] {
	const categories = new Set<string>();
	posts.forEach(post => {
		post.categories.forEach(category => categories.add(category));
	});
	return Array.from(categories).sort();
}

export function getAllTags(posts: BlogPostMeta[]): string[] {
	const tags = new Set<string>();
	posts.forEach(post => {
		post.tags.forEach(tag => tags.add(tag));
	});
	return Array.from(tags).sort();
}
