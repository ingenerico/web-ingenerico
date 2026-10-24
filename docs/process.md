# PROCESS

## QUÉ HACE

Cuatro pasos de trabajo con entrega visible en cada etapa.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Lista ordenada nativa: el orden de los pasos es contenido, no decoración.

## CÓMO FUNCIONA

Maquetado estático en `index.html` sin comportamiento.

## REGLAS DE NEGOCIO

| Regla              | Detalle                    |
| ------------------ | -------------------------- |
| Pasos              | Cuatro, en orden fijo      |
| Contenido por paso | Nombre, título y resultado |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                      | Rol                            |
| ------------------------- | ------------------------------ |
| `index.html`              | Lista de pasos estática        |
| `src/components/Process/` | Estilos y módulo de la sección |

## TESTS

Estático se verifica en Playwright.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
