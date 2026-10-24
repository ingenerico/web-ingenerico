import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
	buildDiagnosisMessage,
	buildWhatsAppUrl,
} from "../src/scripts/core/whatsapp.ts";

describe("buildWhatsAppUrl", () => {
	it("builds an encoded wa.me link", () => {
		const url: string = buildWhatsAppUrl("573175819723", "Hola, quiero info");
		assert.equal(
			url,
			"https://wa.me/573175819723?text=Hola%2C%20quiero%20info",
		);
	});

	it("strips non-digit characters from the phone", () => {
		const url: string = buildWhatsAppUrl("+57 317 581 9723", "Hola");
		assert.ok(url.startsWith("https://wa.me/573175819723?text="));
	});

	it("rejects a phone without digits", () => {
		assert.throws(() => buildWhatsAppUrl("abc", "Hola"), RangeError);
	});
});

describe("buildDiagnosisMessage", () => {
	it("includes the price label when present", () => {
		const message: string = buildDiagnosisMessage(
			"Desarrollo web",
			"Landing page",
			"desde $ 950.000",
		);
		assert.equal(
			message,
			"Hola Ingenerico, quiero un diagnóstico de Desarrollo web: Landing page (desde $ 950.000).",
		);
	});

	it("omits the price label when undefined", () => {
		const message: string = buildDiagnosisMessage(
			"IA en tu empresa",
			"Piloto",
			undefined,
		);
		assert.equal(
			message,
			"Hola Ingenerico, quiero un diagnóstico de IA en tu empresa: Piloto.",
		);
	});
});
