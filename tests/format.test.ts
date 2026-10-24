import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { formatCOP } from "../src/core/format.ts";

describe("formatCOP", () => {
	it("formats a landing price without decimals", () => {
		const result: string = formatCOP(950000);
		assert.ok(result.startsWith("$"));
		assert.ok(result.includes("950.000"));
		assert.ok(!result.includes(","));
		assert.ok(!result.includes("\u00a0")); // sin espacios duros
	});

	it("formats zero", () => {
		const result: string = formatCOP(0);
		assert.ok(result.includes("0"));
	});

	it("rejects negative amounts", () => {
		assert.throws(() => formatCOP(-1), RangeError);
	});

	it("rejects non-finite amounts", () => {
		assert.throws(() => formatCOP(Number.NaN), RangeError);
	});
});
