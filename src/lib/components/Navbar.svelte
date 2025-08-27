<script lang="ts">
	import TextScramble from '$lib/components/TextScramble.svelte';
	import NavLink from '$lib/components/NavLink.svelte';
	import { NAVIGATION_LINKS, SITE_CONFIG } from '$lib/constants';
</script>

<nav class="bg-transparent mt-4 py-4 z-50">
	<div
		class="container max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between select-none"
	>
		<div class="text-2xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">
			<a href="/"><TextScramble text={SITE_CONFIG.author} /></a>
		</div>

		<div class="flex space-x-4">
			{#each NAVIGATION_LINKS as link}
				<NavLink href={link.href} text={link.text} />
			{/each}
		</div>
	</div>
</nav>
