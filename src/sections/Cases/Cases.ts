export interface CasesSection {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderCases(): CasesSection {
	const root: HTMLElement | null = document.querySelector("#casos");
	if (root === null) {
		throw new Error("Missing #casos mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
