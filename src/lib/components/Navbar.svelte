<script lang="ts">
	import TextScramble from '$lib/components/TextScramble.svelte';
</script>

<nav class="bg-transparent mt-4 py-4 z-50">
	<div
		class="container max-w-screen-xl mx-auto flex flex-col items-center md:flex-row md:justify-between select-none"
	>
		<div class="text-2xl font-bold text-white mb-4 md:mb-0 text-center md:text-left">
			<a href="/"><TextScramble text="Alexander Chwojewski" /></a>
		</div>

		<div class="flex space-x-4">
			<a
				href="/about"
				class="p-2 font-medium text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300"
				><TextScramble text="About" /></a
			>
			<a
				href="/experience"
				class="p-2 font-medium text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300"
				><TextScramble text="Experience" /></a
			>
			<a
				href="/blog"
				class="p-2 font-medium text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300"
				><TextScramble text="Blog" /></a
			>
			<a
				href="/contact"
				class="p-2 font-medium text-white border-b border-b-red-500 hover:text-black hover:bg-red-500 bg-po transition-all ease-out duration-300"
				><TextScramble text="Contact" /></a
			>
		</div>
	</div>
</nav>
