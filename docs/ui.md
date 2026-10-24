# UI

## QUÉ HACE

Capas y apilamiento del sitio.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Un conteo único evita números altos y solapamientos.

## CÓMO FUNCIONA

La base es `0` sin declarar. Cada capa encima usa el siguiente entero.

## REGLAS DE NEGOCIO

| Nivel | Uso                             |
| ----- | ------------------------------- |
| `1`   | Barra superior fija             |
| `2`   | Brillo del ojo en tarjetas      |
| `3`   | Enlace para saltar al contenido |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                             | Rol               |
| -------------------------------- | ----------------- |
| `src/components/Hero/Hero.css`   | Nivel de la barra |
| `src/components/Cases/Cases.css` | Nivel del brillo  |
| `src/styles/styles.css`          | Nivel del salto   |

## TESTS

Revisión manual en cada sección nueva. El próximo nivel libre es `4`.

## ENLACES INTERNOS RELACIONADOS

- [§7.1](../AGENTS.md#71-general)
