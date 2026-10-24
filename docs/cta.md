# CTA

## QUÉ HACE

Banda de cierre con llamado al diagnóstico por WhatsApp.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Un solo mensaje final. El enlace lleva texto genérico porque aún no hay plan elegido.

## CÓMO FUNCIONA

Maquetado estático en plantilla, incrustado en el build.

## REGLAS DE NEGOCIO

| Regla    | Detalle                                |
| -------- | -------------------------------------- |
| Contacto | Enlace `wa.me` genérico al diagnóstico |

## SEGURIDAD ESPECÍFICA

Enlace centralizado. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                  | Rol                         |
| --------------------- | --------------------------- |
| `src/components/Cta/` | Maquetado, estilos y módulo |

## TESTS

Estático se verifica en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
