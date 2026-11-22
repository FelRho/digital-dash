	export function getRandomInt(max: number) {
		return Math.random() * max;
	}

	export function getRandomDec(min: number, max: number)
	{
		return min + Math.random() * max;
	}

	export function getRandomRunnerTarget(centerOffset: number) {
		const minCeiled = Math.ceil(-centerOffset / 2);
		const maxFloored = Math.floor(centerOffset / 2);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	}

	export function getRandomIntInclusive(min: number, max: number) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	}