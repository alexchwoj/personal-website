<script lang="ts">
	import Image from '$lib/components/Image.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Title from '$lib/components/Title.svelte';
	import { fly } from 'svelte/transition';

	let technologies = [
		{
			category: 'Python',
			items: ['Flask', 'Django', 'FastAPI']
		},
		{
			category: 'Javascript',
			items: ['Vanilla', 'TypeScript', 'NodeJS', 'jQuery', 'Electron', 'JerryScript']
		},
		{
			category: 'Scripting',
			items: ['Lua', 'Pawn', 'AngelScript', 'Bash', 'PowerShell']
		},
		{
			category: 'Databases',
			items: ['MariaDB', 'MySQL', 'PostgreSQL', 'MongoDB']
		},
		{
			category: 'CI/CD',
			items: ['Jenkins', 'AWS CodeDeploy', 'AWS CodePipeline', 'GitHub Actions']
		},
		{
			category: 'Virtualization',
			items: ['LxC', 'KVM', 'Proxmox', 'VirtualBox', 'VMWare', 'Hyper-V', 'Docker']
		},
		{
			category: 'VPN',
			items: ['Wireguard', 'Twingate']
		},
		{
			category: 'Cloud',
			items: ['Amazon Web Services', 'Azure', 'OVH']
		},
		{
			category: 'Brokers',
			items: ['RabbitMQ', 'Redis']
		},
		{
			category: 'MFT',
			items: ['Cerberus FTP', 'GoAnywhere', 'CDATA ARC', 'Crush FTP']
		},
		{
			category: 'Web Desing',
			items: ['HTML5', 'CSS', 'Svelte', 'Bootstrap', 'Tailwind CSS']
		},
		{
			category: 'Web Servers',
			items: ['Apache', 'Nginx', 'IIS']
		},
		{
			category: 'CRM',
			items: ['Bitrix', 'Monday', 'Slack']
		},
		{
			category: 'Other',
			items: ['Unix', 'Git', 'Unity3D', 'C#', 'C/CPP']
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

<div
	class="max-w-screen-xl p-8 mx-auto mt-8 bg-neutral-900 rounded-none sm:rounded-lg text-neutral-400"
	in:fly={{ x: -200, duration: 300, delay: 300 }}
	out:fly={{ x: 200, duration: 300 }}
>
	<Title>About Me</Title>
	<Paragraph>
		I'm a software developer from Argentina. Currently working as a Tech Lead, with a passion for
		game development and cybersecurity in my free time.
	</Paragraph>

	<hr class="mb-4 border-neutral-800" />

	<Title>Technologies</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
		{#each technologies as techCategory}
			<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
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
			<div class="p-4 bg-neutral-800 border border-neutral-700 shadow-md rounded-lg">
				<h3 class="text-md font-semibold text-neutral-200 mb-2">
					{language.name}
					{language.flag}
				</h3>
				<p class="text-neutral-400">{language.proficiency}</p>
			</div>
		{/each}
	</div>
</div>

<div class="mt-8"></div>
