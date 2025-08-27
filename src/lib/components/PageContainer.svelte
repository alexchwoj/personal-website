<script lang="ts">
	import { fly } from 'svelte/transition';

	export let maxWidth: string = 'screen-xl';
	export let delayMs: number = 300;
	export let className: string = '';
</script>

<div
	class="max-w-{maxWidth} p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-none sm:rounded-lg text-neutral-400 {className}"
	in:fly={{ x: -200, duration: 300, delay: delayMs }}
	out:fly={{ x: 200, duration: 300 }}
>
	<slot />
</div>
