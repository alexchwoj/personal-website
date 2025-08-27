<script lang="ts">
	import { onMount } from 'svelte';
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import TechnologyCard from '$lib/components/TechnologyCard.svelte';
	import LanguageCard from '$lib/components/LanguageCard.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { TECHNOLOGIES, LANGUAGES, SITE_CONFIG } from '$lib/constants';
	import { User, Globe, Award, Code2 } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<SEO
	title="About Me - {SITE_CONFIG.author}"
	description="Learn about {SITE_CONFIG.author}'s background, skills, and experience as a software developer from Argentina"
	canonical="{SITE_CONFIG.url}/about"
/>

<PageContainer>
	<!-- Enhanced hero section -->
	<div class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700' : ''}`}>
		<div class="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/10">
			<div class="flex items-center gap-4 mb-6">
				<div class="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center border border-red-500/30">
					<User class="w-6 h-6 text-red-400" />
				</div>
				<div>
					<h1 class="text-3xl lg:text-4xl font-bold text-white">About Me</h1>
					<p class="text-neutral-400">Get to know more about my background and skills</p>
				</div>
			</div>
			
			<div class="space-y-6">
				<p class="text-lg lg:text-xl text-neutral-300 leading-relaxed">
					I'm a passionate <span class="text-red-400 font-semibold">software developer</span> from <span class="text-blue-400 font-semibold">Argentina 🇦🇷</span>. 
					Currently working as a <span class="text-green-400 font-semibold">Tech Leader</span>, I love creating innovative solutions and leading development teams.
				</p>
				
				<p class="text-lg text-neutral-300 leading-relaxed">
					In my free time, I dive deep into <span class="text-purple-400 font-semibold">game development</span> and 
					<span class="text-yellow-400 font-semibold">cybersecurity</span> - always exploring new technologies and pushing the boundaries of what's possible.
				</p>

				<div class="flex flex-wrap gap-3 pt-4">
					{#each ['Tech Leadership', 'Full-Stack Development', 'Game Development', 'Cybersecurity', 'Team Mentoring'] as skill}
						<span class="px-4 py-2 bg-red-500/10 text-red-300 rounded-full text-sm border border-red-500/20 font-medium">
							{skill}
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<!-- Enhanced Technologies section -->
	<div class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-200' : ''}`}>
		<div class="flex items-center gap-4">
			<div class="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30">
				<Code2 class="w-5 h-5 text-blue-400" />
			</div>
			<div>
				<h2 class="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></span>
					Technologies
				</h2>
				<p class="text-neutral-400">Tools and frameworks I work with</p>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each TECHNOLOGIES as techCategory, index}
				<div class={mounted ? `animate-in slide-in-from-bottom duration-500 delay-${300 + index * 100}` : ''}>
					<TechnologyCard category={techCategory.category} items={techCategory.items} />
				</div>
			{/each}
		</div>
	</div>

	<!-- Enhanced separator -->
	<div class="flex items-center justify-center my-16">
		<div class="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-full max-w-md relative">
			<div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
		</div>
	</div>

	<!-- Enhanced Languages section -->
	<div class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-400' : ''}`}>
		<div class="flex items-center gap-4">
			<div class="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30">
				<Globe class="w-5 h-5 text-green-400" />
			</div>
			<div>
				<h2 class="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-1 h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></span>
					Languages
				</h2>
				<p class="text-neutral-400">Languages I speak and my proficiency levels</p>
			</div>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each LANGUAGES as language, index}
				<div class={mounted ? `animate-in slide-in-from-bottom duration-500 delay-${500 + index * 150}` : ''}>
					<LanguageCard
						language={language.language}
						level={language.level}
						certificationUrl={language.certificationUrl}
					/>
				</div>
			{/each}
		</div>
	</div>

	<!-- Enhanced closing section -->
	<div class={`mt-16 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-600' : ''}`}>
		<div class="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/10 text-center">
			<div class="flex items-center justify-center gap-2 text-neutral-400 mb-4">
				<Award class="w-5 h-5 text-yellow-400" />
				<span class="text-lg font-medium">Always Learning, Always Growing</span>
			</div>
			<p class="text-neutral-300 text-lg leading-relaxed max-w-2xl mx-auto">
				Technology evolves fast, and so do I. I'm always exploring new frameworks, learning emerging technologies, 
				and finding better ways to solve complex problems.
			</p>
			<div class="flex items-center justify-center gap-2 mt-6">
				<div class="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
				<span class="text-red-400 font-medium">Currently exploring AI/ML integration</span>
			</div>
		</div>
	</div>
</PageContainer>

<style>
	/* Custom animations */
	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(2rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: animate-in 0.6s ease-out;
	}

	.slide-in-from-bottom {
		transform: translateY(2rem);
		opacity: 0;
		animation: animate-in 0.6s ease-out forwards;
	}

	.duration-500 {
		animation-duration: 0.5s;
	}

	.duration-700 {
		animation-duration: 0.7s;
	}

	.delay-200 {
		animation-delay: 0.2s;
	}

	.delay-300 {
		animation-delay: 0.3s;
	}

	.delay-400 {
		animation-delay: 0.4s;
	}

	.delay-500 {
		animation-delay: 0.5s;
	}

	.delay-600 {
		animation-delay: 0.6s;
	}

	.delay-650 {
		animation-delay: 0.65s;
	}

	.delay-800 {
		animation-delay: 0.8s;
	}
</style>
