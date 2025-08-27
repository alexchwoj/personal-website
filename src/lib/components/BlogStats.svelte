<script lang="ts">
	import type { BlogPostMeta } from '$lib/types/blog';
	import { getAllCategories, getAllTags } from '$lib/utils/blog';
	import { BookOpen, Tag, FolderOpen, Globe } from 'lucide-svelte';

	export let posts: BlogPostMeta[];

	$: categories = getAllCategories(posts);
	$: tags = getAllTags(posts);
	$: totalReadingTime = posts.reduce((total, post) => total + post.readingTime, 0);
	$: languageStats = posts.reduce(
		(acc, post) => {
			acc[post.language] = (acc[post.language] || 0) + 1;
			return acc;
		},
		{} as Record<string, number>
	);
</script>

<div
	class="bg-gradient-to-r from-neutral-900/50 to-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 shadow-lg"
>
	<h2 class="text-lg font-semibold text-white mb-6 flex items-center gap-2">
		<span class="w-2 h-2 bg-red-500 rounded-full"></span>
		Blog Statistics
	</h2>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-6">
		<div class="text-center group">
			<div
				class="flex items-center justify-center w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl mx-auto mb-3 group-hover:bg-red-500/20 transition-all duration-300"
			>
				<BookOpen class="w-6 h-6 text-red-400" />
			</div>
			<div class="text-2xl font-bold text-white mb-1">{posts.length}</div>
			<div class="text-sm text-neutral-400">Posts</div>
		</div>

		<div class="text-center group">
			<div
				class="flex items-center justify-center w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl mx-auto mb-3 group-hover:bg-red-500/20 transition-all duration-300"
			>
				<FolderOpen class="w-6 h-6 text-red-400" />
			</div>
			<div class="text-2xl font-bold text-white mb-1">{categories.length}</div>
			<div class="text-sm text-neutral-400">Categories</div>
		</div>

		<div class="text-center group">
			<div
				class="flex items-center justify-center w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl mx-auto mb-3 group-hover:bg-red-500/20 transition-all duration-300"
			>
				<Tag class="w-6 h-6 text-red-400" />
			</div>
			<div class="text-2xl font-bold text-white mb-1">{tags.length}</div>
			<div class="text-sm text-neutral-400">Tags</div>
		</div>

		<div class="text-center group">
			<div
				class="flex items-center justify-center w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl mx-auto mb-3 group-hover:bg-red-500/20 transition-all duration-300"
			>
				<Globe class="w-6 h-6 text-red-400" />
			</div>
			<div class="text-2xl font-bold text-white mb-1">{totalReadingTime}</div>
			<div class="text-sm text-neutral-400">Min read</div>
		</div>
	</div>

	{#if Object.keys(languageStats).length > 1}
		<div class="mt-6 pt-6 border-t border-neutral-700/50">
			<h3 class="text-sm font-medium text-neutral-300 mb-3 flex items-center gap-2">
				<span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
				Languages
			</h3>
			<div class="flex gap-3">
				{#each Object.entries(languageStats) as [lang, count]}
					<span
						class="px-3 py-2 bg-red-500/10 text-red-300 rounded-full text-xs font-medium border border-red-500/20"
					>
						{lang.toUpperCase()}: {count}
					</span>
				{/each}
			</div>
		</div>
	{/if}
</div>
