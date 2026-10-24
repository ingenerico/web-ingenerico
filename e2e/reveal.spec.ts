import { expect, test } from "@playwright/test";

test("las secciones aparecen al entrar en vista", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator("#servicios")).toHaveClass(/is-revealed/);
	await page.locator("footer").scrollIntoViewIfNeeded();
	await expect(page.locator("footer")).toHaveClass(/is-revealed/);
});

test("sin movimiento no se anima la aparición", async ({ browser }) => {
	const context = await browser.newContext({ reducedMotion: "reduce" });
	const page = await context.newPage();
	await page.goto("/");
	await page.locator("footer").scrollIntoViewIfNeeded();
	await page.waitForTimeout(300);
	await expect(page.locator("footer")).not.toHaveClass(/is-revealed/);
	await context.close();
});
