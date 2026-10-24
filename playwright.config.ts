import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "e2e",
	use: {
		baseURL: "http://localhost:4173",
	},
	webServer: {
		command: "pnpm exec vite preview --port 4173",
		url: "http://localhost:4173",
		reuseExistingServer: true,
	},
});
