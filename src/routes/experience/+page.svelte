<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';

	let professional_experiences = [
		{
			company: 'SysWorld Servicios S.A',
			place: 'Remote (Buenos Aires, Argentina)',
			url: 'https://sysworld.lat/',
			role: 'Tech Leader, Full Stack Developer',
			date: 'January 2023 - Present',
			descriptions: [
				'SysWorld is a company specializing in telecommunications, providing legally certified email and SMS campaign services.',
				'After completing high school, I began my career at SysWorld, initially hired as an IT Operator. I was subsequently promoted to Technical Lead, where I oversaw both the IT and Development departments while also contributing as a Full Stack Developer.'
			]
		},
		{
			company: 'RoozServers',
			place: 'Remote (Madrid, Spain)',
			url: 'https://roozservers.com/',
			role: 'Network Defender, Web Developer',
			date: 'February 2029 - August 2021',
			descriptions: [
				'RoozServers was a project of friends dedicated to the sale of dedicated servers for video games and DDoS protection.',
				'I worked on this project throughout high school. I was tasked with developing game server firewalls using eBPF and XDP, as well as working on the main website using Flask for the backend and Bootstrap for the frontend.'
			]
		}
	];

	let personal_projects = [
		{
			title: 'cuarzo',
			description:
				'Cuarzo is a medium-level programming language, aimed at creating x86 software for Linux',
			url: 'https://github.com/alexchwoj/cuarzo',
			technologies: ['Python', 'C', 'Assembly', 'Linux']
		},
		{
			title: 'samp-cookie-exploit',
			description: 'SA-MP authentication process exploit, better known as "server full exploit"',
			url: 'https://github.com/alexchwoj/samp-cookie-exploit',
			technologies: ['Python']
		},
		{
			title: 'pizza-detector',
			description:
				'Small CNN model to classify images based on whether they contain a pizza or not.',
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
			description:
				'Firewall for game servers (San Andreas Multiplayer) that allows the integration of several nodes to the mother server by using the authorization mechanism of the game protocol.',
			url: 'https://github.com/alexchwoj/samp-reverse-proxy',
			technologies: ['Python', 'NGINX']
		},
		{
			title: 'samp-rce-fix',
			description:
				'This repository provides a fix for the RCE vulnerability found in previous versions of the SA-MP R5 client.',
			url: 'https://github.com/alexchwoj/samp-rce-fix',
			technologies: ['C++', 'Eeverse Engineering']
		}
	];

	let studies = [
		{
			school: 'Teclab Higher Technical Institute',
			place: 'Argentina',
			role: 'Senior Cybersecurity Technician',
			date: '2023 - Present'
		}
	];
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div
	class="max-w-screen-xl p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-none sm:rounded-lg text-neutral-400"
	in:fly={{ x: -200, duration: 300, delay: 300 }}
	out:fly={{ x: 200, duration: 300 }}
>
	<Title>Professional Experiences</Title>
	{#each professional_experiences as experience}
		<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg mb-4 text-white">
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-neutral-400">
						<a
							class="text-neutral-100 hover:text-red-500 cursor-pointer transition-all"
							href={experience.url}>{experience.company}</a
						>, {experience.place}
					</h3>
					<p class="text-sm sm:text-md italic text-neutral-500">{experience.role}</p>
				</div>
				<p class="text-xs sm:text-sm text-neutral-400 mt-2 sm:mt-0">{experience.date}</p>
			</div>
			<ul class="list-disc pl-5 mt-2">
				{#each experience.descriptions as description}
					<li class="text-neutral-400 mb-1">
						{description}
					</li>
				{/each}
			</ul>
		</div>
	{/each}

	<hr class="mb-4 border-neutral-800" />

	<Title>Personal Projects</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
		{#each personal_projects as project}
			<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
				<a href={project.url}>
					<h3 class="text-lg font-semibold text-neutral-200 transition-all hover:text-red-500 mb-2">
						{project.title}
					</h3>
				</a>

				<p class="text-neutral-400 mt-4">{project.description}</p>

				<ul class="mt-4 flex flex-wrap" aria-label="Technologies used">
					{#each project.technologies as technologie}
						<li class="mr-1.5">
							<div
								class="flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-semibold leading-5 text-black"
							>
								{technologie}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<hr class="mb-4 border-neutral-800" />

	<Title>Education</Title>
	{#each studies as career}
		<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg mb-4 text-white">
			<div class="flex flex-col sm:flex-row sm:justify-between sm:items-start">
				<div>
					<h3 class="text-lg sm:text-xl font-bold text-neutral-400">
						{career.school}, {career.place}
					</h3>
					<p class="text-sm sm:text-md italic text-neutral-500">{career.role}</p>
				</div>
				<p class="text-xs sm:text-sm text-neutral-400 mt-2 sm:mt-0">{career.date}</p>
			</div>
		</div>
	{/each}
</div>
