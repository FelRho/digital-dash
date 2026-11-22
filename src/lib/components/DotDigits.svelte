<script lang="ts">
	import { GLYPHS, type Gear } from '#lib/gear.ts';

	//dots 7 x 5
	let { x, y, gear }: { x: number; y: number; gear: Gear } = $props();

	const offset = 50;
	let activeMatrix: number[][] = $derived(GLYPHS[gear] || GLYPHS.N);

</script>

<defs>
	<filter id="led-glow" x="-50%" y="-50%" width="200%" height="200%">
		<feGaussianBlur stdDeviation="2.5" result="blur" />
		<feMerge>
			<feMergeNode in="blur" />
			<feMergeNode in="SourceGraphic" />
		</feMerge>
	</filter>
</defs>

{#each activeMatrix as row, rowIdx (rowIdx)}
	{#each row as cell, colIdx (colIdx)}
		{@const isOn = cell === 1}
		<circle
			cx={x + offset * colIdx}
			cy={y + offset  * rowIdx}
			r={20}
			fill={isOn ? 'red' : 'black'}
			filter={isOn ? 'url(#led-glow)' : undefined}
		/>
	{/each}
{/each}
