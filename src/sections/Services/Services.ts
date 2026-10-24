import { formatCOP } from "../../scripts/core/format.ts";
import {
	buildDiagnosisMessage,
	buildWhatsAppUrl,
} from "../../scripts/core/whatsapp.ts";
import {
	SERVICES,
	type Service,
	WHATSAPP_NUMBER,
} from "../../scripts/data/site.ts";

export interface ServicesSection {
	readonly root: HTMLElement;
	destroy(): void;
}

function priceLabel(service: Service, planIndex: number): string | undefined {
	const plan = service.plans[planIndex];
	if (plan === undefined || plan.price === undefined) {
		return undefined;
	}
	return `desde ${formatCOP(plan.price)}`;
}

function contactUrl(service: Service, planIndex: number): string {
	const plan = service.plans[planIndex];
	if (plan === undefined) {
		throw new RangeError(`Missing plan ${planIndex} in ${service.id}`);
	}
	return buildWhatsAppUrl(
		WHATSAPP_NUMBER,
		buildDiagnosisMessage(
			service.name,
			plan.name,
			priceLabel(service, planIndex),
		),
	);
}

function buildInfo(service: Service): HTMLElement {
	const info = document.createElement("div");
	info.className = "info";

	const title = document.createElement("h3");
	title.textContent = service.name;

	const para = document.createElement("p");
	para.className = "para";
	para.textContent = service.audience;

	const list = document.createElement("ul");
	list.className = "ent";
	for (const item of service.deliverables) {
		const li = document.createElement("li");
		li.textContent = item;
		list.appendChild(li);
	}

	const timeline = document.createElement("dl");
	timeline.className = "plazo";
	const term = document.createElement("dt");
	term.textContent = "Plazo";
	const detail = document.createElement("dd");
	detail.textContent = service.timeline;
	timeline.append(term, detail);

	info.append(title, para, list, timeline);
	return info;
}

function buildSpec(service: Service, selectedPlan: number): HTMLElement {
	const spec = document.createElement("div");
	spec.className = "spec";

	const caption = document.createElement("h4");
	caption.textContent = "Ficha técnica · Cotización";

	const title = document.createElement("p");
	title.className = "title";
	title.textContent = "Elige por dónde empezar";

	const link = document.createElement("a");
	link.className = "btn full";
	link.textContent = "Agendar por WhatsApp →";

	const note = document.createElement("p");
	note.className = "note";
	note.textContent = "Te escribimos con tu opción ya elegida. Sin compromiso.";

	const updateLink = (planIndex: number): void => {
		link.href = contactUrl(service, planIndex);
	};

	service.plans.forEach((plan, planIndex) => {
		const label = document.createElement("label");
		label.className = "opt";

		const radio = document.createElement("input");
		radio.type = "radio";
		radio.name = `plan-${service.id}`;
		radio.value = String(planIndex);
		radio.checked = planIndex === selectedPlan;
		radio.addEventListener("change", () => {
			updateLink(planIndex);
		});

		const box = document.createElement("span");
		const name = document.createElement("b");
		name.textContent = plan.name;
		const price = document.createElement("em");
		const labelText = priceLabel(service, planIndex);
		price.textContent = labelText ?? "A cotizar";
		name.appendChild(price);
		const description = document.createElement("small");
		description.textContent = plan.description;
		box.append(name, description);
		label.append(radio, box);
		spec.appendChild(label);
	});

	updateLink(selectedPlan);
	spec.append(caption, title, link, note);
	return spec;
}

export function renderServices(): ServicesSection {
	const root: HTMLElement | null = document.querySelector("#servicios");
	if (root === null) {
		throw new Error("Missing #servicios mount point");
	}
	const index: HTMLElement | null = root.querySelector(".index");
	const panel: HTMLElement | null = root.querySelector(".panel");
	if (index === null || panel === null) {
		throw new Error("Missing services index or panel");
	}
	const tabs: HTMLElement[] = [...index.querySelectorAll<HTMLElement>(".tab")];
	const controller = new AbortController();
	const { signal } = controller;
	let current = 0;

	const select = (serviceIndex: number, focusTab: boolean): void => {
		const service = SERVICES[serviceIndex];
		if (service === undefined) {
			return;
		}
		current = serviceIndex;
		tabs.forEach((tab, tabIndex) => {
			const active = tabIndex === serviceIndex;
			tab.setAttribute("aria-selected", String(active));
			tab.tabIndex = active ? 0 : -1;
			if (active && focusTab) {
				tab.focus();
			}
		});
		panel.replaceChildren(buildInfo(service), buildSpec(service, 0));
	};

	index.addEventListener(
		"click",
		(event) => {
			const tab = (event.target as HTMLElement).closest(".tab");
			if (tab === null) {
				return;
			}
			select(tabs.indexOf(tab as HTMLElement), false);
		},
		{ signal },
	);

	index.addEventListener(
		"keydown",
		(event) => {
			if (
				event.key !== "ArrowRight" &&
				event.key !== "ArrowLeft" &&
				event.key !== "Home" &&
				event.key !== "End"
			) {
				return;
			}
			event.preventDefault();
			if (event.key === "Home") {
				select(0, true);
				return;
			}
			if (event.key === "End") {
				select(SERVICES.length - 1, true);
				return;
			}
			const step = event.key === "ArrowRight" ? 1 : -1;
			select((current + step + SERVICES.length) % SERVICES.length, true);
		},
		{ signal },
	);

	select(0, false);

	return {
		root,
		destroy(): void {
			controller.abort();
		},
	};
}
