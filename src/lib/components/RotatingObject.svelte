<script>
	import { T, useTask } from '@threlte/core';
	import { Grid, interactivity, useGltf } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	import vertexShader from '$lib/shaders/vertex.glsl?raw';

	interactivity();
	const scale = spring(2);
	let rotation = 0;
	useTask((delta) => {
		rotation += delta;
	});
</script>

<!--<Grid cellColor="#808080" sectionSize={0} /> -->

<T.PerspectiveCamera
	makeDefault
	position={[10, 10, 10]}
	on:create={({ ref }) => {
		ref.lookAt(0, 1, 0);
	}}
/>

<T.AmbientLight color="#ffffff" intensity={0.2} />
<T.DirectionalLight
	color="#ffffff"
	intensity={.5}
	position={[10, 10, 0]}
	shadow.camera.top={8}
	castShadow
/>

<T.PointLight intensity={50} position={[4, 1, 0]} color="#FF3200" />
<T.PointLight intensity={50} position={[-4, 1, 4]} color="#8700FF" />
<T.PointLight intensity={50} position={[0, 6, 0]} color="#00FFAA" />

<!--<T.Mesh position={[0, 6, 0]}>
	<T.SphereGeometry args={[0.3, 64, 64]} />
	<T.MeshStandardMaterial color="#ffffff" />
</T.Mesh>-->

{#await useGltf('/models/angel_old_marble_version.glb') then angel_old_marble_version}
	<T
		is={angel_old_marble_version.scene}
		position={[0, -2, 0]}
		scale={1} 
		rotation.y={rotation}
		on:pointerenter={() => scale.set(2.5)}
		on:pointerleave={() => scale.set(2)}
	/>
{/await}
