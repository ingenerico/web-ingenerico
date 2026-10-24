# FOOTER

## QUÉ HACE

Pie con identidad, cobertura y rutas de contacto.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Tres columnas en escritorio, una apilada en móvil. Enlaces externos con `rel="noopener"`.

## CÓMO FUNCIONA

Maquetado estático en plantilla, incrustado en el build.

## REGLAS DE NEGOCIO

| Regla            | Detalle                       |
| ---------------- | ----------------------------- |
| Contacto directo | Teléfono con enlace `tel:`    |
| Externo          | YouTube abre en pestaña nueva |

## SEGURIDAD ESPECÍFICA

`rel="noopener"` en el enlace externo. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                   | Rol                         |
| ---------------------- | --------------------------- |
| `src/sections/Footer/` | Maquetado, estilos y módulo |

## TESTS

Estático se verifica en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-secciones-frontend)
