<script lang="ts">
	import { SITE_CONFIG } from '$lib/constants';
	import type { BlogPostMeta } from '$lib/types/blog';

	export let posts: BlogPostMeta[];

	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: `${SITE_CONFIG.author} - Blog`,
		description: 'Blog posts about software development, technology, and programming insights',
		url: `${SITE_CONFIG.url}/blog`,
		author: {
			'@type': 'Person',
			name: SITE_CONFIG.author
		},
		publisher: {
			'@type': 'Person',
			name: SITE_CONFIG.author
		},
		blogPost: posts.map((post) => ({
			'@type': 'BlogPosting',
			headline: post.title,
			description: post.description,
			url: `${SITE_CONFIG.url}/blog/${post.slug}`,
			datePublished: post.publishDate,
			author: {
				'@type': 'Person',
				name: post.author
			},
			keywords: [...post.categories, ...post.tags],
			inLanguage: post.language
		}))
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>
