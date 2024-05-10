<script lang="ts">
	import Cursor from '$lib/components/Cursor.svelte';
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';

	let personal_projects = [
		{
			title: 'samp-cookie-exploit',
			description: 'SA-MP authentication process exploit, better known as "server full exploit"',
			url: 'https://github.com/alexchwoj/samp-cookie-exploit',
			technologies: ['Python']
		},
		{
			title: 'pizza-detector',
			description: 'Small CNN model to classify images based on whether they contain a pizza or not.',
			url: 'https://github.com/alexchwoj/pizza-detector',
			technologies: ['Python', 'AI']
		},
		{
			title: 'pawn-easing-functions',
			description: 'Animation system through easing equations.',
			url: 'https://github.com/alexchwoj/pawn-easing-functions',
			technologies: ['Pawn']
		},
		{
			title: 'route-tracing',
			description: 'GPS style route tracing system using path finding.',
			url: 'https://github.com/alexchwoj/route-tracing',
			technologies: ['Pawn']
		},
		{
			title: 'samp-reverse-proxy',
			description: 'Firewall for game servers (San Andreas Multiplayer) that allows the integration of several nodes to the mother server by using the authorization mechanism of the game protocol.',
			url: 'https://github.com/alexchwoj/samp-reverse-proxy',
			technologies: ['Python', 'NGINX']
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<Cursor></Cursor>

<div class="relative h-screen">
	<div
		class="max-w-screen-xl p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-lg text-neutral-400"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<Title>Personal projects</Title>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
			{#each personal_projects as project}
				<div class="p-4 bg-neutral-800 shadow-lg rounded-lg">
					<a href={project.url} class="cursor-none">
						<h3 class="text-lg font-semibold text-neutral-200 transition-all hover:text-red-500 mb-2">{project.title}</h3>
					</a>

					<p class="text-neutral-400">{project.description}</p>
					<p class="text-neutral-600 mt-2">{project.technologies.join(', ')}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
