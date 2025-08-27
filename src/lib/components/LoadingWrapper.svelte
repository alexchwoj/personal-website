<script lang="ts">
	export let isLoading: boolean = false;
	export let error: string | null = null;
	export let loadingText: string = 'Loading...';
</script>

{#if isLoading}
	<div class="flex justify-center items-center p-8">
		<div class="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
		<span class="ml-2 text-neutral-400">{loadingText}</span>
	</div>
{:else if error}
	<div class="p-4 bg-red-900 border border-red-700 rounded-lg text-red-200">
		<h3 class="font-semibold mb-2">Error</h3>
		<p>{error}</p>
	</div>
{:else}
	<slot />
{/if}
