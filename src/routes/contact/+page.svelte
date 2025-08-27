<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_CONFIG } from '$lib/constants';
</script>

<SEO
	title="Contact - {SITE_CONFIG.author}"
	description="Get in touch with {SITE_CONFIG.author} for software development projects or collaborations"
	canonical="{SITE_CONFIG.url}/contact"
/>

<PageContainer>
	<Title>How to Contact Me</Title>
	<Paragraph>
		You can contact me by sending me a message on my <a
			class="text-red-500 hover:text-red-400 transition-colors"
			href="https://www.linkedin.com/in/alexander-chwojewski/"
			target="_blank"
			rel="noopener noreferrer">LinkedIn</a
		>
		or writing me an email at
		<a class="text-red-500 hover:text-red-400 transition-colors" href="mailto:{SITE_CONFIG.email}"
			>{SITE_CONFIG.email}</a
		>
	</Paragraph>
</PageContainer>
