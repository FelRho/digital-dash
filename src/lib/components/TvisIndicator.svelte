<script lang="ts">
	import BooleanIndicator from './BooleanIndicator.svelte';
import LineAirParticle from './LineAirParticle.svelte';

	let { enabled, x, y }: { enabled: boolean; x: number; y: number } = $props();

	const r = 200;
	const runner_r = 60;
	const valve_axis_d = 15;
	const particleCount = 1;

	function startAnim(node) {
		node.beginElement();
	}
</script>

<circle cx={x} cy={y} {r} fill="white" stroke="black" />

<BooleanIndicator x={x-20} y={y - 150} active={enabled} text="TVIS"/>

<circle cx={x - runner_r} cy={y} r={runner_r} fill="white" stroke="black" class="stroke-3" />
<circle cx={x + runner_r} cy={y} r={runner_r} fill="white" stroke="black" class="stroke-3" />

{#each Array.from({ length: (enabled? particleCount*2 : particleCount) }) as _, index (index)}
	<!-- 
		<AirParticle x={x + runner_r} {y} centerOffset={runner_r / 2} outsideOffset={150} />
-->
	<LineAirParticle x={x + runner_r} {y} radius={runner_r / 2} />
{/each}

{#if !enabled}
	{#each Array.from({ length: particleCount }) as _, index (index)}
		<!--
		<AirParticle x={x - runner_r} {y} centerOffset={runner_r / 2} outsideOffset={150} />
	-->
		<LineAirParticle x={x - runner_r} {y} radius={runner_r / 2} />
	{/each}
{/if}

<rect
	width={runner_r * 4 + 40}
	height={valve_axis_d}
	x={x - (runner_r * 2 + 20)}
	y={y - valve_axis_d / 2}
	rx="10"
	fill="black"
/>

{#key enabled}
	{#if enabled}
		<ellipse cx={x - runner_r} cy={y} rx={runner_r} ry={runner_r} fill="gray">
			<animate
				use:startAnim
				begin="indefinite"
				attributeName="ry"
				dur="1s"
				from={runner_r / 3}
				to={runner_r}
				fill="freeze"
			/>
		</ellipse>
	{:else}
		<ellipse cx={x - runner_r} cy={y} rx={runner_r} ry={runner_r / 3} fill="gray">
			<animate
				use:startAnim
				begin="indefinite"
				attributeName="ry"
				dur="1s"
				from={runner_r}
				to={runner_r / 3}
				fill="freeze"
			/>
		</ellipse>
	{/if}
{/key}
