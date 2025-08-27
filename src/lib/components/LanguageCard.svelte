<script lang="ts">
	export let language: string;
	export let level: string;
	export let certificationUrl: string | undefined = undefined;
</script>

<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
	<h3 class="text-md font-semibold text-neutral-200 mb-2">
		{language}
	</h3>
	<div class="flex items-center gap-2">
		<p class="text-neutral-400">{level}</p>
		{#if certificationUrl}
			<a
				href={certificationUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="text-neutral-400 hover:text-red-500 transition-all"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
					<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
				</svg>
			</a>
		{/if}
	</div>
</div>
