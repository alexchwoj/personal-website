<script lang="ts">
    import Cursor from "$lib/components/Cursor.svelte";
</script>

<Cursor></Cursor>

<nav class="bg-transparent py-4">
	<div class="container max-w-screen-xl mx-auto flex justify-between items-center">
		<div class="text-2xl font-bold text-white">Alexander Chwojewski</div>

		<div class="space-x-4">
			<a
				href="/"
				class="text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300 cursor-none"
				>Projects</a
			>
			<a
				href="/"
				class="text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300 cursor-none"
				>Projects</a
			>
			<a
				href="/"
				class="text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300 cursor-none"
				>About</a
			>
			<a
				href="/"
				class="text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300 cursor-none"
				>Blog</a
			>
		</div>
	</div>
</nav>

<div class="h-screen flex flex-col justify-center items-center">
	<h1 class="text-white text-4xl font-bold mb-8 text-center">
		Sup! 👋<br />
		I'm Alexander a Software Developer
	</h1>

	<div class="flex items-center space-x-4">
		<div class="w-12 h-12 bg-blue-500 rounded-full"></div>
		<div class="w-12 h-12 bg-red-500 rounded-full"></div>
		<div class="w-12 h-12 bg-green-500 rounded-full"></div>
		<div class="w-12 h-12 bg-yellow-500 rounded-full"></div>
	</div>
</div>
