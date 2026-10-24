import { expect, test } from "@playwright/test";

test("la pupila sigue el cursor", async ({ page }) => {
	await page.goto("/");
	const pupil = page.locator("#pupila");
	await page.waitForTimeout(1000);
	const before = Number(await pupil.getAttribute("cx"));
	await page.mouse.move(1200, 350);
	await expect
		.poll(async () => Number(await pupil.getAttribute("cx")), {
			timeout: 15000,
		})
		.toBeGreaterThan(before + 5);
});

test("la pupila deriva sola sin interacción", async ({ page }) => {
	await page.goto("/");
	const pupil = page.locator("#pupila");
	await page.waitForTimeout(4200);
	const first = await pupil.getAttribute("cx");
	await page.waitForTimeout(1000);
	const second = await pupil.getAttribute("cx");
	expect(first).not.toBe(second);
});

test("la cinta se arma desde datos", async ({ page }) => {
	await page.goto("/");
	await expect(page.locator(".ticker")).toHaveClass(/is-looping/);
	await expect(page.locator(".ticker-track > span")).toHaveCount(14);
});

test("respeta el movimiento reducido", async ({ browser }) => {
	const context = await browser.newContext({ reducedMotion: "reduce" });
	const page = await context.newPage();
	await page.goto("/");
	await page.mouse.move(1200, 350);
	await page.waitForTimeout(300);
	await expect(page.locator("#pupila")).toHaveAttribute("cx", "200");
	await expect(page.locator(".ticker")).not.toHaveClass(/is-looping/);
	await expect(page.locator(".ticker-track > span")).toHaveCount(7);
	await context.close();
});
