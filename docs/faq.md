# FAQ

## QUÉ HACE

Respuestas directas a las dudas frecuentes antes de decidir.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Elementos nativos `details` y `summary`: abren, cierran y se operan por teclado sin JS.

## CÓMO FUNCIONA

Maquetado estático en `index.html` sin comportamiento.

## REGLAS DE NEGOCIO

| Regla               | Detalle                          |
| ------------------- | -------------------------------- |
| Preguntas           | Tres, con la primera abierta     |
| Precios mencionados | Formato COP con espacio tras `$` |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                  | Rol                            |
| --------------------- | ------------------------------ |
| `index.html`          | Preguntas estáticas            |
| `src/components/Faq/` | Estilos y módulo de la sección |

## TESTS

Estático se verifica en Playwright, incluido el uso por teclado.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
- [§10.2](../AGENTS.md#102-flujos-playwright)
