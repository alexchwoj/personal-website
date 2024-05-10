<script lang="ts">
	import RotatingObject from '$lib/components/RotatingObject.svelte';
	import { Canvas } from '@threlte/core';

	import { scale, fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	import github from '$lib/icons/github.svg';
	import instagram from '$lib/icons/instagram.svg';
	import linkedin from '$lib/icons/linkedin.svg';

</script>

<svelte:head>
	<title>Alexander Chwojewski</title>
</svelte:head>

<div class="h-fit">
	<div
		class="absolute inset-0 -z-10"
	>
		<Canvas>
			<RotatingObject></RotatingObject>
		</Canvas>
	</div>

	<div
		class="flex flex-col justify-center items-center relative z-10 mt-[20%] select-none"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<h1 class="text-white text-4xl font-bold mb-8 text-center text-shadow">
			Sup!<br />
			I'm <span class="border-b-2 border-b-red-500">Alexander</span>, a
			<span class="border-b-2 border-b-red-500">Software Developer</span>
		</h1>

		<div class="flex items-center space-x-4">
			<a
				href="https://github.com/alexchwoj"
				class="w-12 h-12 bg-white text-black rounded-full hover:ring-2 ring-offset-4 hover:ring-red-500 p-2 hover:text-white transition-all duration-500"
			>
				<img src={github} alt="GitHub" />
			</a>
			
			<a
				href="https://www.linkedin.com/in/alexander-chwojewski/"
				class="w-12 h-12 bg-white text-black rounded-full hover:ring-2 ring-offset-4 hover:ring-red-500 p-2 hover:text-white transition-all duration-500"
			>
				<img src={linkedin} alt="LinkedIn" />
			</a>
		</div>
	</div>
</div>