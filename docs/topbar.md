# TOPBAR

## QUÉ HACE

Barra superior fija con marca, navegación, llamado y menú móvil.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Vive fuera de la zona oscura para que el `sticky` cubra toda la página. En móvil la navegación colapsa en hamburguesa.

## CÓMO FUNCIONA

El botón alterna la clase `is-open` y `aria-expanded`. Escape cierra y devuelve el foco. Tocar un enlace cierra sin robar el foco.

## REGLAS DE NEGOCIO

| Regla      | Detalle                                          |
| ---------- | ------------------------------------------------ |
| Escritorio | Navegación en línea desde 820px                  |
| Móvil      | Panel desplegable bajo la barra                  |
| Foco       | Al abrir va al primer enlace; Escape lo devuelve |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces generados. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                     | Rol                                 |
| ------------------------ | ----------------------------------- |
| `src/components/Topbar/` | Maquetado, estilos y comportamiento |
| `e2e/nav.spec.ts`        | Apertura, cierre y focos            |

## TESTS

Flujos en Playwright en móvil y escritorio.

## ENLACES INTERNOS RELACIONADOS

- [§7.2](../AGENTS.md#72-patrón-de-componentes-frontend)
- [§10.2](../AGENTS.md#102-flujos-playwright)
