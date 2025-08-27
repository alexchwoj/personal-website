<script lang="ts">
	import { onMount } from 'svelte';
	import Title from '$lib/components/Title.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import {
		PROFESSIONAL_EXPERIENCES,
		PERSONAL_PROJECTS,
		EDUCATION,
		SITE_CONFIG
	} from '$lib/constants';
	import { Briefcase, FolderOpen, GraduationCap, Rocket } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<SEO
	title="Experience - {SITE_CONFIG.author}"
	description="Explore {SITE_CONFIG.author}'s professional experience, personal projects, and education in software development"
	canonical="{SITE_CONFIG.url}/experience"
/>

<PageContainer>
	<!-- Enhanced Professional Experience section -->
	<div class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700' : ''}`}>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30"
				>
					<Briefcase class="w-6 h-6 text-blue-400" />
				</div>
				<h1 class="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></span>
					Professional Experience
				</h1>
			</div>
			<p class="text-neutral-400 ml-16">My journey in the tech industry</p>
		</div>

		<div class="space-y-6">
			{#each PROFESSIONAL_EXPERIENCES as experience, index}
				<div
					class={mounted
						? `animate-in slide-in-from-bottom duration-500 delay-${200 + index * 150}`
						: ''}
				>
					<ExperienceCard
						company={experience.company}
						place={experience.place}
						url={experience.url}
						role={experience.role}
						date={experience.date}
						descriptions={experience.descriptions}
						colorScheme="blue"
					/>
				</div>
			{/each}
		</div>
	</div>

	<!-- Enhanced separator -->
	<div class="flex items-center justify-center my-16">
		<div
			class="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-full max-w-md relative"
		>
			<div
				class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"
			></div>
		</div>
	</div>

	<!-- Enhanced Personal Projects section -->
	<div
		class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-300' : ''}`}
	>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30"
				>
					<Rocket class="w-6 h-6 text-purple-400" />
				</div>
				<h2 class="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full"
					></span>
					Personal Projects
				</h2>
			</div>
			<p class="text-neutral-400 ml-16">Side projects and passion experiments</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each PERSONAL_PROJECTS as project, index}
				<div
					class={`h-full ${
						mounted ? `animate-in slide-in-from-bottom duration-500 delay-${500 + index * 150}` : ''
					}`}
				>
					<ProjectCard
						title={project.title}
						description={project.description}
						url={project.url}
						technologies={project.technologies}
					/>
				</div>
			{/each}
		</div>
	</div>

	<!-- Enhanced separator -->
	<div class="flex items-center justify-center my-24">
		<div
			class="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-full max-w-md relative"
		>
			<div
				class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
			></div>
		</div>
	</div>

	<!-- Enhanced Education section -->
	<div
		class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-500' : ''}`}
	>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30"
				>
					<GraduationCap class="w-6 h-6 text-green-400" />
				</div>
				<h2 class="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></span>
					Education
				</h2>
			</div>
			<p class="text-neutral-400 ml-16">Academic background and formal training</p>
		</div>

		<div class="space-y-6">
			{#each EDUCATION as career, index}
				<div
					class={mounted
						? `animate-in slide-in-from-bottom duration-500 delay-${700 + index * 150}`
						: ''}
				>
					<ExperienceCard
						company={career.school}
						place={career.place}
						role={career.role}
						date={career.date}
						colorScheme="green"
					/>
				</div>
			{/each}
		</div>
	</div>

	<!-- Enhanced summary section -->
	<div class={`mt-16 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-800' : ''}`}>
		<div
			class="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/10"
		>
			<div class="text-center space-y-6">
				<div class="flex items-center justify-center gap-2 text-neutral-400">
					<FolderOpen class="w-6 h-6 text-red-400" />
					<span class="text-xl font-semibold">Ready for New Challenges</span>
				</div>

				<p class="text-lg text-neutral-300 leading-relaxed max-w-3xl mx-auto">
					With a solid foundation in software development and leadership, I'm always excited to take
					on new challenges and contribute to innovative projects. Let's build something amazing
					together!
				</p>

				<div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
					<a
						href="/contact"
						class="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
					>
						<Briefcase class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
						Let's Work Together
					</a>

					<a
						href="/blog"
						class="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-800/50 hover:bg-neutral-700/70 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-neutral-700 hover:border-neutral-600 backdrop-blur-sm"
					>
						<FolderOpen class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
						Read My Blog
					</a>
				</div>
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

	.delay-350 {
		animation-delay: 0.35s;
	}

	.delay-500 {
		animation-delay: 0.5s;
	}

	.delay-650 {
		animation-delay: 0.65s;
	}

	.delay-700 {
		animation-delay: 0.7s;
	}

	.delay-800 {
		animation-delay: 0.8s;
	}

	.delay-850 {
		animation-delay: 0.85s;
	}
</style>
