<script lang="ts">
	import { Globe, ExternalLink, Award } from 'lucide-svelte';
	export let language: string;
	export let level: string;
	export let certificationUrl: string | undefined = undefined;

	function getLevelColor(level: string): string {
		switch (level.toLowerCase()) {
			case 'native':
			case 'fluent':
				return 'text-green-400';
			case 'advanced':
				return 'text-blue-400';
			case 'intermediate':
				return 'text-yellow-400';
			case 'beginner':
				return 'text-orange-400';
			default:
				return 'text-neutral-400';
		}
	}

	function getLevelGradient(level: string): string {
		switch (level.toLowerCase()) {
			case 'native':
			case 'fluent':
				return 'from-green-500/20 to-green-600/20 border-green-500/30';
			case 'advanced':
				return 'from-blue-500/20 to-blue-600/20 border-blue-500/30';
			case 'intermediate':
				return 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30';
			case 'beginner':
				return 'from-orange-500/20 to-orange-600/20 border-orange-500/30';
			default:
				return 'from-neutral-500/20 to-neutral-600/20 border-neutral-500/30';
		}
	}

	$: levelColor = getLevelColor(level);
	$: levelGradient = getLevelGradient(level);
</script>

<div
	class="h-full group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-green-500/50 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col"
>
	<div class="flex items-center justify-between mb-4">
		<div class="flex items-center gap-3">
			<div
				class="w-8 h-8 bg-gradient-to-br {levelGradient} rounded-lg flex items-center justify-center border group-hover:scale-110 transition-transform duration-300"
			>
				<Globe class="w-4 h-4 {levelColor}" />
			</div>
			<h3
				class="text-lg font-semibold text-white group-hover:text-green-400 transition-colors duration-300"
			>
				{language}
			</h3>
		</div>

		{#if certificationUrl}
			<a
				href={certificationUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="group/link w-8 h-8 bg-neutral-800/50 hover:bg-green-500/20 border border-neutral-700 hover:border-green-500/30 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
				title="View Certification"
			>
				<ExternalLink
					class="w-4 h-4 text-neutral-400 group-hover/link:text-green-400 transition-colors duration-300"
				/>
			</a>
		{/if}
	</div>

	<div class="flex-1 space-y-3">
		<div class="flex items-center justify-between">
			<span class="text-sm font-medium text-neutral-400">Proficiency</span>
			<span class="text-sm font-semibold {levelColor}">{level}</span>
		</div>

		{#if certificationUrl}
			<div class="flex items-center gap-2 text-xs text-neutral-500">
				<Award class="w-3 h-3" />
				<span>Certified</span>
			</div>
		{/if}

		<!-- Progress bar visualization -->
		<div class="w-full bg-neutral-800 rounded-full h-2 overflow-hidden">
			<div
				class="h-2 rounded-full transition-all duration-500 bg-gradient-to-r {level.toLowerCase() ===
					'native' || level.toLowerCase() === 'fluent'
					? 'from-green-500 to-green-400 w-full'
					: level.toLowerCase() === 'advanced'
						? 'from-blue-500 to-blue-400 w-4/5'
						: level.toLowerCase() === 'intermediate'
							? 'from-yellow-500 to-yellow-400 w-3/5'
							: 'from-orange-500 to-orange-400 w-2/5'}"
			></div>
		</div>
	</div>
</div>
