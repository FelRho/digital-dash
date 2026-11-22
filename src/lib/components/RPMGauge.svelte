<script lang="ts">
	let { rpm }: { rpm: number } = $props();
</script>


<circle cx="250" cy="250" r="200" fill="white" stroke="black" />

{#each Array.from({ length: (maxSpeed + multiplier) / multiplier}) as _, index (index)}
	<g transform="rotate({index * (dialUsage / (maxSpeed / multiplier))} {250} {250})" style="will-change: transform;">
		{#if index % 2 === 0}
			<line
				x1={75}
				y1={250}
				x2={125}
				y2={250}
				stroke={index % 10 === 0 ? 'red' : 'black'}
				class="stroke-1"
			/>
			<text x={50} y={250} stroke={index % 10 === 0 ? 'red' : 'black'}>{index * multiplier}</text>
		{:else}
			<line x1={100} y1={250} x2={125} y2={250} stroke="black" class="stroke-1" />
		{/if}
	</g>
{/each}

<circle cx="250" cy="250" r="15" fill="orange"/>
<!-- Needle Group rotated around (cx, cy) -->
<g transform="rotate({value * (dialUsage / (maxSpeed / multiplier)) / multiplier} {250} {250})" style="will-change: transform;">
	<!-- Tapered Needle Polygon: base at center, tip at (cy - radius) -->
	<line x1={90} y1={250} x2={250} y2={250} stroke="orange" class="stroke-3" />
</g>
