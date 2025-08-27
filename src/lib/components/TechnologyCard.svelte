<script lang="ts">
	import { Code2 } from 'lucide-svelte';
	export let category: string;
	export let items: string[];
</script>

<div
	class="h-full group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
>
	<div class="flex items-center gap-3 mb-4">
		<div
			class="w-8 h-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300"
		>
			<Code2 class="w-4 h-4 text-blue-400" />
		</div>
		<h3
			class="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
		>
			{category}
		</h3>
	</div>

	<div class="flex-1 space-y-3">
		{#each items as item}
			<div
				class="flex items-center gap-2 text-neutral-300 hover:text-blue-300 transition-colors duration-200"
			>
				<div class="w-1.5 h-1.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
				<span class="text-sm font-medium">{item}</span>
			</div>
		{/each}
	</div>
</div>
