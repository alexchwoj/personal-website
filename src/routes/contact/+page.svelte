<script lang="ts">
	import { onMount } from 'svelte';
	import Title from '$lib/components/Title.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { SITE_CONFIG } from '$lib/constants';
	import { Mail, MessageCircle, Linkedin, Send, Coffee, Calendar } from 'lucide-svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function copyEmail() {
		navigator.clipboard.writeText(SITE_CONFIG.email);
		// You could add a toast notification here
	}
</script>

<SEO
	title="Contact - {SITE_CONFIG.author}"
	description="Get in touch with {SITE_CONFIG.author} for software development projects or collaborations"
	canonical="{SITE_CONFIG.url}/contact"
/>

<PageContainer>
	<div
		class={`space-y-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-200' : ''}`}
	>
		<div class="space-y-4">
			<div class="flex items-center gap-4">
				<div
					class="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center border border-blue-500/30"
				>
					<Send class="w-5 h-5 text-blue-400" />
				</div>
				<h2 class="text-2xl lg:text-3xl font-bold text-white flex items-center gap-3">
					<span class="w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-500 rounded-full"></span>
					Get In Touch
				</h2>
			</div>
			<p class="text-neutral-400 ml-14">Choose your preferred way to reach out</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div
				class={`group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 ${
					mounted ? 'animate-in slide-in-from-bottom duration-500 delay-300' : ''
				}`}
			>
				<div class="flex items-center gap-4 mb-4">
					<div
						class="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300"
					>
						<Linkedin class="w-6 h-6 text-blue-400" />
					</div>
					<div>
						<h3 class="text-xl font-semibold text-white">LinkedIn</h3>
						<p class="text-neutral-400 text-sm">Professional networking</p>
					</div>
				</div>

				<p class="text-neutral-300 mb-6 leading-relaxed">
					Connect with me on LinkedIn for professional opportunities, industry discussions, or to
					expand your network.
				</p>

				<a
					href="https://www.linkedin.com/in/alexander-chwojewski/"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 group"
				>
					<Linkedin class="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
					Connect on LinkedIn
				</a>
			</div>

			<div
				class={`group bg-gradient-to-br from-neutral-900/80 to-neutral-800/40 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 hover:-translate-y-1 ${
					mounted ? 'animate-in slide-in-from-bottom duration-500 delay-450' : ''
				}`}
			>
				<div class="flex items-center gap-4 mb-4">
					<div
						class="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center border border-red-500/30 group-hover:scale-110 transition-transform duration-300"
					>
						<Mail class="w-6 h-6 text-red-400" />
					</div>
					<div>
						<h3 class="text-xl font-semibold text-white">Email</h3>
						<p class="text-neutral-400 text-sm">Direct communication</p>
					</div>
				</div>

				<p class="text-neutral-300 mb-4 leading-relaxed">
					Send me an email for detailed project discussions, proposals, or any questions you might
					have.
				</p>

				<div class="space-y-3">
					<div
						class="flex items-center gap-2 text-neutral-400 bg-neutral-800/50 rounded-lg p-3 border border-neutral-700/50"
					>
						<Mail class="w-4 h-4 text-red-400" />
						<span class="font-mono text-sm">{SITE_CONFIG.email}</span>
						<button
							on:click={copyEmail}
							class="ml-auto text-xs text-red-400 hover:text-red-300 font-medium transition-colors duration-200"
						>
							Copy
						</button>
					</div>

					<a
						href="mailto:{SITE_CONFIG.email}"
						class="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-500 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 group"
					>
						<Send class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
						Send Email
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class={`mt-8 ${mounted ? 'animate-in slide-in-from-bottom duration-700 delay-600' : ''}`}>
		<div
			class="bg-gradient-to-br from-neutral-900/90 to-neutral-800/50 backdrop-blur-md border border-neutral-700/70 rounded-2xl p-8 lg:p-12 shadow-xl shadow-black/10"
		>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
				<div class="space-y-3">
					<div
						class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl flex items-center justify-center border border-green-500/30 mx-auto"
					>
						<MessageCircle class="w-6 h-6 text-green-400" />
					</div>
					<h3 class="text-lg font-semibold text-white">Quick Response</h3>
					<p class="text-neutral-400 text-sm leading-relaxed">
						I typically respond to messages within 24-48 hours during business days
					</p>
				</div>

				<div class="space-y-3">
					<div
						class="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30 mx-auto"
					>
						<Coffee class="w-6 h-6 text-blue-400" />
					</div>
					<h3 class="text-lg font-semibold text-white">Coffee Chats</h3>
					<p class="text-neutral-400 text-sm leading-relaxed">
						Always open to virtual coffee meetings to discuss ideas and opportunities
					</p>
				</div>

				<div class="space-y-3">
					<div
						class="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl flex items-center justify-center border border-purple-500/30 mx-auto"
					>
						<Calendar class="w-6 h-6 text-purple-400" />
					</div>
					<h3 class="text-lg font-semibold text-white">Flexible Schedule</h3>
					<p class="text-neutral-400 text-sm leading-relaxed">
						Based in Argentina (UTC-3) but comfortable with international time zones
					</p>
				</div>
			</div>

			<div class="mt-8 pt-8 border-t border-neutral-700/50 text-center">
				<p class="text-neutral-300 text-lg leading-relaxed max-w-2xl mx-auto">
					Looking forward to hearing from you! Let's discuss how we can work together to create
					something amazing.
				</p>
				<div class="flex items-center justify-center gap-2 mt-4">
					<div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
					<span class="text-green-400 font-medium">Currently available for new projects</span>
				</div>
			</div>
		</div>
	</div>
</PageContainer>

<style>
	@keyframes animate-in {
		from {
			opacity: 0;
			transform: translateY(2rem);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-in {
		animation: animate-in 0.6s ease-out;
	}

	.slide-in-from-bottom {
		transform: translateY(2rem);
		opacity: 0;
		animation: animate-in 0.6s ease-out forwards;
	}

	.duration-500 {
		animation-duration: 0.5s;
	}

	.duration-700 {
		animation-duration: 0.7s;
	}

	.delay-200 {
		animation-delay: 0.2s;
	}

	.delay-300 {
		animation-delay: 0.3s;
	}

	.delay-450 {
		animation-delay: 0.45s;
	}

	.delay-600 {
		animation-delay: 0.6s;
	}
</style>
