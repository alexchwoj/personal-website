<script lang="ts">
	export let title: string;
	export let description: string;
	export let canonical: string = 'https://alexander.chwojewski.com';
	export let ogImage: string = '/og-image.png';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={ogImage} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:url" content={canonical} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
