# DATA

## QUÉ HACE

Datos tipados del sitio y helpers puros para formato y enlaces de WhatsApp.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Un solo módulo evita duplicar precios, números y enlaces entre HTML y TS.

## CÓMO FUNCIONA

`site.ts` expone tipos, servicios y número central. `format.ts` formatea COP. `whatsapp.ts` construye el enlace con `encodeURIComponent`.

## REGLAS DE NEGOCIO

| Regla    | Detalle                                     |
| -------- | ------------------------------------------- |
| Precios  | Opcionales; cuando existen son `>= 0`       |
| Contacto | Un solo número central en `WHATSAPP_NUMBER` |
| Enlaces  | Solo `wa.me` con mensaje codificado         |

## SEGURIDAD ESPECÍFICA

Enlaces centralizados y validados en tests. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                   | Rol                          |
| ---------------------- | ---------------------------- |
| `src/data/site.ts`     | Tipos, servicios y número    |
| `src/core/format.ts`   | Formato de moneda            |
| `src/core/whatsapp.ts` | Enlaces y mensajes           |
| `src/core/template.ts` | Clonado de plantillas HTML   |
| `src/core/icons.ts`    | Iconos vía `createElementNS` |
| `tests/`               | Unitarios con `node:test`    |

## TESTS

| Comando              | Qué cubre                                           |
| -------------------- | --------------------------------------------------- |
| `node --test tests/` | Formato COP, enlaces WhatsApp e integridad de datos |

## ENLACES INTERNOS RELACIONADOS

- [§5.2](../AGENTS.md#52-obligatorio-sin-excepción)
- [§7.1](../AGENTS.md#71-general)
- [§10](../AGENTS.md#10-testing-y-ci)
