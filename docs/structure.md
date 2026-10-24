# STRUCTURE

## QUÉ HACE

Base mínima del sitio: Vite + TypeScript + Biome con build en verde y estructura de carpetas fija.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Vite genera `dist/` sin servidor de aplicación. Biome es la única herramienta de lint y formato.

## CÓMO FUNCIONA

`index.html` monta `#app` y carga `src/main.ts`. Los estilos globales entran por `tokens.css` y `styles.css`.

## REGLAS DE NEGOCIO

Sin contenido real todavía. La referencia visual vive en `ingenerico_demo.html` hasta la Fase 1.

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces externos en esta base. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                | Rol                               |
| ------------------- | --------------------------------- |
| `index.html`        | Entrada y punto de montaje `#app` |
| `src/main.ts`       | Cableado inicial                  |
| `src/styles/`       | Tokens y estilos globales         |
| `src/scripts/core/` | Helpers compartidos               |
| `src/scripts/data/` | Datos tipados del sitio           |
| `public/`           | Archivos estáticos                |

## TESTS

| Comando                   | Qué cubre                            |
| ------------------------- | ------------------------------------ |
| `pnpm exec biome check .` | Lint y formato                       |
| `pnpm exec tsc --noEmit`  | Tipado estricto                      |
| `node --test tests/`      | Unitarios (`tests/` vacío por ahora) |
| `pnpm exec vite build`    | Salida en `dist/`                    |

## ENLACES INTERNOS RELACIONADOS

- [§9](../AGENTS.md#9-estructura-del-proyecto)
- [§10.3](../AGENTS.md#103-ci)
