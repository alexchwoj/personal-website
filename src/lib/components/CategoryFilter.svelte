<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let categories: string[] = [];
	export let selectedCategory: string | null = null;
	export let showAll = true;

	const dispatch = createEventDispatcher<{
		select: string | null;
	}>();

	function handleCategoryClick(category: string | null) {
		selectedCategory = category;
		dispatch('select', category);
	}
</script>

<div class="flex flex-wrap gap-3">
	{#if showAll}
		<button
			on:click={() => handleCategoryClick(null)}
			class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedCategory ===
			null
				? 'bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
				: 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-600'}"
		>
			All
		</button>
	{/if}

	{#each categories as category}
		<button
			on:click={() => handleCategoryClick(category)}
			class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedCategory ===
			category
				? 'bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
				: 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-600'}"
		>
			{category}
		</button>
	{/each}
</div>
