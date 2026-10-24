# STYLES

## QUÉ HACE

Tokens visuales y base global. Sin estilos de sección todavía.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Un solo lugar para color, tipografía y base. Las secciones solo anidan bajo su clase raíz.

## CÓMO FUNCIONA

`tokens.css` importa las fuentes empaquetadas y expone variables. `styles.css` fija la base mobile first.

## REGLAS DE NEGOCIO

| Regla         | Detalle                                                           |
| ------------- | ----------------------------------------------------------------- |
| Unidades      | `px` para tamaños; `%`, `fr` y viewport solo donde tengan sentido |
| Media queries | Sintaxis moderna `@media (width > 768px)`                         |
| Movimiento    | `prefers-reduced-motion` desactiva el desplazamiento suave        |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces aquí. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                    | Rol                                |
| ----------------------- | ---------------------------------- |
| `src/styles/tokens.css` | Paleta, tipografías y ancho máximo |
| `src/styles/styles.css` | Base global y foco visible         |

## TESTS

Sin tests unitarios para CSS. Se verifica con `pnpm exec biome check .` y revisión visual en Fase 3.

## ENLACES INTERNOS RELACIONADOS

- [§6](../AGENTS.md#6-stack)
- [§7.1](../AGENTS.md#71-general)
- [§11](../AGENTS.md#11-seo-rendimiento-accesibilidad-y-compatibilidad)
