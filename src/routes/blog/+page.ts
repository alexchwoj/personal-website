import { loadBlogPosts } from '$lib/services/blog.js';
import { sortPostsByDate } from '$lib/utils/blog.js';

export async function load() {
	const posts = await loadBlogPosts();
	const sortedPosts = sortPostsByDate(posts);
	
	return {
		posts: sortedPosts
	};
}
