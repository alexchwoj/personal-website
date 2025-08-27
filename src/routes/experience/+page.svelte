<script lang="ts">
	import Title from '$lib/components/Title.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import PageContainer from '$lib/components/PageContainer.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import {
		PROFESSIONAL_EXPERIENCES,
		PERSONAL_PROJECTS,
		EDUCATION,
		SITE_CONFIG
	} from '$lib/constants';
</script>

<SEO
	title="Experience - {SITE_CONFIG.author}"
	description="Explore {SITE_CONFIG.author}'s professional experience, personal projects, and education in software development"
	canonical="{SITE_CONFIG.url}/experience"
/>

<PageContainer>
	<Title>Professional Experience</Title>
	{#each PROFESSIONAL_EXPERIENCES as experience}
		<ExperienceCard
			company={experience.company}
			place={experience.place}
			url={experience.url}
			role={experience.role}
			date={experience.date}
			descriptions={experience.descriptions}
		/>
	{/each}

	<hr class="mb-4 border-neutral-800" />

	<Title>Personal Projects</Title>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
		{#each PERSONAL_PROJECTS as project}
			<ProjectCard
				title={project.title}
				description={project.description}
				url={project.url}
				technologies={project.technologies}
			/>
		{/each}
	</div>

	<hr class="mb-4 border-neutral-800" />

	<Title>Education</Title>
	{#each EDUCATION as career}
		<ExperienceCard
			company={career.school}
			place={career.place}
			role={career.role}
			date={career.date}
		/>
	{/each}
</PageContainer>
