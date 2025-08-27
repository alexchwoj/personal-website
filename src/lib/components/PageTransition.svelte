<script lang="ts">
	import { fly } from 'svelte/transition';

	export let delayMs: number = 300;
	export let duration: number = 300;
	export let x: number = -200;
</script>

<div in:fly={{ x, duration, delay: delayMs }} out:fly={{ x: -x, duration }}>
	<slot />
</div>
