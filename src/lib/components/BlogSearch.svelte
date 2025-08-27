<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Search } from 'lucide-svelte';

	export let value = '';
	export let placeholder = 'Search blog posts...';

	const dispatch = createEventDispatcher<{
		search: string;
		clear: void;
	}>();

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		value = target.value;
		dispatch('search', value);
	}

	function handleClear() {
		value = '';
		dispatch('clear');
	}
</script>

<div class="relative">
	<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
		<Search class="h-5 w-5 text-neutral-400" />
	</div>

	<input
		type="search"
		bind:value
		on:input={handleInput}
		{placeholder}
		class="block w-full pl-10 pr-10 py-4 bg-neutral-800/50 border border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 backdrop-blur-sm"
	/>

	{#if value}
		<button
			on:click={handleClear}
			class="absolute inset-y-0 right-0 pr-4 flex items-center text-neutral-400 hover:text-red-400 transition-colors duration-200"
		>
			<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	{/if}
</div>
