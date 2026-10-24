import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("sin violaciones críticas de accesibilidad", async ({ page }) => {
	await page.goto("/");
	await page.waitForTimeout(1200);
	const results = await new AxeBuilder({ page })
		.withTags(["wcag2a", "wcag2aa"])
		.analyze();
	const critical = results.violations.filter((violation) =>
		["critical", "serious"].includes(violation.impact ?? ""),
	);
	expect(critical).toEqual([]);
});

test("sin scroll horizontal en móvil y escritorio", async ({ page }) => {
	for (const viewport of [
		{ width: 375, height: 667 },
		{ width: 1280, height: 800 },
	]) {
		await page.setViewportSize(viewport);
		await page.goto("/");
		const overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - window.innerWidth,
		);
		expect(overflow).toBeLessThanOrEqual(0);
	}
});

test("preguntas operables por teclado", async ({ page }) => {
	await page.goto("/");
	const second = page.getByRole("group").nth(1);
	const summary = second.locator("summary");
	await summary.focus();
	await expect(second).not.toHaveAttribute("open", "");
	await page.keyboard.press("Enter");
	await expect(second).toHaveAttribute("open", "");
	await page.keyboard.press("Enter");
	await expect(second).not.toHaveAttribute("open", "");
});

test("salto directo al contenido", async ({ page }) => {
	await page.goto("/");
	await page.keyboard.press("Tab");
	await expect(page.locator(".skip")).toBeFocused();
	await page.keyboard.press("Enter");
	await expect(page.locator("#contenido")).toBeFocused();
});
