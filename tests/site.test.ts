import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SERVICES, TICKER_ITEMS, WHATSAPP_NUMBER } from "../src/data/site.ts";

describe("site data", () => {
	it("lists ticker items without duplicates", () => {
		assert.ok(TICKER_ITEMS.length > 0);
		for (const item of TICKER_ITEMS) {
			assert.ok(item.length > 0);
		}
		assert.equal(new Set(TICKER_ITEMS).size, TICKER_ITEMS.length);
	});

	it("exposes a digits-only WhatsApp number", () => {
		assert.match(WHATSAPP_NUMBER, /^\d+$/);
	});

	it("lists the four services with unique ids", () => {
		const ids: string[] = SERVICES.map((service) => service.id);
		assert.equal(new Set(ids).size, ids.length);
		assert.deepEqual(ids, ["web", "animation", "software", "ai"]);
	});

	it("gives every service at least one plan", () => {
		for (const service of SERVICES) {
			assert.ok(service.plans.length > 0);
			assert.ok(service.deliverables.length > 0);
		}
	});

	it("keeps defined prices at zero or above", () => {
		for (const service of SERVICES) {
			for (const plan of service.plans) {
				if (plan.price !== undefined) {
					assert.ok(plan.price >= 0);
				}
			}
		}
	});
});
