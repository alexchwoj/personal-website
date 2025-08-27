<script lang="ts">
	import { T, useTask } from '@threlte/core';
	import { Grid, interactivity, useGltf } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	interactivity();

	const cameraPosition = spring([10, 10, 10], {
		stiffness: 0.02,
		damping: 0.3
	});

	function handleMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		const mouseX = (clientX / window.innerWidth) * 2 - 1;
		const mouseY = (clientY / window.innerHeight) * 2 - 1;

		cameraPosition.set([10 + mouseX, 10 + mouseY, 10]);
	}

	let rotation = 0;
	useTask((delta) => {
		rotation += delta * 0.5;
	});
</script>

<svelte:window on:mousemove={handleMouseMove} />

<T.PerspectiveCamera
	makeDefault
	position={$cameraPosition}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.AmbientLight color="#ffffff" intensity={0.2} />
<T.DirectionalLight
	color="#ffffff"
	intensity={0.5}
	position={[10, 10, 0]}
	shadow.camera.top={8}
	castShadow
/>

<T.PointLight intensity={50} position={[4, 1, 0]} color="#FF3200" />
<T.PointLight intensity={50} position={[-4, 1, 4]} color="#8700FF" />
<T.PointLight intensity={50} position={[0, 6, 0]} color="#00FFAA" />

<Grid
	position.y={-2}
	gridSize={[40, 40]}
	cellSize={1}
	cellThickness={0.5}
	cellColor="#6f6f6f"
	sectionSize={5}
	sectionThickness={1}
	sectionColor="#6f6f6f"
	fadeDistance={32}
	fadeStrength={1}
/>

{#await useGltf('/models/psx_retro_computer.glb') then psx_retro_computer}
	<T is={psx_retro_computer.scene} position={[0, 0, 0]} scale={4} rotation.y={rotation} />
{/await}
