<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import og_image from '$lib/images/og-image.png';
</script>

<svelte:head>
  <meta name="description" content="Explore Alexander Chwojewski's software development portfolio" />
  <meta name="keywords" content="Alexander Chwojewski portfolio, software developer portfolio, web development solutions, innovative software developer, custom software solutions, backend and frontend developer, full-stack web development, web app development, modern software architecture, chwojewski, las breñas, chaco" />
  <link rel="canonical" href="https://alexander.chwojewski.com" />
  <meta name="robots" content="index, follow" />

  <meta property="og:title" content="Alexander Chwojewski - Software Developer | Portfolio" />
  <meta property="og:description" content="Explore Alexander Chwojewski's software development portfolio." />
  <meta property="og:url" content="https://alexander.chwojewski.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={og_image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Alexander Chwojewski - Software Developer | Portfolio" />
  <meta name="twitter:description" content="Explore Alexander Chwojewski's software development portfolio." />
  <meta name="twitter:url" content="https://alexander.chwojewski.com" />
  <meta name="twitter:image" content={og_image} />
</svelte:head>

<div class="relative h-screen overflow-x-hidden">
	<Navbar></Navbar>
	<slot />
</div>
