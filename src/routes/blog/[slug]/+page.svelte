<script lang="ts">
	import { onMount } from 'svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import RelatedPosts from '$lib/components/RelatedPosts.svelte';
	import BlogJsonLd from '$lib/components/BlogJsonLd.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { formatDate } from '$lib/utils/blog';
	import { ArrowLeft, Calendar, Clock, User, Globe, Share2, BookOpen } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { post, allPosts } = data;

	const breadcrumbItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: post.title }
	];

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function sharePost() {
		if (navigator.share) {
			navigator.share({
				title: post.title,
				text: post.description,
				url: window.location.href
			});
		} else {
			navigator.clipboard.writeText(window.location.href);
		}
	}
</script>

<SEO
	title="{post.title} - {SITE_CONFIG.author}"
	description={post.description}
	canonical="{SITE_CONFIG.url}/blog/{post.slug}"
	ogImage={post.coverImage}
/>

<BlogJsonLd {post} />

<PageContainer>
	<div class="w-full max-w-none">
		<div class={mounted ? 'animate-in slide-in-from-bottom-4 duration-500' : ''}>
			<Breadcrumb items={breadcrumbItems} />
		</div>

		<article
			class={`bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl overflow-hidden shadow-2xl shadow-black/20 ${
				mounted ? 'animate-in slide-in-from-bottom-8 duration-700 delay-150' : ''
			}`}
		>
			<header class="relative">
				{#if post.coverImage}
					<div class="aspect-video relative overflow-hidden">
						<img
							src={post.coverImage}
							alt={post.title}
							class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"
						></div>

						<button
							on:click={sharePost}
							class="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-red-500/80 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
							title="Share this post"
						>
							<Share2 class="w-4 h-4" />
						</button>
					</div>
				{/if}

				<div class="p-8 lg:p-12">
					<div class="space-y-8">
						<div class="flex flex-wrap items-center gap-6 text-sm">
							<div
								class="flex items-center gap-2 text-neutral-400 hover:text-red-400 transition-colors duration-200"
							>
								<div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
								<Calendar class="w-4 h-4" />
								<time datetime={post.publishDate} class="font-medium">
									{formatDate(post.publishDate, post.language)}
								</time>
							</div>

							<div
								class="flex items-center gap-2 text-neutral-400 hover:text-blue-400 transition-colors duration-200"
							>
								<Clock class="w-4 h-4" />
								<span class="font-medium">{post.readingTime} min read</span>
							</div>

							<div
								class="flex items-center gap-2 text-neutral-400 hover:text-green-400 transition-colors duration-200"
							>
								<User class="w-4 h-4" />
								<span class="font-medium">{post.author}</span>
							</div>

							<div class="flex items-center gap-2">
								<span
									class="text-xs px-3 py-1.5 bg-red-500/20 text-red-300 rounded-full uppercase font-bold border border-red-500/30 hover:bg-red-500/30 hover:border-red-500/50 transition-all duration-200 cursor-default"
								>
									<Globe class="w-3 h-3 inline mr-1" />
									{post.language}
								</span>
							</div>

							<div class="flex items-center gap-2 text-neutral-400 ml-auto">
								<BookOpen class="w-4 h-4" />
								<span class="text-sm font-medium">Article</span>
							</div>
						</div>

						<div class="space-y-6">
							<h1
								class="text-4xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
							>
								<span
									class="bg-gradient-to-r from-white via-white to-red-400 bg-clip-text text-transparent"
								>
									{post.title}
								</span>
							</h1>

							<p class="text-xl lg:text-2xl text-neutral-300 leading-relaxed font-light max-w-4xl">
								{post.description}
							</p>
						</div>

						<div class="flex flex-wrap gap-8">
							{#if post.categories.length > 0}
								<div class="space-y-4">
									<h3
										class="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2"
									>
										<span class="w-2 h-2 bg-red-500 rounded-full"></span>
										Categories
									</h3>
									<div class="flex flex-wrap gap-3">
										{#each post.categories as category}
											<a
												href="/blog/category/{encodeURIComponent(category)}"
												class="group px-4 py-2 bg-red-500/10 text-red-300 rounded-xl text-sm border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
											>
												<span class="group-hover:text-red-200 transition-colors duration-200">
													{category}
												</span>
											</a>
										{/each}
									</div>
								</div>
							{/if}

							{#if post.tags.length > 0}
								<div class="space-y-4">
									<h3
										class="text-sm font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2"
									>
										<span class="w-2 h-2 bg-blue-500 rounded-full"></span>
										Tags
									</h3>
									<div class="flex flex-wrap gap-2">
										{#each post.tags as tag}
											<span
												class="text-xs px-3 py-1.5 text-neutral-400 hover:text-blue-400 cursor-pointer transition-all duration-200 bg-neutral-800/50 rounded-lg hover:bg-neutral-700/70 hover:scale-105 font-medium border border-neutral-700/50 hover:border-blue-500/30"
											>
												#{tag}
											</span>
										{/each}
									</div>
								</div>
							{/if}
						</div>
					</div>
				</div>
			</header>

			<div class="prose-content px-8 lg:px-12 pb-8 lg:pb-12">
				<div class="border-t border-neutral-700/50 pt-8 lg:pt-12">
					{@html post.content}
				</div>
			</div>
		</article>

		<div
			class={`mt-12 ${mounted ? 'animate-in slide-in-from-bottom-8 duration-700 delay-300' : ''}`}
		>
			<RelatedPosts currentPost={post} {allPosts} />
		</div>

		<footer
			class={`mt-12 ${mounted ? 'animate-in slide-in-from-bottom-8 duration-700 delay-500' : ''}`}
		>
			<div
				class="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/10"
			>
				<div class="text-center space-y-6">
					<div class="space-y-3">
						<div class="flex items-center justify-center gap-2 text-neutral-400">
							<span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
							<span class="text-lg font-medium">Thanks for reading!</span>
						</div>
						<p class="text-neutral-500 max-w-md mx-auto">
							Hope you found this article helpful. Feel free to share it with others or check out
							more posts.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row items-center justify-center gap-4">
						<a
							href="/blog"
							class="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
						>
							<ArrowLeft
								class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
							/>
							Back to all posts
						</a>

						<button
							on:click={sharePost}
							class="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-700 hover:bg-neutral-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-neutral-600 hover:border-neutral-500"
						>
							<Share2 class="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
							Share this post
						</button>
					</div>
				</div>
			</div>
		</footer>
	</div>
</PageContainer>

<style>
	:global(.prose-content) {
		font-size: 1.125rem;
		line-height: 1.75;
		max-width: none;
	}

	:global(.prose-content h1) {
		font-size: 2rem;
		font-weight: 700;
		color: white;
		margin-top: 3rem;
		margin-bottom: 2rem;
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	:global(.prose-content h1:first-child) {
		margin-top: 0;
	}

	:global(.prose-content h1:before) {
		content: '';
		width: 6px;
		height: 2.5rem;
		background: linear-gradient(to bottom, #ef4444, #dc2626);
		border-radius: 9999px;
		box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.3);
	}

	:global(.prose-content h2) {
		font-size: 1.75rem;
		font-weight: 700;
		color: white;
		margin-top: 2.5rem;
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	:global(.prose-content h2:before) {
		content: '';
		width: 4px;
		height: 2rem;
		background: linear-gradient(to bottom, #f87171, #ef4444);
		border-radius: 9999px;
		box-shadow: 0 4px 6px -1px rgba(248, 113, 113, 0.3);
	}

	:global(.prose-content h3) {
		font-size: 1.5rem;
		font-weight: 700;
		color: white;
		margin-top: 2rem;
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	:global(.prose-content h3:before) {
		content: '';
		width: 4px;
		height: 1.5rem;
		background: linear-gradient(to bottom, #fca5a5, #f87171);
		border-radius: 9999px;
		box-shadow: 0 1px 3px 0 rgba(252, 165, 165, 0.3);
	}

	:global(.prose-content h4) {
		font-size: 1.25rem;
		font-weight: 700;
		color: white;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	:global(.prose-content h4:before) {
		content: '';
		width: 2px;
		height: 1.25rem;
		background: linear-gradient(to bottom, #fecaca, #fca5a5);
		border-radius: 9999px;
	}

	:global(.prose-content h5) {
		font-size: 1.125rem;
		font-weight: 700;
		color: white;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose-content h6) {
		font-size: 1rem;
		font-weight: 700;
		color: #e5e5e5;
		margin-top: 1rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose-content p) {
		color: #d1d5db;
		line-height: 1.75;
		margin-bottom: 1.5rem;
		font-size: 1.125rem;
	}

	:global(.prose-content strong) {
		color: white;
		font-weight: 700;
	}

	:global(.prose-content em) {
		color: #fca5a5;
		font-weight: 500;
		font-style: italic;
	}

	:global(.prose-content a) {
		color: #f87171;
		text-decoration: underline;
		text-decoration-color: rgba(239, 68, 68, 0.5);
		text-underline-offset: 4px;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	:global(.prose-content a:hover) {
		color: #fca5a5;
		text-decoration-color: #fca5a5;
		box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.2);
	}

	:global(.prose-content ul) {
		color: #d1d5db;
		margin-left: 2rem;
		margin-bottom: 2rem;
		list-style: none;
	}

	:global(.prose-content ol) {
		color: #d1d5db;
		margin-left: 2rem;
		margin-bottom: 2rem;
	}

	:global(.prose-content ul > li) {
		position: relative;
		margin-bottom: 0.75rem;
	}

	:global(.prose-content ol > li) {
		position: relative;
		margin-bottom: 0.75rem;
		padding-left: 0.5rem;
	}

	:global(.prose-content ul li:before) {
		content: '';
		position: absolute;
		left: -1.5rem;
		top: 0.75rem;
		width: 8px;
		height: 8px;
		background: linear-gradient(135deg, #ef4444, #dc2626);
		border-radius: 50%;
		box-shadow: 0 1px 3px 0 rgba(239, 68, 68, 0.3);
	}

	:global(.prose-content blockquote) {
		position: relative;
		border-left: 4px solid #ef4444;
		background: linear-gradient(to right, rgba(38, 38, 38, 0.5), rgba(38, 38, 38, 0.2));
		padding: 1.5rem 1.5rem 1.5rem 2rem;
		font-style: italic;
		color: #d1d5db;
		margin: 2.5rem 0;
		border-radius: 0 1rem 1rem 0;
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(4px);
	}

	:global(.prose-content blockquote:before) {
		content: '"';
		position: absolute;
		left: -4px;
		top: -8px;
		font-size: 3.75rem;
		color: #ef4444;
		font-weight: 700;
		opacity: 0.5;
	}

	:global(.prose-content blockquote p) {
		margin-bottom: 0;
		font-size: 1.125rem;
		line-height: 1.75;
	}

	:global(.prose-content code) {
		background: linear-gradient(to right, #262626, #404040);
		color: #fca5a5;
		padding: 0.375rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 0.875rem;
		border: 1px solid rgba(115, 115, 115, 0.5);
		font-family: ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo,
			monospace;
		box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
	}

	:global(.prose-content pre) {
		background: linear-gradient(135deg, rgba(23, 23, 23, 0.9), rgba(38, 38, 38, 0.5));
		border: 1px solid rgba(64, 64, 64, 0.7);
		border-radius: 1rem;
		padding: 2rem;
		overflow-x: auto;
		margin: 2.5rem 0;
		backdrop-filter: blur(12px);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
	}

	:global(.prose-content pre code) {
		background: transparent;
		color: #d1d5db;
		padding: 0;
		border: 0;
		box-shadow: none;
	}

	:global(.prose-content img) {
		border-radius: 1rem;
		margin: 2.5rem 0;
		max-width: 100%;
		height: auto;
		border: 1px solid rgba(64, 64, 64, 0.5);
		box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.3);
		transition: all 0.5s ease;
	}

	:global(.prose-content img:hover) {
		box-shadow: 0 25px 50px -12px rgba(239, 68, 68, 0.1);
		transform: scale(1.02);
	}

	:global(.prose-content table) {
		width: 100%;
		border-collapse: collapse;
		margin: 2.5rem 0;
		background: linear-gradient(135deg, rgba(23, 23, 23, 0.9), rgba(38, 38, 38, 0.5));
		backdrop-filter: blur(12px);
		border-radius: 1rem;
		overflow: hidden;
		border: 1px solid rgba(64, 64, 64, 0.7);
		box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
	}

	:global(.prose-content th) {
		padding: 1.25rem 2rem;
		text-align: left;
		background: linear-gradient(to right, rgba(38, 38, 38, 0.8), rgba(64, 64, 64, 0.5));
		color: white;
		font-weight: 700;
		font-size: 0.875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		border-right: 1px solid rgba(64, 64, 64, 0.7);
		border-bottom: 1px solid rgba(82, 82, 82, 0.8);
	}

	:global(.prose-content td) {
		padding: 1.25rem 2rem;
		text-align: left;
		color: #d1d5db;
		font-size: 1rem;
		border-right: 1px solid rgba(64, 64, 64, 0.5);
		border-bottom: 1px solid rgba(64, 64, 64, 0.3);
	}

	:global(.prose-content th:last-child) {
		border-right: 0;
	}

	:global(.prose-content td:last-child) {
		border-right: 0;
	}

	:global(.prose-content tr:hover td) {
		background-color: rgba(38, 38, 38, 0.3);
	}

	:global(.prose-content hr) {
		border: 0;
		height: 1px;
		margin: 4rem 0;
		position: relative;
		background: linear-gradient(90deg, transparent, #ef4444, transparent);
	}

	:global(.prose-content hr:after) {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: 12px;
		height: 12px;
		background: #ef4444;
		border-radius: 50%;
		box-shadow: 0 10px 15px -3px rgba(239, 68, 68, 0.5);
	}

	:global(.prose-content a:focus) {
		outline: 2px solid #ef4444;
		outline-offset: 4px;
		border-radius: 4px;
	}

	:global(.prose-content *:focus-visible) {
		outline: 2px solid #ef4444;
		outline-offset: 2px;
		border-radius: 4px;
	}

	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(1rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: animate-in 0.5s ease-out;
	}

	.slide-in-from-bottom-4 {
		transform: translateY(1rem);
		opacity: 0;
		animation: animate-in 0.5s ease-out forwards;
	}

	.slide-in-from-bottom-8 {
		transform: translateY(2rem);
		opacity: 0;
		animation: animate-in 0.5s ease-out forwards;
	}

	.duration-500 {
		animation-duration: 0.5s;
	}

	.duration-700 {
		animation-duration: 0.7s;
	}

	.delay-150 {
		animation-delay: 0.15s;
	}

	.delay-300 {
		animation-delay: 0.3s;
	}

	.delay-500 {
		animation-delay: 0.5s;
	}

	:global(.prose-content) {
		scrollbar-width: thin;
		scrollbar-color: #ef4444 #171717;
	}

	:global(.prose-content::-webkit-scrollbar) {
		width: 8px;
	}

	:global(.prose-content::-webkit-scrollbar-track) {
		background: #171717;
		border-radius: 4px;
	}

	:global(.prose-content::-webkit-scrollbar-thumb) {
		background: #ef4444;
		border-radius: 4px;
	}

	:global(.prose-content::-webkit-scrollbar-thumb:hover) {
		background: #f87171;
	}

	@media (min-width: 1024px) {
		:global(.prose-content h1) {
			font-size: 2.5rem;
		}

		:global(.prose-content h2) {
			font-size: 2rem;
		}

		:global(.prose-content h3) {
			font-size: 1.75rem;
		}

		:global(.prose-content h4) {
			font-size: 1.5rem;
		}

		:global(.prose-content p) {
			font-size: 1.25rem;
		}
	}
</style>
