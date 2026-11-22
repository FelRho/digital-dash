<script lang="ts">
	import type { Gear } from '#lib/gear.ts';
	import DotDigits from './DotDigits.svelte';

	let { x, y, gear, classic }: { x: number; y: number; gear: Gear, classic: boolean } = $props();

	const height = 400;
	const aspectRatio = 1.2;
	const width = height / aspectRatio;
</script>

<rect {x} {y} {width} {height} fill="black" stroke="black" rx={10} />

{#if classic}
    <DotDigits x={x+ 65} y={y+50} gear={gear}/>
{:else}
	<text
		x={x + width / 2}
		y={y + height / 2}
		dy="0.355em"
		text-anchor="middle"
		fill="red"
		font-size="450"
	>
		{gear}
	</text>
{/if}
