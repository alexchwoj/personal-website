<script lang="ts">
	import { ExternalLink, Rocket, Code } from 'lucide-svelte';
	export let title: string;
	export let description: string;
	export let url: string;
	export let technologies: string[];
</script>

<div
	class="group h-full flex flex-col bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl overflow-hidden hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
>
	<div class="flex-1 p-6">
		<div class="flex items-center justify-between mb-4">
			<div class="flex items-center gap-3">
				<div
					class="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-lg flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300"
				>
					<Rocket class="w-5 h-5 text-purple-400" />
				</div>
				<h3
					class="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300"
				>
					{title}
				</h3>
			</div>

			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				class="group/link w-10 h-10 bg-neutral-800/50 hover:bg-purple-500/20 border border-neutral-700 hover:border-purple-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
				title="View Project"
			>
				<ExternalLink
					class="w-5 h-5 text-neutral-400 group-hover/link:text-purple-400 transition-colors duration-300"
				/>
			</a>
		</div>

		<p class="text-neutral-300 leading-relaxed mb-6">{description}</p>

		<div class="space-y-3">
			<div
				class="flex items-center gap-2 text-sm font-semibold text-neutral-400 uppercase tracking-wider"
			>
				<Code class="w-4 h-4" />
				<span>Tech Stack</span>
			</div>

			<div class="flex flex-wrap gap-2">
				{#each technologies as technology}
					<span
						class="px-3 py-1.5 bg-purple-500/10 text-purple-300 rounded-full text-xs border border-purple-500/20 font-medium hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
					>
						{technology}
					</span>
				{/each}
			</div>
		</div>
	</div>

	<div class="border-t border-neutral-700/50 p-4 bg-neutral-800/30">
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			class="group/button w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-purple-200 rounded-lg font-medium transition-all duration-200 border border-purple-500/20 hover:border-purple-500/40"
		>
			<span>View Project</span>
			<ExternalLink
				class="w-4 h-4 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5 transition-transform duration-300"
			/>
		</a>
	</div>
</div>
