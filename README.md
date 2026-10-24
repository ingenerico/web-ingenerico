# INGENERICO WEB

Sitio estático del estudio: servicios, proceso, casos, preguntas y contacto por WhatsApp.

## FUNCIONALIDADES

| Sección   | Contenido                                               |
| --------- | ------------------------------------------------------- |
| Hero      | Titular, descripción y dos llamados a la acción         |
| Servicios | Índice por servicio con ficha, planes y enlace WhatsApp |
| Proceso   | Pasos de trabajo en cuatro etapas                       |
| Casos     | Trabajos recientes con problema, solución y resultado   |
| Preguntas | Respuestas directas antes de decidir                    |
| Cierre    | Banda de contacto y pie con datos del estudio           |

## ESTRUCTURA

```text
ingenerico/
├── index.html
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── main.ts
│   ├── styles/
│   ├── scripts/
│   └── sections/
├── tests/
├── e2e/
├── docs/
├── AGENTS.md
├── STATE.md
└── README.md
```

Detalle completo en `AGENTS.md` y `docs/`.

## DESARROLLO LOCAL

| Paso      | Comando                    |
| --------- | -------------------------- |
| Instalar  | `pnpm install`             |
| Servidor  | `pnpm dev`                 |
| Verificar | `pnpm check` + `pnpm test` |
| Construir | `pnpm build`               |

## PUBLICACIÓN

Se publica `dist/` con solo archivos estáticos.

## ENLACES

- Reglas: `AGENTS.md`
- Estado y siguiente tarea: `STATE.md`
- Detalle por tema: `docs/`
