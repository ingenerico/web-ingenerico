const ICON_PATHS: Record<string, string[]> = {
	"arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
};

export type IconName = keyof typeof ICON_PATHS;

export function createIcon(name: IconName): SVGSVGElement {
	const svg: SVGSVGElement = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"svg",
	);
	svg.setAttribute("viewBox", "0 0 24 24");
	svg.setAttribute("fill", "none");
	svg.setAttribute("stroke", "currentColor");
	svg.setAttribute("stroke-width", "2");
	svg.setAttribute("stroke-linecap", "round");
	svg.setAttribute("stroke-linejoin", "round");
	svg.setAttribute("aria-hidden", "true");
	const paths: string[] | undefined = ICON_PATHS[name];
	if (paths === undefined) {
		throw new RangeError(`Unknown icon: ${name}`);
	}
	for (const d of paths) {
		const path: SVGPathElement = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"path",
		);
		path.setAttribute("d", d);
		svg.appendChild(path);
	}
	return svg;
}
