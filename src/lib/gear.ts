export type Gear = 'R' | 'N' | 1 | 2 | 3 | 4 | 5;

const gearSequence: Gear[] = ['R', 'N', 1, 2, 3, 4, 5];

export function gearUp(currentGear: Gear): Gear {
	if (currentGear === 5) return currentGear;

	const index = gearSequence.indexOf(currentGear);

	return gearSequence[index + 1];
}

export function gearDown(currentGear: Gear): Gear {
	if (currentGear === 'R') return currentGear;

	const index = gearSequence.indexOf(currentGear);

	return gearSequence[index - 1];
}

export const GLYPHS = {
	N: [
		[1, 0, 0, 0, 1],
		[1, 1, 0, 0, 1],
		[1, 1, 0, 0, 1],
		[1, 0, 1, 0, 1],
		[1, 0, 0, 1, 1],
		[1, 0, 0, 1, 1],
		[1, 0, 0, 0, 1]
	],
	R: [
		[1, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[1, 1, 1, 1, 0],
		[1, 0, 1, 0, 0],
		[1, 0, 0, 1, 0],
		[1, 0, 0, 0, 1]
	],
	'1': [
		[0, 0, 1, 0, 0],
		[0, 1, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 1, 1, 1, 0]
	],
	'2': [
		[0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 1],
		[0, 0, 1, 1, 0],
		[0, 1, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 1, 1]
	],
	'3': [
		[0, 1, 1, 1, 0],
		[1, 0, 0, 0, 1],
		[0, 0, 0, 0, 1],
		[0, 1, 1, 1, 0],
		[0, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 1, 1, 1, 0]
	],
	'4': [
		[0, 0, 0, 1, 0],
		[0, 0, 1, 1, 0],
		[0, 1, 0, 1, 0],
		[1, 0, 0, 1, 0],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 1, 0],
		[0, 0, 0, 1, 0]
	],
	'5': [
		[1, 1, 1, 1, 1],
		[1, 0, 0, 0, 0],
		[1, 0, 0, 0, 0],
		[1, 1, 1, 1, 0],
		[0, 0, 0, 0, 1],
		[1, 0, 0, 0, 1],
		[0, 1, 1, 1, 0]
	]
};
