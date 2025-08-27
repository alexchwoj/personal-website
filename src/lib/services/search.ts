import Fuse from 'fuse.js';
import type { BlogPostMeta } from '$lib/types/blog';

export interface SearchOptions {
	threshold?: number;
	keys?: string[];
}

export class BlogSearchService {
	private fuse: Fuse<BlogPostMeta>;

	constructor(posts: BlogPostMeta[], options: SearchOptions = {}) {
		const fuseOptions = {
			threshold: options.threshold || 0.3,
			keys: options.keys || [
				{ name: 'title', weight: 2 },
				{ name: 'description', weight: 1.5 },
				{ name: 'categories', weight: 1.2 },
				{ name: 'tags', weight: 1 },
				{ name: 'author', weight: 0.8 }
			],
			includeScore: true,
			includeMatches: true
		};

		this.fuse = new Fuse(posts, fuseOptions);
	}

	search(query: string): BlogPostMeta[] {
		if (!query.trim()) {
			return [];
		}

		const results = this.fuse.search(query);
		return results.map(result => result.item);
	}

	updatePosts(posts: BlogPostMeta[]): void {
		this.fuse.setCollection(posts);
	}
}
