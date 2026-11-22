<script lang="ts">
	let { x, y, active, text }: { x: number; y: number; active: boolean; text: string } = $props();
</script>

<circle cx={x} cy={y-5} r={10} fill={active? "green" : "red"} stroke="black" class="stroke-2"/>
<text x={x + 15} {y}>{text} {active ? 'active' : 'inactive'}</text>
