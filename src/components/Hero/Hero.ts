import { TICKER_ITEMS } from "../../data/site.ts";

export interface HeroComponent {
	readonly root: HTMLElement;
	destroy(): void;
}

const CENTER_X = 200;
const CENTER_Y = 200;
const MAX_X = 22;
const MAX_Y = 14;
const FOLLOW_DISTANCE = 340;
const IDLE_DELAY = 3000;
const WANDER_X = 12;
const WANDER_Y = 8;
const EASE = 0.14;
const STOP_THRESHOLD = 0.3;

function buildTicker(allowMotion: boolean): void {
	const track = document.querySelector(".ticker-track");
	const ticker = track?.closest(".ticker") ?? null;
	if (track === null || ticker === null) {
		return;
	}
	const spans = TICKER_ITEMS.map((text) => {
		const span = document.createElement("span");
		span.textContent = text;
		return span;
	});
	track.append(...spans);
	if (allowMotion) {
		track.append(...spans.map((span) => span.cloneNode(true)));
		ticker.classList.add("is-looping");
	}
}

export function renderHero(): HeroComponent {
	const root: HTMLElement | null = document.querySelector("#inicio");
	if (root === null) {
		throw new Error("Missing #inicio mount point");
	}
	const pupil: SVGCircleElement | null = root.querySelector("#pupila");
	const controller = new AbortController();
	let frame: number | null = null;
	let targetX = CENTER_X;
	let targetY = CENTER_Y;
	let currentX = CENTER_X;
	let currentY = CENTER_Y;
	let lastInput = 0;
	let idleTimer: number | null = null;

	const step = (): void => {
		if (performance.now() - lastInput > IDLE_DELAY) {
			const time = performance.now() / 1000;
			targetX = CENTER_X + Math.cos(time * 0.5) * WANDER_X;
			targetY = CENTER_Y + Math.sin(time * 0.7) * WANDER_Y;
		}
		currentX += (targetX - currentX) * EASE;
		currentY += (targetY - currentY) * EASE;
		pupil?.setAttribute("cx", String(currentX));
		pupil?.setAttribute("cy", String(currentY));
		const wandering = performance.now() - lastInput > IDLE_DELAY;
		if (
			wandering ||
			Math.abs(targetX - currentX) > STOP_THRESHOLD ||
			Math.abs(targetY - currentY) > STOP_THRESHOLD
		) {
			frame = requestAnimationFrame(step);
		} else {
			frame = null;
		}
	};

	const schedule = (): void => {
		if (frame === null) {
			frame = requestAnimationFrame(step);
		}
	};

	const reduceMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;
	const svg = pupil?.ownerSVGElement ?? null;
	if (pupil !== null && svg !== null && !reduceMotion) {
		const kick = (): void => {
			if (idleTimer !== null) {
				window.clearTimeout(idleTimer);
			}
			idleTimer = window.setTimeout(schedule, IDLE_DELAY);
		};
		window.addEventListener(
			"pointermove",
			(event) => {
				const rect = svg.getBoundingClientRect();
				const dx = event.clientX - (rect.left + rect.width / 2);
				const dy = event.clientY - (rect.top + rect.height / 2);
				const angle = Math.atan2(dy, dx);
				const distance = Math.min(1, Math.hypot(dx, dy) / FOLLOW_DISTANCE);
				targetX = CENTER_X + Math.cos(angle) * MAX_X * distance;
				targetY = CENTER_Y + Math.sin(angle) * MAX_Y * distance;
				lastInput = performance.now();
				kick();
				schedule();
			},
			{ signal: controller.signal },
		);
		kick();
	}

	buildTicker(!reduceMotion);

	return {
		root,
		destroy(): void {
			controller.abort();
			if (idleTimer !== null) {
				window.clearTimeout(idleTimer);
				idleTimer = null;
			}
			if (frame !== null) {
				cancelAnimationFrame(frame);
				frame = null;
			}
		},
	};
}
