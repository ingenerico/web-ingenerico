export function buildWhatsAppUrl(phone: string, message: string): string {
	const digits: string = phone.replace(/\D/g, "");
	if (digits.length === 0) {
		throw new RangeError("Phone must contain at least one digit");
	}
	return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function buildDiagnosisMessage(
	serviceName: string,
	planName: string,
	priceLabel: string | undefined,
): string {
	const base: string = `Hola Ingenerico, quiero un diagnóstico de ${serviceName}: ${planName}`;
	if (priceLabel === undefined) {
		return `${base}.`;
	}
	return `${base} (${priceLabel}).`;
}
