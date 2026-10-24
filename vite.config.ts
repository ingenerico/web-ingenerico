import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, type Plugin } from "vite";

const INCLUDE_PATTERN = /<include\s+src="([^"]+)"\s*(?:\/>|>\s*<\/include>)/g;

function inlinePartials(html: string, root: string): string {
	return html.replace(INCLUDE_PATTERN, (_match, relativePath: string) => {
		return readFileSync(resolve(root, relativePath), "utf-8");
	});
}

function sectionPartials(): Plugin {
	return {
		name: "section-partials",
		transformIndexHtml(html) {
			return inlinePartials(html, process.cwd());
		},
		handleHotUpdate({ file, server }) {
			if (file.endsWith(".html") && file.includes("/sections/")) {
				server.ws.send({ type: "full-reload" });
				return [];
			}
		},
	};
}

export default defineConfig({
	plugins: [sectionPartials()],
	build: {
		outDir: "dist",
	},
});
