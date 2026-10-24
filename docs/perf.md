# PERF

## QUÉ HACE

Presupuesto de peso y carga de recursos.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Fuentes y logo son lo más pesado. Subconjunto latino y SVG optimizado bajan el total a menos de la mitad.

## CÓMO FUNCIONA

Fuentes empaquetadas con `font-display: swap` en CSS. JS en módulo con `defer` implícito. Sin bloqueos del primer pintado.

## REGLAS DE NEGOCIO

| Regla       | Detalle                                                            |
| ----------- | ------------------------------------------------------------------ |
| Fuentes     | Solo pesos usados, solo subconjunto latino                         |
| SVG         | Optimizado, con título accesible                                   |
| Imágenes    | Dimensiones explícitas, `loading="lazy"` fuera del primer viewport |
| Presupuesto | `dist/` total bajo 500 KB                                          |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                     | Rol                    |
| ------------------------ | ---------------------- |
| `src/styles/tokens.css`  | Importación de fuentes |
| `public/images/logo.svg` | Logo optimizado        |
| `public/favicon.svg`     | Icono optimizado       |

## TESTS

Dimensiones del logo en `e2e/seo.spec.ts`. Peso verificado en `dist/` tras el build.

## ENLACES INTERNOS RELACIONADOS

- [§11](../AGENTS.md#11-seo-rendimiento-accesibilidad-y-compatibilidad)
