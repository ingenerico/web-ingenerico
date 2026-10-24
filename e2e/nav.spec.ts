import { expect, test } from "@playwright/test";

test("menú hamburguesa en móvil", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await page.goto("/");
	const button = page.getByRole("button", { name: "Menú" });
	const nav = page.getByRole("navigation", { name: "Principal" });
	await expect(button).toBeVisible();
	await expect(nav).toBeHidden();
	await expect(button).toHaveAttribute("aria-expanded", "false");
	await button.click();
	await expect(button).toHaveAttribute("aria-expanded", "true");
	await expect(nav).toBeVisible();
	await page.keyboard.press("Escape");
	await expect(button).toHaveAttribute("aria-expanded", "false");
	await expect(nav).toBeHidden();
	await expect(button).toBeFocused();
});

test("tocar un enlace cierra el menú", async ({ page }) => {
	await page.setViewportSize({ width: 375, height: 667 });
	await page.goto("/");
	const button = page.getByRole("button", { name: "Menú" });
	await button.click();
	await page
		.getByRole("navigation", { name: "Principal" })
		.getByRole("link", {
			name: "Servicios",
		})
		.click();
	await expect(button).toHaveAttribute("aria-expanded", "false");
});

test("navegación visible en escritorio", async ({ page }) => {
	await page.setViewportSize({ width: 1280, height: 800 });
	await page.goto("/");
	await expect(page.getByRole("button", { name: "Menú" })).toBeHidden();
	await expect(
		page.getByRole("navigation", { name: "Principal" }),
	).toBeVisible();
});
