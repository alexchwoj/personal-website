<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let languages: { code: 'en' | 'es'; name: string }[] = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' }
	];
	export let selectedLanguage: 'en' | 'es' | null = null;

	const dispatch = createEventDispatcher<{
		select: 'en' | 'es' | null;
	}>();

	function handleLanguageClick(language: 'en' | 'es' | null) {
		selectedLanguage = language;
		dispatch('select', language);
	}
</script>

<div class="flex gap-3">
	<button
		on:click={() => handleLanguageClick(null)}
		class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedLanguage ===
		null
			? 'bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
			: 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-600'}"
	>
		All
	</button>

	{#each languages as language}
		<button
			on:click={() => handleLanguageClick(language.code)}
			class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 {selectedLanguage ===
			language.code
				? 'bg-red-500 text-white shadow-lg shadow-red-500/25 scale-105'
				: 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-600'}"
		>
			{language.name}
		</button>
	{/each}
</div>
