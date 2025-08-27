<script lang="ts">
	import { onMount } from 'svelte';
	import RotatingObject from '$lib/components/RotatingObject.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { Canvas } from '@threlte/core';
	import { fly } from 'svelte/transition';
	import { SOCIAL_LINKS, SITE_CONFIG } from '$lib/constants';
	import { ChevronDown, Code, Sparkles } from 'lucide-svelte';

	import github from '$lib/icons/github.svg';
	import linkedin from '$lib/icons/linkedin.svg';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<SEO
	title="{SITE_CONFIG.title} | Portfolio"
	description={SITE_CONFIG.description}
	canonical={SITE_CONFIG.url}
/>

<div class="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
	<div class="absolute inset-0 -z-10">
		<div
			class="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-red-900/10 z-10"
		></div>
		<Canvas>
			<RotatingObject />
		</Canvas>
	</div>

	<div
		class={`flex flex-col justify-center items-center relative z-20 select-none ${
			mounted ? 'animate-in slide-in-from-bottom duration-700' : ''
		}`}
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<div class="text-center space-y-8 px-4 max-w-4xl mx-auto">
			<div
				class={`inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium ${
					mounted ? 'animate-in slide-in-from-top duration-500 delay-200' : ''
				}`}
			>
				<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
				Available for new opportunities
			</div>

			<div class="space-y-4">
				<h1
					class="text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]"
				>
					<span
						class={`block drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] ${
							mounted ? 'animate-in slide-in-from-left duration-500 delay-300' : ''
						}`}
					>
						Hello! 👋
					</span>
					<span
						class={`block drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)] ${
							mounted ? 'animate-in slide-in-from-right duration-500 delay-500' : ''
						}`}
					>
						I'm <span
							class="bg-gradient-to-r from-white via-red-400 to-red-500 bg-clip-text text-transparent font-extrabold drop-shadow-[0_2px_16px_rgba(0,0,0,0.7)]"
							>Alexander</span
						>
					</span>
				</h1>

				<div
					class={`space-y-2 ${
						mounted ? 'animate-in slide-in-from-bottom duration-500 delay-700' : ''
					}`}
				>
					<p
						class="text-xl sm:text-2xl lg:text-3xl text-neutral-300 font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]"
					>
						A passionate <span class="text-red-400 font-semibold">Software Developer</span>
					</p>
					<p class="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
						Building digital experiences with modern technologies and creative solutions
					</p>
				</div>
			</div>

			<div
				class={`flex items-center justify-center space-x-6 ${
					mounted ? 'animate-in slide-in-from-bottom duration-500 delay-1100' : ''
				}`}
			>
				<SocialLink href="https://github.com/alexchwoj" src={github} alt="GitHub" />
				<SocialLink
					href="https://www.linkedin.com/in/alexander-chwojewski/"
					src={linkedin}
					alt="LinkedIn"
				/>
			</div>

			<div
				class={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${
					mounted ? 'animate-in slide-in-from-bottom duration-500 delay-1300' : ''
				}`}
			>
				<a
					href="/experience"
					class="group inline-flex items-center gap-3 px-8 py-4 bg-red-500 hover:bg-red-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
				>
					<Code class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
					View My Work
				</a>

				<a
					href="/contact"
					class="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-800/50 hover:bg-neutral-700/70 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 border border-neutral-700 hover:border-neutral-600 backdrop-blur-sm"
				>
					<Sparkles class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
					Let's Connect
				</a>
			</div>
		</div>
	</div>
</div>

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

	.slide-in-from-top {
		transform: translateY(-2rem);
		opacity: 0;
		animation: animate-in-top 0.6s ease-out forwards;
	}

	.slide-in-from-left {
		transform: translateX(-2rem);
		opacity: 0;
		animation: animate-in-left 0.6s ease-out forwards;
	}

	.slide-in-from-right {
		transform: translateX(2rem);
		opacity: 0;
		animation: animate-in-right 0.6s ease-out forwards;
	}

	@keyframes animate-in-top {
		from {
			opacity: 0;
			transform: translateY(-2rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes animate-in-left {
		from {
			opacity: 0;
			transform: translateX(-2rem);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	@keyframes animate-in-right {
		from {
			opacity: 0;
			transform: translateX(2rem);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
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

	.delay-500 {
		animation-delay: 0.5s;
	}

	.delay-700 {
		animation-delay: 0.7s;
	}

	.delay-900 {
		animation-delay: 0.9s;
	}

	.delay-1100 {
		animation-delay: 1.1s;
	}

	.delay-1300 {
		animation-delay: 1.3s;
	}

	.delay-1500 {
		animation-delay: 1.5s;
	}
</style>
