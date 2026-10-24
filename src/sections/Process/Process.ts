export interface ProcessSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderProcess(): ProcessSection {
	const root: HTMLElement | null = document.querySelector("#proceso");
	if (root === null) {
		throw new Error("Missing #proceso mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
