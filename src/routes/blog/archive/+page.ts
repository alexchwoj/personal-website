import { loadBlogPosts } from '$lib/services/blog.js';
import { sortPostsByDate } from '$lib/utils/blog.js';

export async function load() {
	const posts = await loadBlogPosts();
	const sortedPosts = sortPostsByDate(posts);
	
	const postsByYear = sortedPosts.reduce((acc, post) => {
		const year = new Date(post.publishDate).getFullYear();
		if (!acc[year]) {
			acc[year] = [];
		}
		acc[year].push(post);
		return acc;
	}, {} as Record<number, typeof posts>);
	
	return {
		postsByYear
	};
}
