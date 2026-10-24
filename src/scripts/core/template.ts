export function cloneTemplate(templateId: string): HTMLElement {
	const template: HTMLTemplateElement | null = document.querySelector(
		`#${templateId}`,
	);
	if (template === null) {
		throw new Error(`Missing template #${templateId}`);
	}
	const node: Node = template.content.cloneNode(true);
	const element: HTMLElement | null = (node as DocumentFragment).querySelector(
		"*",
	);
	if (element === null) {
		throw new Error(`Empty template #${templateId}`);
	}
	return element;
}
