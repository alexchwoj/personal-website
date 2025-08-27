<script lang="ts">
	import { Building2, MapPin, ExternalLink, Calendar, ChevronRight } from 'lucide-svelte';
	export let company: string;
	export let place: string;
	export let url: string | undefined = undefined;
	export let role: string;
	export let date: string;
	export let descriptions: string[] = [];
</script>

<div class="group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 lg:p-8 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 mb-6">
	<!-- Header section -->
	<div class="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
		<div class="space-y-3">
			<div class="flex items-center gap-3">
				<div class="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
					<Building2 class="w-5 h-5 text-blue-400" />
				</div>
				<div>
					<h3 class="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2">
						{#if url}
							<a
								href={url}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:text-blue-300 transition-colors duration-200 flex items-center gap-2"
							>
								{company}
								<ExternalLink class="w-4 h-4" />
							</a>
						{:else}
							{company}
						{/if}
					</h3>
					<div class="flex items-center gap-2 text-neutral-400">
						<MapPin class="w-4 h-4" />
						<span class="text-sm font-medium">{place}</span>
					</div>
				</div>
			</div>
			
			<div class="pl-13">
				<p class="text-lg font-semibold text-red-400 mb-1">{role}</p>
			</div>
		</div>

		<div class="flex items-center gap-2 text-neutral-400 bg-neutral-800/50 px-4 py-2 rounded-lg border border-neutral-700/50">
			<Calendar class="w-4 h-4" />
			<span class="text-sm font-medium">{date}</span>
		</div>
	</div>

	<!-- Description section -->
	{#if descriptions.length > 0}
		<div class="space-y-3 pl-13">
			<h4 class="text-sm font-semibold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
				<span class="w-2 h-2 bg-green-500 rounded-full"></span>
				Key Achievements
			</h4>
			<div class="space-y-3">
				{#each descriptions as description}
					<div class="flex items-start gap-3 text-neutral-300 hover:text-white transition-colors duration-200">
						<ChevronRight class="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
						<span class="leading-relaxed">{description}</span>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
