export interface FaqComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderFaq(): FaqComponent {
	const root: HTMLElement | null = document.querySelector("#preguntas");
	if (root === null) {
		throw new Error("Missing #preguntas mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
