<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div
	class="max-w-screen-xl p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-lg text-neutral-400"
	in:fly={{ x: -200, duration: 300, delay: 300 }}
	out:fly={{ x: 200, duration: 300 }}
>
	<Title>How to contact me</Title>
	<Paragraph>
		You can contact me by sending me a message on my <a
			class=" text-red-500"
			href="https://www.linkedin.com/in/alexander-chwojewski/">LinkedIn</a
		>
		or writing me an email at
		<a class=" text-red-500" href="mailto:alexancerchwojewski@gmail.com"
			>alexancerchwojewski@gmail.com</a
		>
	</Paragraph>
</div>
