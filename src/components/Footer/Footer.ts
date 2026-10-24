export interface FooterComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderFooter(): FooterComponent {
	const root: HTMLElement | null = document.querySelector("footer");
	if (root === null) {
		throw new Error("Missing footer mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
