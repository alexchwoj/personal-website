export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	content: string;
	publishDate: string;
	categories: string[];
	tags: string[];
	coverImage?: string;
	author: string;
	language: 'en' | 'es';
	readingTime: number;
}

export interface BlogPostMeta {
	slug: string;
	title: string;
	description: string;
	publishDate: string;
	categories: string[];
	tags: string[];
	coverImage?: string;
	author: string;
	language: 'en' | 'es';
	readingTime: number;
}

export interface BlogFrontmatter {
	title: string;
	description: string;
	publishDate: string;
	categories: string[];
	tags: string[];
	coverImage?: string;
	author: string;
	language: 'en' | 'es';
}
