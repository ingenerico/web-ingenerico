# AGENTS - INGENERICO WEB.

Este es el punto de entrada obligatorio. Léelo completo antes de escribir una sola línea de código.

## 0. PROTOCOLO DE PROYECTO Y AMPLIACIONES.

Sigue este orden siempre, sin saltarte pasos:
- Lee este archivo completo.
- Lee `STATE.md` para saber en qué fase va el proyecto, qué está hecho y cuál es la siguiente tarea concreta.
- Si vas a tocar una funcionalidad que ya existe, lee su documento en `docs/<funcionalidad>.md` antes de modificar código. Ese archivo es la fuente de verdad de cómo y por qué se implementó así.
- No asumas que recuerdas conversaciones anteriores: no lo haces. Este archivo + `STATE.md` + los docs puntuales son la fuente de verdad del proyecto.
- Antes de escribir código nuevo, revisa si ya existe algo parecido (sección, helper, estilo, dato). Está prohibido duplicar código: si algo se parece, extiéndelo o reutilízalo.
- Al terminar una tarea, aplica el cierre de [§1](#1-ciclo-de-desarrollo-obligatorio) sin saltos ni atajos.
- Ninguna regla de la sección 5 se rompe "por esta vez". Si una tarea parece requerir romper una regla, detente y repórtalo en vez de improvisar.

## 1. CICLO DE DESARROLLO OBLIGATORIO.

Toda tarea sigue este orden, sin saltos:
- **Investigar** — entender el problema y el estado actual antes de tocar nada.
- **Planear** — definir el cambio mínimo que resuelve el problema.
- **Ejecutar** — implementar siguiendo [§5](#5-reglas-innegociables)–[§11](#11-seo-rendimiento-accesibilidad-y-compatibilidad).
- **Verificar** — typecheck + lint + tests + build + revisión manual del flujo.
- **Documentar** — actualizar/crear el doc en `docs/` correspondiente.
- **Actualizar** — `STATE.md` y `README.md` con el estado de la fase cerrada.
- **Commitear** — en pasos pequeños y granulares, mensaje claro.

Si algún paso falla, no se avanza al siguiente.

## 2. CÓMO DOCUMENTAR EN `docs/`.

Cada `docs/<tema>.md` cubre un tema por archivo (Secciones, Estructura, Estilos, Interacciones, etc.), nunca englobar todo en un solo doc. Los nombres son simples, estables, en minúsculas con guiones y en inglés (ej. `docs/services.md`); no se renombran sin motivo.

```markdown
# <NOMBRE DEL TEMA>

## QUÉ HACE

## POR QUÉ SE IMPLEMENTÓ ASÍ

## CÓMO FUNCIONA

## REGLAS DE NEGOCIO

## SEGURIDAD ESPECÍFICA

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

## TESTS

## ENLACES INTERNOS RELACIONADOS
```

Forma obligatoria dentro de esa plantilla: texto corto y directo, sin verbosidad; rutas, variables y comandos van en tablas, nunca en párrafos concatenados; toda referencia a otro documento enlaza a su punto exacto (`./otro.md#n-titulo-del-punto`), nunca al documento en general; si el detalle ya vive en otro lado, acá va solo el resumen con el enlace. Los valores de ejemplo nunca llevan datos reales de clientes.

## 3. REGLA DE EJECUCIÓN.

Se debe trabajar **una tarea concreta por sesión**, salvo que `STATE.md` indique explícitamente que la siguiente tarea es una secuencia inseparable.

No se empieza una funcionalidad de una fase posterior si la fase actual no tiene su criterio de cierre cumplido.

Si aparece deuda técnica, se registra en `STATE.md` con:
- problema;
- impacto;
- decisión temporal;
- tarea pendiente para resolverlo.

## 4. COMUNICACIÓN DEL AGENTE.

El agente responde siempre en **lenguaje natural, conciso y humano**. Evita verbosidad innecesaria y no concatena rutas, archivos o referencias técnicas que corten el hilo de lectura.

Solo menciona una ruta o fragmento de código cuando sea imprescindible para ubicar algo, y en ese caso de forma puntual, nunca como lista acumulada.

## 5. REGLAS INNEGOCIABLES.

### 5.1. PROHIBIDO, SIN EXCEPCIÓN.

- `npm` (el gestor es **pnpm**).
- `innerHTML`, `outerHTML`, `insertAdjacentHTML` o concatenar HTML como string con datos. Solo `textContent`, `createElement`/`createElementNS` o plantilla `.html` clonada vía helper compartido `src/scripts/core/template.ts`.
- `!important` en CSS.
- `localStorage` / `sessionStorage` salvo justificación explícita registrada en `docs/` y `STATE.md`. Por defecto el estado vive en memoria y en la URL.
- Duplicar código: si vas a copiar/pegar una función, estilo o sección, extráelo a un módulo compartido.
- `any` en TypeScript (usa `unknown` + _type guard_, o modela el tipo real).
- `null` sin control estrecho. Ver [§7.3](#73-regla-null-vs-undefined).
- `// @ts-ignore`, `// @ts-expect-error` o supresiones globales sin justificación.
- Añadir Vue, React, Angular, Next.js, Svelte, librerías de estado, frameworks CSS o kits de componentes. Vanilla puro.
- Añadir librerías JS/CSS que no se usen o que dupliquen lo que ya resuelve el navegador.
- Cargar fuentes desde CDN externo (Google Fonts `<link>`, etc.). Solo Fontsource empaquetado con Vite. Ver [§6](#6-stack).
- Importar sets de iconos completos o SVG pegado a mano desde fuentes no verificadas. Solo Lucide vía helper propio. Ver [§6](#6-stack).
- Estilos en línea con `style=""` salvo variables dinámicas fijadas desde TS con motivo documentado.
- Contenido principal solo renderizado por JS. El HTML debe ser legible y útil sin JS; el JS solo mejora.
- Solo enlaces externos ya aprobados desde el módulo de datos (ej. enlace `wa.me` construido con `encodeURIComponent` y número centralizado).
- Hardcodear números de contacto, precios o URLs externas en más de un sitio. Viven en un único módulo de datos tipado.
- Entregar código con errores o warnings de tipado (`tsc`). Cero es el único estado válido.
- Revelar información interna en la UI (nombres de fases, rutas internas, stack traces, versiones). Los mensajes al visitante son genéricos y en español.

### 5.2. OBLIGATORIO, SIN EXCEPCIÓN.

- Tipado explícito en cada función pública, cada módulo de datos y cada prop de sección. Cero errores o warnings: `tsc --noEmit` en `strict` debe dar **0** antes de documentar/commitear. Ver [§7.1](#71-general) y [§7.3](#73-regla-null-vs-undefined).
- Mobile first y accesible por defecto: HTML semántico, jerarquía única de encabezados, foco visible, contraste suficiente, respeto a `prefers-reduced-motion`. Detalle en [§11](#11-seo-rendimiento-accesibilidad-y-compatibilidad).
- Commits granulares: un commit = un cambio lógico coherente.
- Cierre por tarea según [§1](#1-ciclo-de-desarrollo-obligatorio), con verificación de [§10.3](#103-ci) y actualización de `README.md`, `docs/` y `STATE.md`. Si la verificación falla, no se avanza.

## 6. STACK.

| Área                | Decisión                         | Regla                                                                                                             |
| ------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Marcado             | HTML5 semántico                  | Usar elementos nativos antes de crear soluciones propias. Contenido crítico siempre en HTML, no inyectado por JS. |
| Estilos             | CSS moderno puro                 | Variables CSS para tokens, nesting nativo, media queries modernas. Sin frameworks.                                |
| Interactividad      | TypeScript vanilla sin framework | Solo para comportamientos que lo necesiten. Sin dependencias de runtime.                                          |
| Herramienta y build | Vite                             | Entorno local y generación de `dist/`.                                                                            |
| Gestor de paquetes  | pnpm                             | Mantener un solo gestor y versionar `pnpm-lock.yaml`.                                                             |
| Fuentes             | Fontsource                       | Paquetes `@fontsource/*` importados una vez al inicio del CSS global. Prohibido CDN externo.                      |
| Iconos              | Lucide vía helper propio         | `src/scripts/core/icons.ts` con `createIcon` + `createElementNS`. Sin set completo ni `innerHTML`.                |
| Lint/formato        | Biome                            | Una sola herramienta para TS/CSS/JSON.                                                                            |
| Tests unitarios     | `node:test`                      | Helpers y lógica pura (formato de precios, construcción de enlaces, datos).                                       |
| Tests de flujo      | Playwright                       | Tabs de servicios, enlace WhatsApp, FAQ, navegación por anclas, responsive.                                       |
| CI                  | GitHub Actions                   | Obligatorio en cada push y pull request.                                                                          |
| Publicación         | Hosting estático                 | Se publica `dist/` con solo archivos estáticos.                                                                   |

No añadir frameworks, librerías de estado ni CSS externo para esta fase. Si una necesidad parece exigirlo, se registra como deuda y se decide explícitamente, no se improvisa.

## 7. CONVENCIONES DE CÓDIGO.

### 7.1. GENERAL.

- TypeScript con `strict: true`, `noImplicitAny: true`, `noUncheckedIndexedAccess: true`. Ver [§5.2](#52-obligatorio-sin-excepción).
- Lint/formato según [§6](#6-stack), sin herramientas paralelas.
- Nombres descriptivos, sin abreviaturas crípticas.
- Convención obligatoria: `camelCase` en TS (variables, funciones, props), `PascalCase` para clases/componentes, `kebab-case` en HTML/CSS (clases, ids, archivos, custom properties).
- Idioma del código: todo identificador (variables, funciones, clases, archivos, props) en **inglés**; solo comentarios y documentación en **español**.
- CSS: usar nesting nativo y sintaxis moderna de media queries `@media (width > 768px)` / `@media (width <= 1024px)` en lugar de `min-width`/`max-width` clásicos. Mobile first siempre. Nesting puro: el `@media` contiene bloques de componente y las reglas van anidadas dentro (`&` para estados y compuestos, selectores relativos `> h1` para hijos), nunca selectores compuestos planos fuera de su bloque.
- Unidades CSS: `px` en todo el proyecto para tamaños (tipografía, espaciado, bordes, radios); prohibido `rem`/`em`. Se admiten `%`, `fr`, `vw`/`vh`/`dvh` y `deg`/`ms` solo donde tengan sentido (proporciones, viewport, ángulos, tiempos).
- Z-index estricto: la base es `0` (defecto, sin declarar). Cada capa que deba ir encima usa el siguiente entero disponible (`1`, `2`, `3`…), sin saltos ni números altos "por si acaso". El conteo vive en `docs/ui.md` (sección Capas); el próximo nivel libre es el siguiente al máximo registrado.
- Iconos y fuentes según [§6](#6-stack) (Lucide vía helper, Fontsource empaquetado). Sin SVG sueltos ni librería entera; solo pesos usados y pila en `--font-family-base`.
- Datos de negocio (servicios, planes, precios, número WhatsApp, enlaces): en un único módulo TS tipado bajo `src/scripts/data/`, con tipos exportados. Prohibido duplicarlos en HTML y JS.
- URLs externas: centralizadas, construidas con `encodeURIComponent`, con `target="_blank"` + `rel="noopener"` solo cuando abran pestaña nueva y motivo documentado.

### 7.2. PATRÓN DE SECCIONES FRONTEND.

Cada sección vive en su propia carpeta, sin excepción:

```text
src/sections/ServiceTabs/
├── ServiceTabs.ts
├── ServiceTabs.html
└── ServiceTabs.css
```

Toda sección implementa:

```typescript
export interface Section<Props> {
	render(props: Props): HTMLElement;
	destroy(): void;
}
```

Reglas:
- El `.html` es la plantilla clonada por `template.ts`; nunca se construye HTML por strings en el `.ts`.
- El `.css` solo toca su sección (nesting bajo su clase raíz), salvo tokens globales.
- `destroy()` es obligatorio siempre que la sección registre listeners, observers o `requestAnimationFrame`.
- El `index.html` compone secciones por puntos de montaje con `id` estable; el `main.ts` solo hace wiring, sin lógica de negocio.
- Nada de lógica compartida copiada entre secciones: va a `src/scripts/core/`.

### 7.3. REGLA `null` VS `undefined`.

- Ausencia de dato de negocio se representa con `undefined` y propiedades opcionales, nunca con `null` serializado.
- `null` solo vive como handle interno del DOM/plataforma (`HTMLElement | null` de `querySelector`, timers, `requestAnimationFrame`, observers) y se estrecha en el borde con guard o `assert`.
- Prohibido propagar `null` hacia datos, props o plantillas.

## 8. SEGURIDAD SOLO-FRONTEND.

- Todo enlace externo se construye desde el módulo de datos y se valida en tests (dominio permitido + `encodeURIComponent`).
- CSP servida por el hosting cuando lo permita, y como mínimo `meta` base sin `unsafe-inline` en scripts; sin `blob:` en scripts y `object-src none` donde aplique.
- Formularios/enlaces: validación visible como UX, nunca como frontera de seguridad real porque aquí no hay escritura privilegiada.

## 9. ESTRUCTURA DEL PROYECTO.

```text
ingenerico/
├── index.html
├── public/
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── main.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   └── styles.css
│   ├── scripts/
│   │   ├── core/
│   │   │   ├── template.ts
│   │   │   └── icons.ts
│   │   └── data/
│   │       └── site.ts
│   ├── sections/
│   │   └── <Section>/
│   │       ├── <Section>.ts
│   │       ├── <Section>.html
│   │       └── <Section>.css
│   └── types/
├── tests/
├── e2e/
├── docs/
│   └── <tema>.md
├── AGENTS.md
├── STATE.md
├── README.md
├── package.json
└── pnpm-lock.yaml
```

## 10. TESTING Y CI.

### 10.1. UNITARIOS (`node:test`).

- Helpers puros: formato COP, construcción de mensaje/enlace WhatsApp, datos de planes, helpers de plantilla.
- Sin DOM complejo salvo `jsdom` mínimo justificado; preferir lógica extraída y testeable.

### 10.2. FLUJOS (Playwright).

Mínimo antes de lanzar:
1. navegación por anclas sin roturas;
2. tabs de servicios cambian panel y marcan `aria-selected`;
3. enlace WhatsApp lleva mensaje con servicio/plan codificado;
4. FAQ abre/cierra y es operable por teclado;
5. responsive móvil/escritorio sin scroll horizontal;
6. con `prefers-reduced-motion` no hay animación que bloquee contenido.

### 10.3. CI.

GitHub Actions ejecuta en cada push y pull request:
1. `biome check`;
2. `tsc --noEmit`;
3. tests unitarios;
4. Playwright de flujos críticos;
5. `vite build`;
6. auditoría de dependencias (falla ante CVE crítico).

Un PR no se considera listo si CI está en rojo.

## 11. SEO, RENDIMIENTO, ACCESIBILIDAD Y COMPATIBILIDAD.

- Título y descripción únicos y pertinentes por página. HTML semántico, enlaces rastreables, una sola jerarquía de encabezados.
- Metadatos Open Graph/Twitter con imagen local en `public/images/` cuando haya recurso aprobado.
- Imágenes optimizadas (`width`/`height` explícitos, `loading="lazy"` fuera del primer viewport, `decoding="async"`).
- Presupuesto: sin frameworks, sin fuentes externas, sin JS que bloquee el primer pintado. El JS se carga con `type="module"` + `defer` por defecto de Vite.
- Accesibilidad: foco visible siempre, `aria-selected`/`aria-expanded` donde aplique, roles `tablist`/`tab`/`tabpanel` correctos, teclado completo, contraste AA, animación desactivable.
- Compatibilidad: funciona en navegadores modernos de escritorio y móvil. La información principal y las rutas de contacto nunca dependen de animaciones ni funciones experimentales.
- 404 y favicon existen y se verifican en build.

## 12. FASES Y CRITERIOS DE CIERRE.

| Fase | Nombre         | Cierre obligatorio                                                                                            |
| ---- | -------------- | ------------------------------------------------------------------------------------------------------------- |
| 0    | Fundamentos    | estructura [§9](#9-estructura-del-proyecto) + tokens + template/icons + datos tipados + CI + build en verde   |
| 1    | Contenido base | hero, servicios, proceso, casos, FAQ, CTA, footer con contenido real en HTML                                  |
| 2    | Interactividad | tabs, ojo/pupila con `rAF`, reveal con `IntersectionObserver`, enlace WhatsApp dinámico, todo con `destroy()` |
| 3    | Pulido         | SEO/OG, a11y teclado/foco/motion, responsive sin overflow, rendimiento e imágenes                             |
| 4    | Producción     | checklist [§13](#13-checklist-de-lanzamiento) en verde + `dist/` publicado detrás de HTTPS                    |

Una fase se cierra solo cuando su código, tests, documentación, `README.md` y `STATE.md` están actualizados.

## 13. CHECKLIST DE LANZAMIENTO.

Antes de producción, además de [§10.3](#103-ci) y [§11](#11-seo-rendimiento-accesibilidad-y-compatibilidad) en verde:
- Sin violaciones de [§5.1](#51-prohibido-sin-excepción) en bundle ni build.
- Título/descripción/OG verificados, favicon e imágenes locales.
- HTTPS activo, cabeceras/CSP del hosting revisadas.
- Procedimiento de rollback documentado (re-publicar `dist/` anterior).
