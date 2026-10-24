export function createIcon(name: string): SVGSVGElement {
	const svg: SVGSVGElement = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg",
	);
	svg.setAttribute("data-icon", name);
	svg.setAttribute("aria-hidden", "true");
	return svg;
}
