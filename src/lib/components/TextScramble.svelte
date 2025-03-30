<script lang="ts">
	import { onMount } from 'svelte';

	export let text: string = '';

	let displayText: string = '';
	const chars: string =
		'0123456789$%&/()[]{}<>|!@#^*+-=~_?abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

	function scramble(): void {
		let iteration: number = 0;

		const timer: number = setInterval(() => {
			displayText = text
				.split('')
				.map((letter: string, index: number): string => {
					if (index < iteration) {
						return letter;
					}
					return chars[Math.floor(Math.random() * chars.length)];
				})
				.join('');

			if (iteration >= text.length) {
				clearInterval(timer);
			}

			iteration += 1 / 3;
		}, 20);
	}

	onMount(() => {
		scramble();
	});
</script>

<span>{displayText}</span>
