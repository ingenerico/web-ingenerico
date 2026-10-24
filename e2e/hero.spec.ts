import { expect, test } from "@playwright/test";

test("la pupila sigue el cursor", async ({ page }) => {
	await page.goto("/");
	const pupil = page.locator("#pupila");
	await expect(pupil).toHaveAttribute("cx", "200");
	await page.mouse.move(1100, 300);
	await expect
		.poll(async () => Number(await pupil.getAttribute("cx")))
		.toBeGreaterThan(200);
});

test("respeta el movimiento reducido", async ({ browser }) => {
	const context = await browser.newContext({ reducedMotion: "reduce" });
	const page = await context.newPage();
	await page.goto("/");
	await page.mouse.move(1100, 300);
	await page.waitForTimeout(300);
	await expect(page.locator("#pupila")).toHaveAttribute("cx", "200");
	await context.close();
});
