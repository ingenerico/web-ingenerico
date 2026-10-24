# SECTIONS

## QUÉ HACE

Regla de autoría para cada sección visible del sitio.

## POR QUÉ SE IMPLEMENTÓ ASÍ

El contenido crítico debe leerse sin JS. Por eso el HTML estático vive en `index.html` y el TS solo mejora o conecta datos, nunca pinta el contenido principal.

## CÓMO FUNCIONA

Cada sección tiene carpeta propia con estilos y un módulo que implementa la interfaz contra el nodo ya existente. La plantilla `.html` clonada con `template.ts` se usa solo cuando la sección genera nodos desde datos en tiempo de ejecución.

## REGLAS DE NEGOCIO

| Regla                | Detalle                                                                                |
| -------------------- | -------------------------------------------------------------------------------------- |
| Fuente del contenido | `index.html` para todo lo estático                                                     |
| Estilos              | Solo bajo la clase raíz de la sección                                                  |
| Comportamiento       | El TS opera sobre el nodo existente y limpia en `destroy()`                            |
| Enlaces estáticos    | Los contactos fijos viven en `index.html`; los mensajes dinámicos se arman desde datos |

## SEGURIDAD ESPECÍFICA

Sin `innerHTML` ni strings de HTML. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                           | Rol                                  |
| ------------------------------ | ------------------------------------ |
| `index.html`                   | Composición y contenido estático     |
| `src/main.ts`                  | Solo cableado de secciones           |
| `src/sections/<Name>/`         | Estilos y comportamiento por sección |
| `src/scripts/core/template.ts` | Clonado de plantillas dinámicas      |

## TESTS

Estático se verifica en Playwright. Dinámico con unitarios más flujos.

## ENLACES INTERNOS RELACIONADOS

- [§5.1](../AGENTS.md#51-prohibido-sin-excepción)
- [§7.2](../AGENTS.md#72-patrón-de-secciones-frontend)
