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
	<div class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700' : ''}`}>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center border border-red-500/30"
				>
					<User class="w-6 h-6 text-red-400" />
				</div>
				<h1 class="text-3xl lg:text-4xl font-bold text-white flex items-center gap-3">
					<span class="w-1.5 h-10 bg-gradient-to-b from-red-400 to-red-500 rounded-full"></span>
					About Me
				</h1>
			</div>
			<p class="text-neutral-400 ml-16">Get to know more about my background and skills</p>
		</div>

		<div class="space-y-6 ml-16">
			<p class="text-lg lg:text-xl text-neutral-300 leading-relaxed">
				I'm a passionate <span class="font-semibold">software developer</span> from
				<span class="font-semibold">Argentina 🇦🇷</span>. Currently working as a
				<span class="font-semibold">Tech Leader</span>, I love creating innovative solutions and
				leading development teams.
			</p>

			<p class="text-lg text-neutral-300 leading-relaxed">
				In my free time, I dive deep into <span class="font-semibold">game development</span>
				and
				<span class="font-semibold">cybersecurity</span> - always exploring new technologies and pushing
				the boundaries of what's possible.
			</p>
		</div>
	</div>

	<div
		class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-200' : ''}`}
	>
		<div class="space-y-4 mt-8">
			<div class="flex items-center gap-4">
				<div
					class="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30"
				>
					<Code2 class="w-5 h-5 text-blue-400" />
				</div>
				<h2 class="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></span>
					Technologies
				</h2>
			</div>
			<p class="text-neutral-400 ml-14">Tools and frameworks I work with</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each TECHNOLOGIES as techCategory, index}
				<div
					class={`h-full ${
						mounted ? `animate-in slide-in-from-bottom duration-500 delay-${300 + index * 100}` : ''
					}`}
				>
					<TechnologyCard category={techCategory.category} items={techCategory.items} />
				</div>
			{/each}
		</div>
	</div>

	<div class="flex items-center justify-center my-16">
		<div
			class="h-px bg-gradient-to-r from-transparent via-green-500 to-transparent w-full max-w-md relative"
		>
			<div
				class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
			></div>
		</div>
	</div>

	<div
		class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-400' : ''}`}
	>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-10 h-10 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg flex items-center justify-center border border-green-500/30"
				>
					<Globe class="w-5 h-5 text-green-400" />
				</div>
				<h2 class="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-1 h-8 bg-gradient-to-b from-green-400 to-green-500 rounded-full"></span>
					Languages
				</h2>
			</div>
			<p class="text-neutral-400 ml-14">Languages I speak and my proficiency levels</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each LANGUAGES as language, index}
				<div
					class={`h-full ${
						mounted ? `animate-in slide-in-from-bottom duration-500 delay-${500 + index * 150}` : ''
					}`}
				>
					<LanguageCard
						language={language.language}
						level={language.level}
						certificationUrl={language.certificationUrl}
					/>
				</div>
			{/each}
		</div>
	</div>
</PageContainer>

<style>
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
