<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';

	export let items: Array<{ label: string; href?: string }> = [];
</script>

{#if items.length > 0}
	<nav aria-label="Breadcrumb" class="mb-6">
		<div
			class="bg-gradient-to-br from-neutral-900/60 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 rounded-xl px-4 py-3"
		>
			<ol class="flex items-center space-x-2 text-sm">
				{#each items as item, index}
					<li class="flex items-center">
						{#if index > 0}
							<ChevronRight class="w-4 h-4 text-neutral-500 mx-2" />
						{/if}

						{#if item.href && index < items.length - 1}
							<a
								href={item.href}
								class="text-red-400 hover:text-red-300 transition-colors duration-200 flex items-center gap-1"
							>
								{#if index === 0}
									<span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
								{/if}
								{item.label}
							</a>
						{:else}
							<span class="text-neutral-300 font-medium flex items-center gap-1">
								{#if index === 0}
									<span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
								{/if}
								{item.label}
							</span>
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	</nav>
{/if}
