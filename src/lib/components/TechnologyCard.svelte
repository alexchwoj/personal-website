<script lang="ts">
	export let category: string;
	export let items: string[];
</script>

<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
	<h3 class="text-md font-semibold text-neutral-200 mb-2">{category}</h3>
	<ul class="list-disc pl-6">
		{#each items as item}
			<li class="text-neutral-400">{item}</li>
		{/each}
	</ul>
</div>
