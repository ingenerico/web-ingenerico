# HERO

## QUÉ HACE

Portada con titular, llamado a ver servicios y un ojo cuya pupila sigue el puntero o deriva sola sin interacción. La cinta inferior se arma desde datos y duplica sus elementos para el bucle.

## POR QUÉ SE IMPLEMENTÓ ASÍ

El seguimiento es mejora progresiva con `requestAnimationFrame`. Sin JS o con movimiento reducido, el ojo queda quieto.

## CÓMO FUNCIONA

`Hero.ts` escucha el puntero, calcula el objetivo desde el centro del SVG e interpola la posición. Todo se libera en `destroy()`.

## REGLAS DE NEGOCIO

| Regla      | Detalle                                  |
| ---------- | ---------------------------------------- |
| Movimiento | Solo si el sistema lo permite            |
| Limpieza   | Listener y cuadro pendientes se cancelan |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                   | Rol                                       |
| ---------------------- | ----------------------------------------- |
| `src/components/Hero/` | Maquetado, estilos y comportamiento       |
| `e2e/hero.spec.ts`     | Seguimiento, deriva y movimiento reducido |

## TESTS

Flujos en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
- [§10.2](../AGENTS.md#102-flujos-playwright)
