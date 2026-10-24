# STRUCTURE

## QUÉ HACE

Base mínima del sitio: Vite + TypeScript + Biome con build en verde y estructura de carpetas fija.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Vite genera `dist/` sin servidor de aplicación. Biome es la única herramienta de lint y formato.

## CÓMO FUNCIONA

`index.html` compone las secciones con elementos `<include src="..."></include>` que el build incrusta desde cada plantilla. `src/main.ts` solo cablea. Los estilos entran por `styles.css`, que importa tokens y el CSS de cada sección.

## REGLAS DE NEGOCIO

Hero con contenido real en su plantilla. Las secciones restantes se migraron al mismo modelo.

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces externos en esta base. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta              | Rol                                  |
| ----------------- | ------------------------------------ |
| `index.html`      | Entrada y contenido estático         |
| `src/main.ts`     | Cableado inicial                     |
| `src/styles/`     | Tokens y estilos globales            |
| `src/components/` | Estilos y comportamiento por sección |
| `src/core/`       | Helpers compartidos                  |
| `src/data/`       | Datos tipados del sitio              |
| `public/`         | Archivos estáticos                   |

## TESTS

| Comando                   | Qué cubre                    |
| ------------------------- | ---------------------------- |
| `pnpm exec biome check .` | Lint y formato               |
| `pnpm exec tsc --noEmit`  | Tipado estricto              |
| `node --test tests/`      | Unitarios de helpers y datos |
| `pnpm exec vite build`    | Salida en `dist/`            |

## ENLACES INTERNOS RELACIONADOS

- [§9](../AGENTS.md#9-estructura-del-proyecto)
- [§10.3](../AGENTS.md#103-ci)
