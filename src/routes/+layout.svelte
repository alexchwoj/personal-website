<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="relative h-screen overflow-x-hidden">
	<Navbar></Navbar>
	<slot />
</div>
