# CI

## QUÉ HACE

Puerta de entrada en cada push y pull request. Nada entra a `main` en rojo.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Un solo workflow ordenado evita que el tipado, los tests o el build se salten por descuido.

## CÓMO FUNCIONA

Corre los pasos en este orden y falla al primero en rojo.

## REGLAS DE NEGOCIO

| Paso           | Comando                                          |
| -------------- | ------------------------------------------------ |
| Lint y formato | `pnpm exec biome check .`                        |
| Tipado         | `pnpm exec tsc --noEmit`                         |
| Unitarios      | `node --test tests/`                             |
| Flujos         | `pnpm exec playwright test --pass-with-no-tests` |
| Build          | `pnpm exec vite build`                           |
| Dependencias   | `pnpm audit --audit-level critical`              |

## SEGURIDAD ESPECÍFICA

La auditoría falla ante CVE crítico. Sin secretos en el workflow.

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                       | Rol                                   |
| -------------------------- | ------------------------------------- |
| `.github/workflows/ci.yml` | Definición del gate                   |
| `playwright.config.ts`     | Flujos contra `e2e/` y servidor local |

## TESTS

El workflow es el test del gate. Los flujos reales llegan en Fase 2; mientras tanto corre con `--pass-with-no-tests`.

## ENLACES INTERNOS RELACIONADOS

- [§10.3](../AGENTS.md#103-ci)
- [§13](../AGENTS.md#13-checklist-de-lanzamiento)
