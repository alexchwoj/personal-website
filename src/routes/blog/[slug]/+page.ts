import { loadBlogPost, loadBlogPosts } from '$lib/services/blog.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const [post, allPosts] = await Promise.all([
		loadBlogPost(params.slug),
		loadBlogPosts()
	]);
	
	if (!post) {
		throw error(404, `Post "${params.slug}" not found`);
	}
	
	return {
		post,
		allPosts
	};
}
