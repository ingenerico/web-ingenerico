export interface CtaComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderCta(): CtaComponent {
	const root: HTMLElement | null = document.querySelector("#contacto");
	if (root === null) {
		throw new Error("Missing #contacto mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
