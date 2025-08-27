<script lang="ts">
	import { onMount } from 'svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import BlogCard from '$lib/components/BlogCard.svelte';
	import BlogSearch from '$lib/components/BlogSearch.svelte';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import LanguageFilter from '$lib/components/LanguageFilter.svelte';
	import BlogStats from '$lib/components/BlogStats.svelte';
	import BlogListJsonLd from '$lib/components/BlogListJsonLd.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { BlogSearchService } from '$lib/services/search';
	import { filterPostsByCategory, filterPostsByLanguage, getAllCategories } from '$lib/utils/blog';
	import { Archive } from 'lucide-svelte';
	import type { BlogPostMeta } from '$lib/types/blog';
	import type { PageData } from './$types';

	export let data: PageData;

	let searchQuery = '';
	let selectedCategory: string | null = null;
	let selectedLanguage: 'en' | 'es' | null = null;
	let filteredPosts: BlogPostMeta[] = data.posts;
	let searchService: BlogSearchService;

	$: categories = getAllCategories(data.posts);

	onMount(() => {
		searchService = new BlogSearchService(data.posts);
	});

	function updateFilteredPosts() {
		let posts = data.posts;

		if (selectedLanguage) {
			posts = filterPostsByLanguage(posts, selectedLanguage);
		}

		if (selectedCategory) {
			posts = filterPostsByCategory(posts, selectedCategory);
		}

		if (searchQuery.trim()) {
			searchService.updatePosts(posts);
			posts = searchService.search(searchQuery);
		}

		filteredPosts = posts;
	}

	function handleSearch(event: CustomEvent<string>) {
		searchQuery = event.detail;
		updateFilteredPosts();
	}

	function handleSearchClear() {
		searchQuery = '';
		updateFilteredPosts();
	}

	function handleCategorySelect(event: CustomEvent<string | null>) {
		selectedCategory = event.detail;
		updateFilteredPosts();
	}

	function handleLanguageSelect(event: CustomEvent<'en' | 'es' | null>) {
		selectedLanguage = event.detail;
		updateFilteredPosts();
	}

	$: {
		if (searchService) {
			updateFilteredPosts();
		}
	}
</script>

<SEO
	title="Blog - {SITE_CONFIG.author}"
	description="Read {SITE_CONFIG.author}'s blog posts about software development, technology, and programming insights"
	canonical="{SITE_CONFIG.url}/blog"
/>

<BlogListJsonLd posts={data.posts} />

<PageContainer>
	<div class="w-full">
		<!-- Header Section -->
		<div
			class="bg-gradient-to-br from-neutral-900/80 via-neutral-800/60 to-neutral-900/80 border border-neutral-700 rounded-2xl p-8 mb-8"
		>
			<div class="max-w-4xl mx-auto text-center">
				<h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
					<span class="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"
						>Blog</span
					>
				</h1>
				<p class="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
					Insights on software development, technology, and programming
				</p>

				<a
					href="/blog/archive"
					class="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-red-500/25"
				>
					<Archive class="w-5 h-5" />
					View Archive
				</a>
			</div>
		</div>

		{#if data.posts.length === 0}
			<div
				class="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700 rounded-2xl p-12"
			>
				<div class="text-center max-w-md mx-auto">
					<div
						class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
					>
						<svg class="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
					</div>
					<h2 class="text-2xl font-bold text-white mb-4">No posts yet</h2>
					<p class="text-neutral-400">
						Stay tuned for upcoming articles about software development and technology.
					</p>
				</div>
			</div>
		{:else}
			<!-- Search and Filter Section -->
			<div
				class="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700 rounded-2xl p-8 mb-8"
			>
				<div class="max-w-4xl mx-auto">
					<div class="space-y-6">
						<div class="text-center mb-6">
							<h2 class="text-2xl font-bold text-white mb-2">Find Your Next Read</h2>
							<p class="text-neutral-400">Search and filter through our collection</p>
						</div>

						<BlogSearch
							on:search={handleSearch}
							on:clear={handleSearchClear}
							placeholder="Search posts by title, description, categories, or tags..."
						/>

						<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
							<div class="space-y-3">
								<h3 class="text-sm font-medium text-neutral-300 flex items-center gap-2">
									<span class="w-2 h-2 bg-red-500 rounded-full"></span>
									Filter by category
								</h3>
								<CategoryFilter {categories} {selectedCategory} on:select={handleCategorySelect} />
							</div>

							<div class="space-y-3">
								<h3 class="text-sm font-medium text-neutral-300 flex items-center gap-2">
									<span class="w-2 h-2 bg-red-500 rounded-full"></span>
									Filter by language
								</h3>
								<LanguageFilter {selectedLanguage} on:select={handleLanguageSelect} />
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Posts Grid -->
			<div class="max-w-6xl mx-auto mb-8">
				{#if filteredPosts.length === 0}
					<div
						class="bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 border border-neutral-700 rounded-2xl p-16"
					>
						<div class="text-center max-w-md mx-auto">
							<div
								class="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
							>
								<svg
									class="w-8 h-8 text-red-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
							<h2 class="text-xl font-bold text-white mb-2">No posts found</h2>
							<p class="text-neutral-400 mb-6">Try adjusting your search or filter criteria.</p>
							<button
								on:click={() => {
									searchQuery = '';
									selectedCategory = null;
									selectedLanguage = null;
									updateFilteredPosts();
								}}
								class="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-all duration-200 hover:scale-105"
							>
								Clear all filters
							</button>
						</div>
					</div>
				{:else}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						{#each filteredPosts as post, index}
							<div
								class="animate-in slide-in-from-bottom-4 duration-500"
								style="animation-delay: {index * 100}ms"
							>
								<BlogCard {post} showLanguage={true} />
							</div>
						{/each}
					</div>
				{/if}

				{#if filteredPosts.length > 0}
					<div class="text-center mt-8">
						<div
							class="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 text-neutral-400 text-sm rounded-full border border-neutral-700"
						>
							<span class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
							Showing {filteredPosts.length} of {data.posts.length} posts
						</div>
					</div>
				{/if}
			</div>

			<!-- Statistics Section -->
			<div class="max-w-4xl mx-auto">
				<BlogStats posts={data.posts} />
			</div>
		{/if}
	</div>
</PageContainer>
