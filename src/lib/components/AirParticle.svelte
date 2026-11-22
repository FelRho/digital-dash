<script lang="ts">
	let {
		x,
		y,
		centerOffset,
		outsideOffset
	}: { x: number; y: number; centerOffset: number; outsideOffset: number } = $props();

	const x1 = getRandomIntInclusive(x + outsideOffset, x - outsideOffset);
	const y1 = getRandomIntInclusive(y + outsideOffset, y - outsideOffset);
	const x2 = x + getRandomRunnerTarget();
	const y2 = y + getRandomRunnerTarget();
	const timing = getRandomInt(2)

	function getRandomInt(max: number) {
		return Math.random() * max;
	}

	function getRandomRunnerTarget() {
		const minCeiled = Math.ceil(-centerOffset / 2);
		const maxFloored = Math.floor(centerOffset / 2);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	}

	function getRandomIntInclusive(min: number, max: number) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	}
</script>

<line {x1} {y1} {x2} {y2} stroke="blue" class="stroke-3">
	<animate
		attributeName="x1"
		begin={timing}
		dur="2s"
		from={x1}
		to={x2}
		fill="indefinite"
		repeatCount="indefinite"
	/>
	<animate
		attributeName="y1"
		begin={timing}
		dur="2s"
		from={y1}
		to={y2}
		fill="indefinite"
		repeatCount="indefinite"
	/>

	<animate
		attributeName="x2"
		begin={timing}
		dur="2s"
		from={x1 - 20}
		to={x2}
		fill="indefinite"
		repeatCount="indefinite"
	/>

	<animate
		attributeName="y2"
		begin={timing}
		dur="2s"
		from={y1 - 20}
		to={y2}
		fill="indefinite"
		repeatCount="indefinite"
	/>
</line>
