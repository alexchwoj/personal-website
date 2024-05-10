<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	export let src: string;
	export let alt: string;
	let isOpen: boolean = false;

	function openImage() {
		isOpen = true;
	}

	function closeImage() {
		isOpen = false;
	}

	onMount(() => {
		function handleKeyUp(event: KeyboardEvent) {
			if (event.key === 'Escape') {
				closeImage();
			}
		}

		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keyup', handleKeyUp);
		};
	});
</script>

{#if isOpen}
	<div
		class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center z-50 bg-black bg-opacity-75"
		in:fly={{ x: -200, duration: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<div class="relative">
			<img {alt} {src} class="max-h-screen max-w-screen" draggable="true" />
			<button class="absolute top-2 right-2 text-white text-4xl" on:click={closeImage}
				>&times;</button
			>
		</div>
	</div>
{/if}

<img
	{alt}
	{src}
	class="h-auto max-w-full rounded-xl border-2 border-transparent hover:border-red-500 shadow-xl shadow-transparent hover:shadow-red-500/50 transition-all duration-300 hoverable"
	on:click={openImage}
/>
