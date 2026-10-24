export interface CasesComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderCases(): CasesComponent {
	const root: HTMLElement | null = document.querySelector("#casos");
	if (root === null) {
		throw new Error("Missing #casos mount point");
	}
	return {
		root,
		destroy(): void {},
	};
}
