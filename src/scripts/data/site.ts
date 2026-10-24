export interface ServicePlan {
	name: string;
	price?: number;
	description: string;
}

export interface Service {
	id: string;
	name: string;
	audience: string;
	deliverables: string[];
	timeline: string;
	plans: ServicePlan[];
}

export const WHATSAPP_NUMBER = "573175819723";

export const SERVICES: Service[] = [
	{
		id: "web",
		name: "Desarrollo web",
		audience:
			"Para empresas y emprendimientos que necesitan vender o ser encontrados.",
		deliverables: [
			"Diseño hecho para tu marca",
			"Hosting, dominio, correo y certificado de seguridad",
			"Publicación en menos de una semana",
		],
		timeline: "Menos de una semana",
		plans: [
			{
				name: "Landing page",
				price: 950000,
				description: "Una página para promocionar un producto o servicio",
			},
			{
				name: "Web informativa",
				price: 1650000,
				description: "Presenta tu empresa y recibe contactos",
			},
			{
				name: "Tienda en línea",
				price: 2700000,
				description: "Vende y cobra desde la web",
			},
		],
	},
	{
		id: "animation",
		name: "Animación de personajes",
		audience:
			"Para marcas que quieren una mascota o explicar algo con personajes.",
		deliverables: [
			"Diseño del personaje",
			"Animación lista para web y redes",
			"Archivos fuente para que sigas usándola",
		],
		timeline: "Se define con el guion",
		plans: [
			{
				name: "Personaje animado",
				description: "Mascota o presentador de tu marca",
			},
			{
				name: "Video explicativo",
				description: "Tu producto o servicio contado con personajes",
			},
		],
	},
	{
		id: "software",
		name: "Software a la medida",
		audience:
			"Para empresas con procesos manuales, hojas de cálculo o sistemas viejos.",
		deliverables: [
			"Levantamiento de tu proceso actual",
			"Aplicaciones, paneles, reportes e integraciones",
			"Mantenimiento de software existente",
		],
		timeline: "Se define en el diagnóstico",
		plans: [
			{
				name: "Aplicación nueva",
				description: "Construida alrededor de tu proceso",
			},
			{
				name: "Actualizar o mantener",
				description: "Ordenamos y ponemos al día lo que ya tienes",
			},
		],
	},
	{
		id: "ai",
		name: "IA en tu empresa",
		audience:
			"Para equipos que quieren ahorrar tiempo sin cambiar todo su sistema.",
		deliverables: [
			"Diagnóstico de dónde sí sirve la IA",
			"Piloto pequeño con resultado medible",
			"Automatizaciones conectadas a tus herramientas",
		],
		timeline: "Se define en el diagnóstico",
		plans: [
			{
				name: "Diagnóstico de IA",
				description: "Dónde aplicarla y qué ahorro esperar",
			},
			{
				name: "Piloto",
				description: "Una automatización o asistente funcionando",
			},
		],
	},
];
