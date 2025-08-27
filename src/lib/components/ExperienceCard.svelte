<script lang="ts">
	export let company: string;
	export let place: string;
	export let url: string | undefined = undefined;
	export let role: string;
	export let date: string;
	export let descriptions: string[] = [];
</script>

<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg mb-4 text-white">
	<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
		<div>
			<h3 class="text-lg sm:text-xl font-bold text-neutral-400">
				{#if url}
					<a
						class="text-neutral-100 hover:text-red-500 cursor-pointer transition-all"
						href={url}
						target="_blank"
						rel="noopener noreferrer">{company}</a
					>
				{:else}
					<span class="text-neutral-100">{company}</span>
				{/if}
				, {place}
			</h3>
			<p class="text-sm sm:text-md italic text-neutral-500">{role}</p>
		</div>
		<p class="text-xs sm:text-sm text-neutral-400 mt-2 sm:mt-0">{date}</p>
	</div>
	{#if descriptions.length > 0}
		<ul class="list-disc pl-5 mt-2">
			{#each descriptions as description}
				<li class="text-neutral-400 mb-1">
					{description}
				</li>
			{/each}
		</ul>
	{/if}
</div>
