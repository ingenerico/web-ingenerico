# SERVICES

## QUÉ HACE

Índice de servicios con ficha del primer servicio y enlace de diagnóstico.

## POR QUÉ SE IMPLEMENTÓ ASÍ

El contenido estático queda en `index.html` para leerse sin JS. Los tabs cambian en Fase 2 desde los datos.

## CÓMO FUNCIONA

El índice marca el primer servicio. La ficha muestra entregables, plazo, planes y el enlace con el mensaje ya codificado.

## REGLAS DE NEGOCIO

| Regla                   | Detalle                                     |
| ----------------------- | ------------------------------------------- |
| Servicio visible sin JS | El primero de la lista                      |
| Precios                 | Opcionales; formato COP con `formatCOP`     |
| Contacto                | Enlace `wa.me` con mensaje del plan elegido |

## SEGURIDAD ESPECÍFICA

Enlace centralizado y validado en tests. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                       | Rol                              |
| -------------------------- | -------------------------------- |
| `index.html`               | Índice, ficha y enlace estáticos |
| `src/sections/Services/`   | Estilos y módulo de la sección   |
| `src/scripts/data/site.ts` | Fuente de servicios y planes     |

## TESTS

Estático se verifica en Playwright. Datos e integridad en `tests/site.test.ts`.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-secciones-frontend)
- [§10.2](../AGENTS.md#102-flujos-playwright)
