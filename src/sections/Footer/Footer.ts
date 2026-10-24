export interface FooterSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderFooter(): FooterSection {
	const root: HTMLElement | null = document.querySelector("footer");
	if (root === null) {
		throw new Error("Missing footer mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
