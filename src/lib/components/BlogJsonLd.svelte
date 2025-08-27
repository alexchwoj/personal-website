<script lang="ts">
	import { SITE_CONFIG } from '$lib/constants';
	import type { BlogPost } from '$lib/types/blog';

	export let post: BlogPost;

	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		author: {
			'@type': 'Person',
			name: post.author
		},
		publisher: {
			'@type': 'Person',
			name: SITE_CONFIG.author
		},
		datePublished: post.publishDate,
		dateModified: post.publishDate,
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': `${SITE_CONFIG.url}/blog/${post.slug}`
		},
		url: `${SITE_CONFIG.url}/blog/${post.slug}`,
		image: post.coverImage ? `${SITE_CONFIG.url}${post.coverImage}` : undefined,
		keywords: [...post.categories, ...post.tags],
		articleSection: post.categories,
		inLanguage: post.language,
		wordCount: post.content
			.replace(/<[^>]*>/g, '')
			.trim()
			.split(/\s+/).length,
		timeRequired: `PT${post.readingTime}M`
	};
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>
