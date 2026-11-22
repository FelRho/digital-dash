<script lang="ts">
	import GearIndicator from '#lib/components/GearIndicator.svelte';
	import Gauge from '#lib/components/SpeedGauge.svelte';
	import TvisIndicator from '#lib/components/TvisIndicator.svelte';
	import { gearDown, gearUp, type Gear } from '#lib/gear.ts';

	let rpm: number = $state(0);
	let enableTVIS: boolean = $state(true);
	let currentGear: Gear = $state('N');
	let classicMode = $state(false);
	const steps = 10;

	function rpmUp() {
		rpm += steps;
	}

	function rpmDown() {
		rpm -= steps;
	}

	function changeTVIS() {
		enableTVIS = !enableTVIS;
	}
</script>

<p>RPM: {rpm}</p>
<svg width="1500" height="500" class="border-2 border-amber-500">
	<Gauge value={rpm} x={250} y={250} />
	<TvisIndicator enabled={enableTVIS} x={700} y={250} />
	<GearIndicator x={1000} y={50} gear={currentGear} classic={classicMode} />
	<!--Boostgauge, Sparc indicator, Coolant Temp x2, RPM, GPS-Speed, RPM-slider -->
</svg>

<div class="flex justify-between gap-3">
	<div class="flex gap-3">
		<p>Classic Mode:</p>
		<button onclick={() => (classicMode = !classicMode)}>Switch {classicMode}</button>
	</div>
	<div class="flex gap-5">
		<p>KM/H:</p>
		<button onclick={rpmUp}>Up</button>
		<button onclick={rpmDown}>Down</button>
	</div>
	<div class="flex gap-3">
		<p>TVIS:</p>
		<button onclick={changeTVIS}>Switch {enableTVIS}</button>
	</div>
	<div class="flex gap-5">
		<p>Gear:</p>
		<button onclick={() => (currentGear = gearUp(currentGear))}>Up</button>
		<button onclick={() => (currentGear = gearDown(currentGear))}>Down</button>
	</div>
</div>
