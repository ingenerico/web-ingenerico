export interface FaqSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderFaq(): FaqSection {
	const root: HTMLElement | null = document.querySelector("#preguntas");
	if (root === null) {
		throw new Error("Missing #preguntas mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
