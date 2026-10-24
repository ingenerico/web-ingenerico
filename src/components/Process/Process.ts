export interface ProcessComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderProcess(): ProcessComponent {
	const root: HTMLElement | null = document.querySelector("#proceso");
	if (root === null) {
		throw new Error("Missing #proceso mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
