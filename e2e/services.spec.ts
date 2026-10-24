import { expect, test } from "@playwright/test";

test("los tabs cambian el panel y marcan la selección", async ({ page }) => {
	await page.goto("/");
	const tabs = page.getByRole("tab");
	await expect(tabs).toHaveCount(4);
	await tabs.nth(1).click();
	await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
	await expect(tabs.nth(0)).toHaveAttribute("aria-selected", "false");
	await expect(
		page.getByRole("tabpanel").getByRole("heading", { level: 3 }),
	).toHaveText("Animación de personajes");
});

test("el enlace WhatsApp lleva el mensaje codificado", async ({ page }) => {
	await page.goto("/");
	const link = page
		.getByRole("tabpanel")
		.getByRole("link", { name: /^Agendar/ });
	const href = await link.getAttribute("href");
	expect(href).toMatch(/^https:\/\/wa\.me\/573173062346\?text=.+/);
	expect(decodeURIComponent(href ?? "")).toContain(
		"Desarrollo web: Landing page (desde $ 950.000).",
	);
});

test("pestañas apiladas en móvil sin scroll lateral", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await page.goto("/");
	const overflow = await page
		.locator(".index")
		.evaluate((element) => element.scrollWidth - element.clientWidth);
	expect(overflow).toBeLessThanOrEqual(0);
	await expect(page.getByRole("tab").nth(3)).toBeVisible();
});

test("las flechas del teclado cambian de tab", async ({ page }) => {
	await page.goto("/");
	const tabs = page.getByRole("tab");
	await tabs.nth(0).focus();
	await page.keyboard.press("ArrowRight");
	await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
	await expect(
		page.getByRole("tabpanel").getByRole("heading", { level: 3 }),
	).toHaveText("Animación de personajes");
});
