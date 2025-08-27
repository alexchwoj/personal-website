<script lang="ts">
	export let href: string;
	export let src: string;
	export let alt: string;
</script>

<a
	{href}
	target="_blank"
	rel="noopener noreferrer"
	class="w-12 h-12 bg-white text-black rounded-full hover:ring-2 ring-offset-4 hover:ring-red-500 p-2 hover:text-white transition-all duration-500"
>
	<img {src} {alt} />
</a>
