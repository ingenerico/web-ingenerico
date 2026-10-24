export interface ServicesSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderServices(): ServicesSection {
	const root: HTMLElement | null = document.querySelector("#servicios");
	if (root === null) {
		throw new Error("Missing #servicios mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
