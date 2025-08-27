import { loadBlogPosts } from '$lib/services/blog.js';
import { filterPostsByCategory, sortPostsByDate } from '$lib/utils/blog.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const category = decodeURIComponent(params.category);
	const allPosts = await loadBlogPosts();
	const categoryPosts = filterPostsByCategory(allPosts, category);
	
	if (categoryPosts.length === 0) {
		throw error(404, `No posts found in category "${category}"`);
	}
	
	const sortedPosts = sortPostsByDate(categoryPosts);
	
	return {
		category,
		posts: sortedPosts
	};
}
