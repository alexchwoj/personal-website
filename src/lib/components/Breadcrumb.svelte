<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let items: Array<{ label: string; href?: string }> = [];
</script>

{#if items.length > 0}
	<nav aria-label="Breadcrumb" class="mb-6">
		<ol class="flex items-center space-x-2 text-sm">
			{#each items as item, index}
				<li class="flex items-center">
					{#if index > 0}
						<ChevronRight class="w-4 h-4 text-neutral-500 mx-2" />
					{/if}

					{#if item.href && index < items.length - 1}
						<a href={item.href} class="text-blue-400 hover:text-blue-300 transition-colors">
							{item.label}
						</a>
					{:else}
						<span class="text-neutral-400">
							{item.label}
						</span>
					{/if}
				</li>
			{/each}
		</ol>
	</nav>
{/if}
