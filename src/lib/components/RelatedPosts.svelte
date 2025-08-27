<script lang="ts">
	import BlogCard from './BlogCard.svelte';
	import type { BlogPostMeta } from '$lib/types/blog';

	export let currentPost: BlogPostMeta;
	export let allPosts: BlogPostMeta[];
	export let maxPosts = 3;

	function getRelatedPosts(current: BlogPostMeta, posts: BlogPostMeta[]): BlogPostMeta[] {
		const otherPosts = posts.filter((post) => post.slug !== current.slug);

		const scored = otherPosts.map((post) => {
			let score = 0;

			// Same language gets higher score
			if (post.language === current.language) {
				score += 10;
			}

			// Shared categories
			const sharedCategories = post.categories.filter((cat) => current.categories.includes(cat));
			score += sharedCategories.length * 5;

			// Shared tags
			const sharedTags = post.tags.filter((tag) => current.tags.includes(tag));
			score += sharedTags.length * 2;

			// Same author
			if (post.author === current.author) {
				score += 3;
			}

			return { post, score };
		});

		return scored
			.sort((a, b) => b.score - a.score)
			.slice(0, maxPosts)
			.map((item) => item.post);
	}

	$: relatedPosts = getRelatedPosts(currentPost, allPosts);
</script>

{#if relatedPosts.length > 0}
	<section class="mt-16 pt-8 border-t border-neutral-800">
		<h2 class="text-2xl font-bold text-white mb-8">Related Posts</h2>

		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each relatedPosts as post}
				<BlogCard {post} showLanguage={true} />
			{/each}
		</div>
	</section>
{/if}
