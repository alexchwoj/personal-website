<script lang="ts">
	import TextScramble from './TextScramble.svelte';

	export let href: string;
	export let text: string;
</script>

<a
	{href}
	class="p-2 font-medium text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 transition-all ease-out duration-300"
>
	<TextScramble {text} />
</a>
