# CASES

## QUÉ HACE

Cuatro trabajos recientes con problema, solución y resultado medible.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Tarjetas estáticas en `index.html`. La imagen es decorativa en CSS para no depender de archivos pendientes.

## CÓMO FUNCIONA

Maquetado estático sin comportamiento.

## REGLAS DE NEGOCIO

| Regla     | Detalle                            |
| --------- | ---------------------------------- |
| Casos     | Cuatro, con las tres filas siempre |
| Resultado | Siempre con cifra destacada        |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                  | Rol                            |
| --------------------- | ------------------------------ |
| `index.html`          | Tarjetas estáticas             |
| `src/sections/Cases/` | Estilos y módulo de la sección |

## TESTS

Estático se verifica en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-secciones-frontend)
