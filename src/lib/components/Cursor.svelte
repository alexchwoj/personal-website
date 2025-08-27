<script lang="ts">
	import { onMount } from 'svelte';

	export let color: string = 'red';
	export let shape: 'circle' | 'square' = 'circle';
	export let mixBlendMode: string = 'none';

	let x: number = -100;
	let y: number = -100;
	let size: number = 20;
	let isHovered: boolean = false;

	const cx = () => size / 2;
	const cy = () => size / 2;

	onMount(() => {
		const initCursor = () => {
			const cursorElement = document.querySelector('.custom-cursor');
			document.body.style.cursor = 'none';

			document.addEventListener('mousemove', (e: MouseEvent) => {
				x = e.clientX;
				y = e.clientY;
			});

			const hoverables = document.querySelectorAll('.hoverable, a, button');
			hoverables.forEach((hoverable) => {
				hoverable.addEventListener('mouseenter', () => {
					size = 40;
					isHovered = true;
					document.body.style.cursor = 'none';
				});
				hoverable.addEventListener('mouseleave', () => {
					size = 20;
					isHovered = false;
				});
			});
		};

		initCursor();

		return () => {
			document.body.style.cursor = 'auto';
		};
	});
</script>

<div
	class="custom-cursor {shape} {isHovered ? 'cursor-hovered' : ''}"
	style="left: {x - cx()}px; top: {y -
		cy()}px; --size: {size}px; --mix-blend-mode: {mixBlendMode}; --background-color: {color};"
/>

<style>
	.custom-cursor {
		--background-color: red;
		--mix-blend-mode: none;
		--size: 20px;

		background-color: var(--background-color);
		mix-blend-mode: var(--mix-blend-mode);
		width: var(--size);
		height: var(--size);
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99999;
		opacity: 0.5;
		transition: all 0.2s cubic-bezier(0.28, 0.8, 0.36, 1);
	}

	.custom-cursor.square {
		border-radius: 0;
	}

	.cursor-hovered {
		background-color: transparent !important;
		border: 2px solid var(--background-color) !important;
		opacity: 1 !important;
	}
</style>
