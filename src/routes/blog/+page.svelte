<script lang="ts">
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_CONFIG } from '$lib/constants';
</script>

<SEO
	title="Blog - {SITE_CONFIG.author}"
	description="Read {SITE_CONFIG.author}'s blog posts about software development, technology, and programming insights"
	canonical="{SITE_CONFIG.url}/blog"
/>

<PageContainer>
	<div class="text-center">
		<h1 class="text-white font-bold mb-4 text-xl">Blog</h1>
		<p class="text-yellow-500 text-lg">⚠️ Under construction</p>
		<p class="text-neutral-400 mt-4">
			Stay tuned for upcoming articles about software development, cybersecurity, and technology
			insights.
		</p>
	</div>
</PageContainer>
