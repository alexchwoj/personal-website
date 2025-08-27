<script lang="ts">
	import RotatingObject from '$lib/components/RotatingObject.svelte';
	import SocialLink from '$lib/components/SocialLink.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { Canvas } from '@threlte/core';
	import { fly } from 'svelte/transition';
	import { SOCIAL_LINKS, SITE_CONFIG } from '$lib/constants';

	import github from '$lib/icons/github.svg';
	import linkedin from '$lib/icons/linkedin.svg';
</script>

<SEO
	title="{SITE_CONFIG.title} | Portfolio"
	description={SITE_CONFIG.description}
	canonical={SITE_CONFIG.url}
/>

<div class="h-fit">
	<div class="absolute inset-0 -z-10">
		<Canvas>
			<RotatingObject />
		</Canvas>
	</div>

	<div
		class="flex flex-col justify-center items-center relative z-10 mt-[50%] sm:mt-[20%] select-none"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<h1 class="text-white text-2xl sm:text-4xl font-bold mb-8 text-center text-shadow">
			Hello!<br />
			I'm <span class="border-b-2 border-b-red-500">Alexander</span>, a
			<span class="border-b-2 border-b-red-500">Software Developer</span>
		</h1>

		<div class="flex items-center space-x-4">
			<SocialLink href="https://github.com/alexchwoj" src={github} alt="GitHub" />

			<SocialLink
				href="https://www.linkedin.com/in/alexander-chwojewski/"
				src={linkedin}
				alt="LinkedIn"
			/>
		</div>
	</div>
</div>
