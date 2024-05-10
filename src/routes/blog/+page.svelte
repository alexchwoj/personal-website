<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<Cursor></Cursor>

<div
	class="max-w-screen-xl p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-lg text-neutral-400"
	in:fly={{ x: -200, duration: 300, delay: 300 }}
	out:fly={{ x: 200, duration: 300 }}
>
	<p>⚠️ Under construction hehe</p>
</div>
