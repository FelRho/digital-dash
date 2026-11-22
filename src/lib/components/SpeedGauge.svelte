<script lang="ts">
	let { value, x, y }: { value: number; x: number; y: number } = $props();

	const maxSpeed = 300;
	const multiplier = 10;
	const dialUsage = 90;
</script>

<circle cx={x} cy={y} r="200" fill="white" stroke="black" />

{#each Array.from({ length: (maxSpeed + multiplier) / multiplier }) as _, index (index)}
	<g
		transform="rotate({index * (dialUsage / (maxSpeed / multiplier))} {x} {y})"
		style="will-change: transform;"
	>
		{#if index % 2 === 0}
			<line x1={x - 175} y1={y} x2={x - 125} y2={y} stroke="black" class="stroke-1" />
			<text x={x - 200} {y} stroke="black">{index * multiplier}</text>
		{:else}
			<line x1={x - 150} y1={y} x2={x - 125} y2={y} stroke="black" class="stroke-1" />
		{/if}
	</g>
{/each}

<circle cx={x} cy={y} r="15" fill="orange" />
<!-- Needle Group rotated around (cx, cy) -->
<g
	transform="rotate({(value * (dialUsage / (maxSpeed / multiplier))) / multiplier} {x} {y})"
	style="will-change: transform;"
>
	<!-- Tapered Needle Polygon: base at center, tip at (cy - radius) -->
	<line x1={x - 160} y1={y} x2={x} y2={y} stroke="orange" class="stroke-3" />
</g>

<text x={x - ((""+value).length + 5) * 5 / 2} y={y+50}>{value} KM/H</text>