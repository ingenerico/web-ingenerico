export interface TopbarComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

export function renderTopbar(): TopbarComponent {
	const root: HTMLElement | null = document.querySelector(".topbar");
	if (root === null) {
		throw new Error("Missing .topbar mount point");
	}
	const button: HTMLButtonElement | null = root.querySelector(".menu-button");
	const nav: HTMLElement | null = root.querySelector(".nav");
	if (button === null || nav === null) {
		throw new Error("Missing topbar menu parts");
	}
	const controller = new AbortController();
	const { signal } = controller;
	const links = [...nav.querySelectorAll<HTMLAnchorElement>("a")];

	const setOpen = (open: boolean, focusButton: boolean): void => {
		root.classList.toggle("is-open", open);
		button.setAttribute("aria-expanded", String(open));
		if (open) {
			links[0]?.focus();
		} else if (focusButton) {
			button.focus();
		}
	};

	button.addEventListener(
		"click",
		() => {
			setOpen(!root.classList.contains("is-open"), false);
		},
		{ signal },
	);

	root.addEventListener(
		"keydown",
		(event) => {
			if (event.key === "Escape" && root.classList.contains("is-open")) {
				setOpen(false, true);
			}
		},
		{ signal },
	);

	nav.addEventListener(
		"click",
		(event) => {
			if ((event.target as HTMLElement).closest("a") !== null) {
				setOpen(false, false);
			}
		},
		{ signal },
	);

	return {
		root,
		destroy(): void {
			controller.abort();
		},
	};
}
