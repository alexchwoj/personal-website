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
	<div class="w-full max-w-none">
		<Breadcrumb items={breadcrumbItems} />

		<!-- Article with consistent card styling -->
		<article
			class="bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-2xl overflow-hidden"
		>
			<header class="p-8 border-b border-neutral-700/50">
				{#if post.coverImage}
					<div class="aspect-video rounded-xl overflow-hidden mb-8 border border-neutral-700/50">
						<img src={post.coverImage} alt={post.title} class="w-full h-full object-cover" />
					</div>
				{/if}

				<div class="space-y-6">
					<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
						<div class="flex items-center gap-2">
							<div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
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

						<span
							class="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full uppercase font-medium border border-red-500/30"
						>
							<Globe class="w-3 h-3 inline mr-1" />
							{post.language}
						</span>
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
								<h3 class="text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2">
									<span class="w-2 h-2 bg-red-500 rounded-full"></span>
									Categories
								</h3>
								<div class="flex flex-wrap gap-2">
									{#each post.categories as category}
										<a
											href="/blog/category/{encodeURIComponent(category)}"
											class="px-3 py-1.5 bg-red-500/10 text-red-300 rounded-full text-sm border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200 font-medium"
										>
											{category}
										</a>
									{/each}
								</div>
							</div>
						{/if}

						{#if post.tags.length > 0}
							<div>
								<h3 class="text-sm font-medium text-neutral-400 mb-3 flex items-center gap-2">
									<span class="w-2 h-2 bg-red-500 rounded-full"></span>
									Tags
								</h3>
								<div class="flex flex-wrap gap-2">
									{#each post.tags as tag}
										<span
											class="text-xs px-2 py-1 text-neutral-400 hover:text-red-400 cursor-pointer transition-colors duration-200 bg-neutral-800/50 rounded-md hover:bg-neutral-700/50"
										>
											#{tag}
										</span>
									{/each}
								</div>
							</div>
						{/if}
					</div>
				</div>
			</header>

			<!-- Content section with improved styling -->
			<div class="prose-content p-8">
				{@html post.content}
			</div>
		</article>

		<!-- Related Posts section -->
		<div class="mt-8">
			<RelatedPosts currentPost={post} {allPosts} />
		</div>

		<!-- Footer with consistent styling -->
		<footer class="mt-8">
			<div
				class="bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8"
			>
				<div class="text-center">
					<div class="flex items-center justify-center gap-2 text-neutral-400 mb-4">
						<span class="w-2 h-2 bg-red-500 rounded-full"></span>
						<span class="text-sm">Thanks for reading!</span>
					</div>
					<a
						href="/blog"
						class="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-500 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
					>
						<ArrowLeft class="w-4 h-4" />
						Back to all posts
					</a>
				</div>
			</div>
		</footer>
	</div>
</PageContainer>

<style>
	:global(.prose-content h1) {
		@apply text-3xl font-bold text-white mt-8 mb-6 flex items-center gap-3;
	}

	:global(.prose-content h1:before) {
		content: '';
		@apply w-1 h-8 bg-red-500 rounded-full;
	}

	:global(.prose-content h2) {
		@apply text-2xl font-bold text-white mt-8 mb-4 flex items-center gap-3;
	}

	:global(.prose-content h2:before) {
		content: '';
		@apply w-1 h-6 bg-red-400 rounded-full;
	}

	:global(.prose-content h3) {
		@apply text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2;
	}

	:global(.prose-content h3:before) {
		content: '';
		@apply w-0.5 h-5 bg-red-300 rounded-full;
	}

	:global(.prose-content h4) {
		@apply text-lg font-bold text-white mt-6 mb-3;
	}

	:global(.prose-content p) {
		@apply text-neutral-300 leading-relaxed mb-6;
	}

	:global(.prose-content a) {
		@apply text-red-400 hover:text-red-300 underline transition-colors duration-200;
	}

	:global(.prose-content ul) {
		@apply text-neutral-300 ml-6 mb-6;
	}

	:global(.prose-content ol) {
		@apply text-neutral-300 ml-6 mb-6;
	}

	:global(.prose-content ul > li) {
		@apply mb-2;
	}

	:global(.prose-content ol > li) {
		@apply mb-2;
	}

	:global(.prose-content li) {
		@apply relative;
	}

	:global(.prose-content ul li:before) {
		content: '';
		@apply absolute -left-4 top-2.5 w-1.5 h-1.5 bg-red-500 rounded-full;
	}

	:global(.prose-content blockquote) {
		@apply border-l-4 border-red-500 bg-neutral-800/30 pl-6 pr-4 py-4 italic text-neutral-300 my-8 rounded-r-xl;
	}

	:global(.prose-content blockquote:before) {
		content: '"';
		@apply text-4xl text-red-500 font-bold mr-2;
	}

	:global(.prose-content code) {
		@apply bg-neutral-800 text-red-300 px-2 py-1 rounded-md text-sm border border-neutral-700;
	}

	:global(.prose-content pre) {
		@apply bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 border border-neutral-700 rounded-xl p-6 overflow-x-auto my-8 backdrop-blur-sm;
	}

	:global(.prose-content pre code) {
		@apply bg-transparent text-neutral-300 p-0 border-0;
	}

	:global(.prose-content img) {
		@apply rounded-xl my-8 max-w-full h-auto border border-neutral-700/50 shadow-lg;
	}

	:global(.prose-content table) {
		@apply w-full border-collapse my-8 bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm rounded-xl overflow-hidden border border-neutral-700;
	}

	:global(.prose-content th) {
		@apply px-6 py-4 text-left bg-neutral-800/50 text-white font-medium;
		border-right: 1px solid rgb(64 64 64); /* border-neutral-700 */
		border-bottom: 1px solid rgb(82 82 82); /* border-neutral-600 */
	}

	:global(.prose-content td) {
		@apply px-6 py-4 text-left text-neutral-300;
		border-right: 1px solid rgb(64 64 64); /* border-neutral-700 */
		border-bottom: 1px solid rgb(64 64 64 / 0.5); /* border-neutral-700/50 */
	}

	:global(.prose-content th:last-child) {
		border-right: 0;
	}

	:global(.prose-content td:last-child) {
		border-right: 0;
	}

	:global(.prose-content hr) {
		@apply border-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent my-12;
	}

	/* Enhanced focus states for accessibility */
	:global(.prose-content a:focus) {
		@apply outline-2 outline-red-500 outline-offset-2;
	}

	/* Improved spacing and typography */
	:global(.prose-content) {
		@apply text-lg leading-relaxed;
	}

	/* Custom styling for specific elements */
	:global(.prose-content strong) {
		@apply text-white font-semibold;
	}

	:global(.prose-content em) {
		@apply text-red-300;
	}
</style>
