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
├── .github/
├── index.html
├── public/
├── src/
├── tests/
├── e2e/
├── docs/
├── AGENTS.md
├── STATE.md
├── README.md
├── biome.json
├── playwright.config.ts
├── pnpm-workspace.yaml
└── package.json
```

Detalle completo en `AGENTS.md` y `docs/`.

## DESARROLLO LOCAL

| Paso      | Comando                                |
| --------- | -------------------------------------- |
| Instalar  | `pnpm install`                         |
| Servidor  | `pnpm dev`                             |
| Verificar | `pnpm check`, `pnpm test` y `pnpm e2e` |
| Construir | `pnpm build`                           |

## PUBLICACIÓN

Se publica `dist/` con solo archivos estáticos.

La reversión es republicar el despliegue anterior desde el panel del hosting.

## ENLACES

- Reglas: `AGENTS.md`
- Estado y siguiente tarea: `STATE.md`
- Detalle por tema: `docs/`
