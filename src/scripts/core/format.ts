export function formatCOP(value: number): string {
	if (!Number.isFinite(value) || value < 0) {
		throw new RangeError("Amount must be a finite number >= 0");
	}
	return new Intl.NumberFormat("es-CO", {
		style: "currency",
		currency: "COP",
		maximumFractionDigits: 0,
	}).format(value);
}
