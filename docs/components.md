# COMPONENTS

## QUÉ HACE

Regla de autoría para cada componente visible del sitio.

## POR QUÉ SE IMPLEMENTÓ ASÍ

El contenido crítico debe leerse sin JS. Por eso cada componente guarda su maquetado en su `.html` como fuente única y el build lo incrusta en `index.html`. El TS solo mejora o conecta datos, nunca pinta el contenido principal.

## CÓMO FUNCIONA

Cada componente tiene carpeta propia con maquetado, estilos y un módulo que implementa la interfaz contra el nodo ya existente. La plantilla `.html` clonada con `template.ts` se usa solo cuando el componente genera nodos desde datos en tiempo de ejecución.

## REGLAS DE NEGOCIO

| Regla                | Detalle                                                                              |
| -------------------- | ------------------------------------------------------------------------------------ |
| Fuente del contenido | La plantilla `.html` de cada componente, incrustada en el build                      |
| Estilos              | Solo bajo la clase raíz del componente                                               |
| Comportamiento       | El TS opera sobre el nodo existente y limpia en `destroy()`                          |
| Enlaces estáticos    | Los contactos fijos viven en plantillas; los mensajes dinámicos se arman desde datos |

## SEGURIDAD ESPECÍFICA

Sin `innerHTML` ni strings de HTML. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                     | Rol                                  |
| ------------------------ | ------------------------------------ |
| `index.html`             | Composición con inclusiones          |
| `src/main.ts`            | Solo cableado de componentes         |
| `src/components/<Name>/` | Maquetado, estilos y comportamiento  |
| `vite.config.ts`         | Incrustado de plantillas en el build |
| `src/core/template.ts`   | Clonado de plantillas dinámicas      |

## TESTS

Estático se verifica en Playwright. Dinámico con unitarios más flujos.

## ENLACES INTERNOS RELACIONADOS

- [§5.1](../AGENTS.md#51-prohibido-sin-excepción)
- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
