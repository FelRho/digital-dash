<script lang="ts">
	import { getRandomDec, getRandomInt, getRandomIntInclusive } from '#lib/random.ts';

	let { x, y, radius }: { x: number; y: number; radius: number } = $props();

	const path = getRandomIntInclusive(100, 150);
	const length = getRandomIntInclusive(10, 20);
	const offset = getRandomIntInclusive(-radius, radius);
	const rotation = getRandomIntInclusive(0, 360);
	const timing = getRandomInt(2);
	const duration = getRandomDec(0.5, 2);

	const x1 = x + offset;
	const y2 = y - path;
</script>

<g transform="rotate({rotation} {x1} {y})" style="will-change: transform;">
	<line {x1} y1={y} x2={x1} {y2} class="particle">
		<animate
			attributeName="y1"
			begin={timing}
			dur={duration}
			from={y2}
			to={y - length}
			fill="indefinite"
			repeatCount="indefinite"
		/>
		<animate
			attributeName="y2"
			begin={timing}
			dur={duration}
			from={y2 + length}
			to={y}
			fill="indefinite"
			repeatCount="indefinite"
		/>
	</line>
</g>

<style>
	.particle {
		stroke: rgba(32, 109, 232, 0.5);
		stroke-width: 3;
	}
</style>
