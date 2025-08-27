<script lang="ts">
	import { formatDate } from '$lib/utils/blog';
	import type { BlogPostMeta } from '$lib/types/blog';

	export let post: BlogPostMeta;
	export let showLanguage = false;
</script>

<article
	class="group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl overflow-hidden hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1"
>
	{#if post.coverImage}
		<div class="aspect-video overflow-hidden relative">
			<img
				src={post.coverImage}
				alt={post.title}
				class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
		</div>
	{/if}

	<div class="p-6">
		<div class="flex items-center gap-3 mb-4">
			<div class="flex items-center gap-2 text-sm text-neutral-400">
				<div class="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
				<time datetime={post.publishDate}>
					{formatDate(post.publishDate, post.language)}
				</time>
			</div>

			{#if showLanguage}
				<span class="text-xs px-2 py-1 bg-red-500/20 text-red-300 rounded-full uppercase font-medium border border-red-500/30">
					{post.language}
				</span>
			{/if}

			<div class="flex items-center gap-2 text-sm text-neutral-400">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				{post.readingTime} min read
			</div>
		</div>

		<h2 class="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
			<a href="/blog/{post.slug}" class="block">
				{post.title}
			</a>
		</h2>

		<p
			class="text-neutral-300 mb-6 leading-relaxed overflow-hidden"
			style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;"
		>
			{post.description}
		</p>

		<div class="flex flex-wrap gap-2 mb-6">
			{#each post.categories as category}
				<a
					href="/blog/category/{encodeURIComponent(category)}"
					class="text-xs px-3 py-1.5 bg-red-500/10 text-red-300 rounded-full border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200 font-medium"
				>
					{category}
				</a>
			{/each}
		</div>

		<div class="flex items-center justify-between border-t border-neutral-700/50 pt-4">
			<div class="flex items-center gap-2 text-sm text-neutral-400">
				<div class="w-8 h-8 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center border border-red-500/30">
					<span class="text-red-400 font-medium text-xs">
						{post.author.split(' ').map(n => n[0]).join('')}
					</span>
				</div>
				<span>by {post.author}</span>
			</div>

			<a
				href="/blog/{post.slug}"
				class="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 group/button"
			>
				Read more
				<svg class="w-4 h-4 group-hover/button:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
				</svg>
			</a>
		</div>

		{#if post.tags.length > 0}
			<div class="flex flex-wrap gap-2 mt-4 pt-4 border-t border-neutral-700/30">
				{#each post.tags as tag}
					<span class="text-xs px-2 py-1 text-neutral-400 hover:text-red-400 cursor-pointer transition-colors duration-200 bg-neutral-800/50 rounded-md hover:bg-neutral-700/50">
						#{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</article>
