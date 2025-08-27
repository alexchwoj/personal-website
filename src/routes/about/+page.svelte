<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import TechnologyCard from '$lib/components/TechnologyCard.svelte';
	import LanguageCard from '$lib/components/LanguageCard.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { TECHNOLOGIES, LANGUAGES, SITE_CONFIG } from '$lib/constants';
</script>

<SEO
	title="About Me - {SITE_CONFIG.author}"
	description="Learn about {SITE_CONFIG.author}'s background, skills, and experience as a software developer from Argentina"
	canonical="{SITE_CONFIG.url}/about"
/>

<PageContainer>
	<Title>About Me</Title>
	<Paragraph>
		I'm a software developer from Argentina. Currently working as a Tech Leader, with a passion for
		game development and cybersecurity in my free time.
	</Paragraph>

	<hr class="mb-4 border-neutral-800" />

	<Title>Technologies</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
		{#each TECHNOLOGIES as techCategory}
			<TechnologyCard category={techCategory.category} items={techCategory.items} />
		{/each}
	</div>

	<Title>Languages</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
		{#each LANGUAGES as language}
			<LanguageCard
				language={language.language}
				level={language.level}
				certificationUrl={language.certificationUrl}
			/>
		{/each}
	</div>
</PageContainer>
