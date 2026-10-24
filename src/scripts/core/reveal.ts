const REVEAL_SELECTOR = ".section, .cta-band, footer";

export function initReveal(): void {
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
		return;
	}
	const targets: HTMLElement[] = [
		...document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
	];
	if (targets.length === 0 || !("IntersectionObserver" in window)) {
		return;
	}
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-revealed");
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
	);
	for (const target of targets) {
		observer.observe(target);
	}
}
