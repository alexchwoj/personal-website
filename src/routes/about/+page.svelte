<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';

	import Cursor from '$lib/components/Cursor.svelte';

	let technologies = [
		{
			category: 'Python',
			items: ['Flask', 'Django', 'FastAPI']
		},
		{
			category: 'Javascript',
			items: ['NodeJS', 'jQuery']
		},
		{
			category: 'Databases',
			items: ['MariaDB', 'MySQL', 'PostgreSQL', 'MongoDB']
		},
		{
			category: 'CI/CD',
			items: ['Jenkins', 'AWS CodeDeploy']
		},
		{
			category: 'Virtualization',
			items: ['LxC', 'KVM', 'Proxmox', 'VirtualBox', 'VMWare', 'Hyper-V']
		},
		{
			category: 'MFT',
			items: ['Cerberus FTP', 'GoAnywhere', 'CDATA ARC', 'Crush FTP']
		},
		{
			category: 'Web Desing',
			items: ['HTML5', 'CSS', 'Svelte']
		},
		{
			category: 'Cloud',
			items: ['Amazon Web Services']
		},
		{
			category: 'CRM',
			items: ['Bitrix', 'Monday', 'Slack']
		},
		{
			category: 'Other',
			items: ['Unix', 'Git', 'C#']
		}
	];

	let languages = [
		{
			name: 'Spanish',
			proficiency: 'Native',
			flag: '🇪🇸'
		},
		{
			name: 'English',
			proficiency: 'Basic',
			flag: '🇺🇸'
		}
	];
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<Cursor></Cursor>

<div
	class="max-w-screen-xl p-8 mx-auto mt-8 mb-12 bg-neutral-900 rounded-lg text-neutral-400"
	in:fly={{ x: -200, duration: 300, delay: 300 }}
	out:fly={{ x: 200, duration: 300 }}
>
	<Title>About Me</Title>
	<Paragraph>
		Hello, I'm Alexander Chwojewski, a software developer based in Northern Argentina. My family
		originally came from Ukraine, migrating to Argentina during World War II. My personal interests
		lie in classical music, particularly opera, and a fascination with aeronautics and aerospace. In
		my professional life, I focus on using my diverse background and interests to create innovative
		software solutions.
	</Paragraph>

	<Title>Technologies</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
		{#each technologies as techCategory}
			<div class="p-4 bg-neutral-800 shadow-lg rounded-lg">
				<h3 class="text-md font-semibold text-neutral-200 mb-2">{techCategory.category}</h3>
				<ul class="list-disc pl-6">
					{#each techCategory.items as techItem}
						<li class="text-neutral-400">{techItem}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<Title>Languages</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
		{#each languages as language}
			<div class="p-4 bg-neutral-800 shadow-lg rounded-lg">
				<h3 class="text-md font-semibold text-neutral-200 mb-2">
					{language.name}
					{language.flag}
				</h3>
				<p class="text-neutral-400">{language.proficiency}</p>
			</div>
		{/each}
	</div>
</div>
