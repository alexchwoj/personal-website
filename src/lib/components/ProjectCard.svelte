<script lang="ts">
	export let title: string;
	export let description: string;
	export let url: string;
	export let technologies: string[];
</script>

<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
	<a href={url} target="_blank" rel="noopener noreferrer">
		<h3 class="text-lg font-semibold text-neutral-200 transition-all hover:text-red-500 mb-2">
			{title}
		</h3>
	</a>

	<p class="text-neutral-400 mt-4">{description}</p>

	<ul class="mt-4 flex flex-wrap" aria-label="Technologies used">
		{#each technologies as technology}
			<li class="mr-1.5 mb-1.5">
				<div
					class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-semibold leading-5 text-black"
				>
					{technology}
				</div>
			</li>
		{/each}
	</ul>
</div>
