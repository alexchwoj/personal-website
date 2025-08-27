<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import RelatedPosts from '$lib/components/RelatedPosts.svelte';
	import BlogJsonLd from '$lib/components/BlogJsonLd.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { formatDate } from '$lib/utils/blog';
	import { ArrowLeft, Calendar, Clock, User, Globe } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { post, allPosts } = data;

	const breadcrumbItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: post.title }
	];
</script>

<SEO
	title="{post.title} - {SITE_CONFIG.author}"
	description={post.description}
	canonical="{SITE_CONFIG.url}/blog/{post.slug}"
	image={post.coverImage}
/>

<BlogJsonLd {post} />

<PageContainer>
	<div class="max-w-4xl mx-auto">
		<Breadcrumb items={breadcrumbItems} />

		<nav class="mb-8">
			<a
				href="/blog"
				class="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
			>
				<ArrowLeft class="w-4 h-4" />
				Back to blog
			</a>
		</nav>

		<article class="prose prose-invert prose-lg max-w-none">
			<header class="mb-12 not-prose">
				{#if post.coverImage}
					<div class="aspect-video rounded-lg overflow-hidden mb-8">
						<img src={post.coverImage} alt={post.title} class="w-full h-full object-cover" />
					</div>
				{/if}

				<div class="space-y-6">
					<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
						<div class="flex items-center gap-2">
							<Calendar class="w-4 h-4" />
							<time datetime={post.publishDate}>
								{formatDate(post.publishDate, post.language)}
							</time>
						</div>

						<div class="flex items-center gap-2">
							<Clock class="w-4 h-4" />
							<span>{post.readingTime} min read</span>
						</div>

						<div class="flex items-center gap-2">
							<User class="w-4 h-4" />
							<span>{post.author}</span>
						</div>

						<div class="flex items-center gap-2">
							<Globe class="w-4 h-4" />
							<span class="uppercase">{post.language}</span>
						</div>
					</div>

					<h1 class="text-4xl lg:text-5xl font-bold text-white leading-tight">
						{post.title}
					</h1>

					<p class="text-xl text-neutral-300 leading-relaxed">
						{post.description}
					</p>

					<div class="flex flex-wrap gap-6">
						{#if post.categories.length > 0}
							<div>
								<h3 class="text-sm font-medium text-neutral-400 mb-2">Categories</h3>
								<div class="flex flex-wrap gap-2">
									{#each post.categories as category}
										<span
											class="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-800/50"
										>
											{category}
										</span>
									{/each}
								</div>
							</div>
						{/if}

						{#if post.tags.length > 0}
							<div>
								<h3 class="text-sm font-medium text-neutral-400 mb-2">Tags</h3>
								<div class="flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span class="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full text-sm">
											#{tag}
										</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>
			</header>

			<div class="prose-content">
				{@html post.content}
			</div>
		</article>

		<RelatedPosts currentPost={post} {allPosts} />

		<footer class="mt-16 pt-8 border-t border-neutral-800">
			<div class="text-center">
				<a
					href="/blog"
					class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
				>
					<ArrowLeft class="w-4 h-4" />
					Back to all posts
				</a>
			</div>
		</footer>
	</div>
</PageContainer>

<style>
	:global(.prose-content h1) {
		@apply text-3xl font-bold text-white mt-8 mb-4;
	}

	:global(.prose-content h2) {
		@apply text-2xl font-bold text-white mt-8 mb-4;
	}

	:global(.prose-content h3) {
		@apply text-xl font-bold text-white mt-6 mb-3;
	}

	:global(.prose-content h4) {
		@apply text-lg font-bold text-white mt-6 mb-3;
	}

	:global(.prose-content p) {
		@apply text-neutral-300 leading-relaxed mb-4;
	}

	:global(.prose-content a) {
		@apply text-blue-400 hover:text-blue-300 underline transition-colors;
	}

	:global(.prose-content ul, .prose-content ol) {
		@apply text-neutral-300 ml-6 mb-4;
	}

	:global(.prose-content li) {
		@apply mb-2;
	}

	:global(.prose-content blockquote) {
		@apply border-l-4 border-blue-500 pl-4 italic text-neutral-400 my-6;
	}

	:global(.prose-content code) {
		@apply bg-neutral-800 text-blue-300 px-2 py-1 rounded text-sm;
	}

	:global(.prose-content pre) {
		@apply bg-neutral-900 border border-neutral-700 rounded-lg p-4 overflow-x-auto my-6;
	}

	:global(.prose-content pre code) {
		@apply bg-transparent text-neutral-300 p-0;
	}

	:global(.prose-content img) {
		@apply rounded-lg my-6 max-w-full h-auto;
	}

	:global(.prose-content table) {
		@apply w-full border-collapse border border-neutral-700 my-6;
	}

	:global(.prose-content th, .prose-content td) {
		@apply border border-neutral-700 px-4 py-2 text-left;
	}

	:global(.prose-content th) {
		@apply bg-neutral-800 text-white font-medium;
	}

	:global(.prose-content td) {
		@apply text-neutral-300;
	}
</style>
