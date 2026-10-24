import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { SERVICES, WHATSAPP_NUMBER } from "../src/scripts/data/site.ts";

describe("site data", () => {
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
