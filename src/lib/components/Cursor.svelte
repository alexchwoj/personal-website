<script>
	import { onMount } from 'svelte';

	export let color = 'white';
	export let shape = 'circle';
	export let mixBlendMode = 'none';

	let x = -100;
	let y = -100;

	let size = 20;
	const cx = size / 2;
	const cy = size / 2;

	onMount(() => {
		const initCursor = () => {
            const cursorElement = document.querySelector('.custom-cursor');
            document.body.style.cursor = 'none';

			document.addEventListener('mousemove', (e) => {
				x = e.clientX;
				y = e.clientY;
			});
			const hoverables = document.querySelectorAll('.hoverable, a, button');
			hoverables.forEach((hoverable) => {
				hoverable.addEventListener('mouseenter', () => {
					size = 40;
					document.body.style.cursor = 'none';
                    cursorElement?.classList.add('cursor-hovered');
				});
				hoverable.addEventListener('mouseleave', () => {
					size = 20;
                    cursorElement?.classList.remove('cursor-hovered');
				});
			});
		};

		initCursor();
	});
</script>

<div
	class="custom-cursor {shape}"
	style="left: {x - cx}px; top: {y -
		cy}px;--size:{size}px; --mix-blend-mode: {mixBlendMode}; --background-color: {color}"
/>

<style>
	.custom-cursor {
		--background-color: 'black';
		--mix-blend-mode: 'none';
		--size: 20;
		background-color: var(--background-color);
		mix-blend-mode: var(--mix-blend-mode);
		width: var(--size);
		height: var(--size);
		position: fixed;
		border-radius: 50%;
		pointer-events: none;
		z-index: 99999;
        opacity: 0.50;

		transition: all 0.2s cubic-bezier(0.28, 0.8, 0.36, 1);
		cursor: none;
	}

	.custom-cursor.square {
		border-radius: 0;
	}
	
    .cursor-none {
		cursor: none;
	}

    .cursor-hovered {
        background-color: transparent !important;
        transition: all 0.2s cubic-bezier(0.28, 0.8, 0.36, 1);
        border-width: 2px !important;
        border-color: var(--background-color) !important;
        opacity: 1 !important;
    }
</style>
