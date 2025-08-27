<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { ArrowLeft } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { category, posts } = data;
</script>

<SEO
	title="Category: {category} - {SITE_CONFIG.author}"
	description="Blog posts in the {category} category"
	canonical="{SITE_CONFIG.url}/blog/category/{encodeURIComponent(category)}"
/>

<PageContainer>
	<div class="max-w-4xl mx-auto">
		<nav class="mb-8">
			<a
				href="/blog"
				class="inline-flex items-center gap-2 px-4 py-2 text-red-400 hover:text-white hover:bg-red-500 rounded-lg transition-all duration-300 border border-red-500/30 hover:border-red-500"
			>
				<ArrowLeft class="w-4 h-4" />
				Back to blog
			</a>
		</nav>

		<div class="text-center mb-12">
			<div
				class="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm border border-red-500/30 mb-4"
			>
				Category
			</div>
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				<span class="border-b-2 border-b-red-500">{category}</span>
			</h1>
			<p class="text-xl text-neutral-300">
				{posts.length}
				{posts.length === 1 ? 'post' : 'posts'} in this category
			</p>
		</div>

		<div class="space-y-8">
			{#each posts as post, index}
				<div
					class="animate-in slide-in-from-bottom-4 duration-500"
					style="animation-delay: {index * 100}ms"
				>
					<BlogCard {post} showLanguage={true} />
				</div>
			{/each}
		</div>
	</div>
</PageContainer>
