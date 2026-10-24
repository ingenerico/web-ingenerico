# REVEAL

## QUÉ HACE

Las secciones animan su entrada al aparecer en vista.

## POR QUÉ SE IMPLEMENTÓ ASÍ

La clase solo se agrega desde JS al intersectar. Sin JS o con movimiento reducido, el contenido queda visible y quieto.

## CÓMO FUNCIONA

`initReveal` observa secciones, banda de cierre y pie con `IntersectionObserver`. Al entrar en vista agrega `is-revealed` y deja de observar.

## REGLAS DE NEGOCIO

| Regla               | Detalle                     |
| ------------------- | --------------------------- |
| Sin JS              | Todo visible, sin animación |
| Movimiento reducido | Sin animación ni clases     |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                         | Rol                             |
| ---------------------------- | ------------------------------- |
| `src/scripts/core/reveal.ts` | Observador de aparición         |
| `src/main.ts`                | Cableado único                  |
| `src/styles/styles.css`      | Animación de entrada            |
| `e2e/reveal.spec.ts`         | Aparición y movimiento reducido |

## TESTS

Flujos en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.1](../AGENTS.md#71-general)
- [§10.2](../AGENTS.md#102-flujos-playwright)
