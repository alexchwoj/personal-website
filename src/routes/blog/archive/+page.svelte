<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { formatDate } from '$lib/utils/blog';
	import { ArrowLeft, Calendar } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { postsByYear } = data;
	const years = Object.keys(postsByYear)
		.map(Number)
		.sort((a, b) => b - a);
</script>

<SEO
	title="Blog Archive - {SITE_CONFIG.author}"
	description="Complete archive of all blog posts organized by year"
	canonical="{SITE_CONFIG.url}/blog/archive"
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
			<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
				<span class="border-b-2 border-b-red-500">Blog Archive</span>
			</h1>
			<p class="text-xl text-neutral-300">All posts organized by year</p>
		</div>

		<div class="space-y-12">
			{#each years as year}
				<section>
					<h2 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
						<div
							class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center border border-red-500/30"
						>
							<Calendar class="w-4 h-4 text-red-400" />
						</div>
						{year}
						<span class="text-lg text-neutral-400 font-normal">
							({postsByYear[year].length} posts)
						</span>
					</h2>

					<div class="space-y-6">
						{#each postsByYear[year] as post, index}
							<article
								class="group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 animate-in slide-in-from-left-4"
								style="animation-delay: {index * 100}ms"
							>
								<div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
									<div class="flex-1">
										<h3 class="text-xl font-semibold text-white mb-2">
											<a
												href="/blog/{post.slug}"
												class="group-hover:text-red-400 transition-colors"
											>
												{post.title}
											</a>
										</h3>

										<p class="text-neutral-300 mb-4 leading-relaxed">
											{post.description}
										</p>

										<div class="flex flex-wrap items-center gap-4 text-sm text-neutral-400">
											<div class="flex items-center gap-2">
												<div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
												<time datetime={post.publishDate}>
													{formatDate(post.publishDate, post.language)}
												</time>
											</div>

											<span class="text-neutral-600">·</span>
											<span>{post.readingTime} min read</span>

											<span class="text-neutral-600">·</span>
											<span
												class="px-2 py-1 bg-red-500/20 text-red-300 rounded-full uppercase text-xs font-medium border border-red-500/30"
												>{post.language}</span
											>

											{#if post.categories.length > 0}
												<span class="text-neutral-600">·</span>
												<div class="flex gap-2">
													{#each post.categories as category}
														<a
															href="/blog/category/{encodeURIComponent(category)}"
															class="text-red-400 hover:text-red-300 transition-colors"
														>
															{category}
														</a>
													{/each}
												</div>
											{/if}
										</div>
									</div>

									<div class="flex-shrink-0">
										<a
											href="/blog/{post.slug}"
											class="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-500 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
										>
											Read more
											<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M17 8l4 4m0 0l-4 4m4-4H3"
												/>
											</svg>
										</a>
									</div>
								</div>
							</article>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</PageContainer>
