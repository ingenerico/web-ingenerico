export interface HeroSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderHero(): HeroSection {
	const root: HTMLElement | null = document.querySelector("#inicio");
	if (root === null) {
		throw new Error("Missing #inicio mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
