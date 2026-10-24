import { expect, test } from "@playwright/test";

test("metadatos básicos y Open Graph", async ({ page }) => {
	await page.goto("/");
	await expect(page).toHaveTitle(
		"Ingenerico — Web, software, animación e IA para empresas",
	);
	const description = page.locator('meta[name="description"]');
	await expect(description).toHaveAttribute("content", /.+precios.+/i);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		"href",
		"https://ingenerico.com/",
	);
	await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
		"content",
		"website",
	);
	await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
		"content",
		"https://ingenerico.com/",
	);
	await expect(page.locator('link[rel="icon"]')).toHaveAttribute(
		"href",
		"/favicon.svg",
	);
});

test("logo con dimensiones explícitas", async ({ page }) => {
	await page.goto("/");
	const logo = page.getByRole("link", { name: "Ingenerico" }).locator("img");
	await expect(logo).toHaveAttribute("alt", "Ingenerico");
	await expect(logo).toHaveAttribute("width", "143");
	await expect(logo).toHaveAttribute("height", "34");
});
