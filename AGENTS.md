# AGENTS INGENERICO.

Este archivo define las reglas. Léelo junto con `README.md` antes de cambiar código.

## 0. PROTOCOLO DE PROYECTO Y AMPLIACIONES.

Sigue este orden siempre, sin saltarte pasos:

1. Lee `AGENTS.md` y `README.md`.
2. Si vas a tocar una funcionalidad que ya existe, lee su documento en `docs/<funcionalidad>.md` antes de modificar código. Ese archivo es la fuente de verdad de cómo y por qué se implementó así.
3. No asumas que recuerdas conversaciones anteriores: no lo haces. `AGENTS.md` + `STATE.md` + los `docs/*.md` puntuales son la fuente de verdad del proyecto.
4. Antes de escribir código nuevo, revisa si ya existe algo parecido (componente, helper, endpoint). Está prohibido duplicar código: si algo se parece, extiéndelo o reutilízalo.
5. Si una tarea parece requerir romper una regla, detente y repórtalo en vez de improvisar.
6. Al terminar una tarea, en este orden: **verificar** (tests + lint + typecheck) → **documentar** en `docs/` → **actualizar** `STATE.md` **y** `README.md` → **commitear** en pasos pequeños y granulares.


## 1. CICLO DE DESARROLLO OBLIGATORIO.

Toda tarea sigue este orden, sin saltos:

- **Investigar** — entender el problema y el estado actual antes de tocar nada.
- **Planear** — definir el cambio mínimo que resuelve el problema.
- **Ejecutar** — implementar siguiendo §1–§6.
- **Implementar** — integrar (migraciones, wiring de rutas, componentes montados).
- **Verificar** — tests + lint + typecheck + revisión manual del flujo.
- **Documentar** — actualizar/crear el doc en `docs/` correspondiente.
- **Actualizar** — `STATE.md` y `README.md` con el estado de la fase cerrada.
- **Commitear** — en pasos pequeños y granulares, mensaje claro.

Si algún paso falla, no se avanza al siguiente.

## 2. CÓMO DOCUMENTAR EN `docs/`.

Cada `docs/<tema>.md` sigue esta plantilla mínima y un tema por archivo (Configuración, Estructura, Componentes, etc., no englobar `backend`/`frontend`), los títulos van en mayúsculas. Los nombres son simples, estables, en minúsculas con guiones y en inglés (ej. `docs/login.md`); no se renombran sin motivo:

```markdown
# <NOMBRE DEL TEMA>

## QUÉ HACE
## POR QUÉ SE IMPLEMENTÓ ASÍ
## CÓMO FUNCIONA
## Reglas de negocio
## Seguridad específica
## Endpoints / eventos / tablas involucradas
## Tests
## Enlaces internos relacionados
```

Forma obligatoria dentro de esa plantilla: texto corto y directo, sin verbosidad; rutas, variables y comandos van en tablas, nunca en párrafos concatenados; toda referencia a otro documento enlaza a su punto exacto (`./otro.md#n-titulo-del-punto`), nunca al documento en general; si el detalle ya vive en otro lado, acá va solo el resumen con el enlace. Los comandos exactos se conservan tal cual cuando son la información (ej. guía local); los valores de ejemplo nunca llevan datos reales.

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

Solo menciona una ruta o fragmento de código cuando sea imprescindible para ubicar algo, y en ese caso de forma puntual (ej. una sola ruta relevante), no como lista acumulada.

## 5. REGLAS INNEGOCIABLES.

### 5.1. PROHIBIDO, SIN EXCEPCIÓN.

- `npm` (el gestor es **pnpm**).
- `innerHTML` (usa `textContent`, creación de nodos con `document.createElement`, o plantilla local `.html` clonada vía helper compartido `frontend/src/core/template.ts` — nunca inyectar HTML como string ni interpolar datos en la plantilla).
- `!important` en CSS.
- `localStorage` / `sessionStorage` (solo cookies `HttpOnly` + `Secure` + `SameSite`).
- Duplicar código: si vas a copiar/pegar una función o componente, extráelo a un módulo compartido.
- `any` en TypeScript (usa `unknown` + *type guard*, o modela el tipo real).
- `null` sin controlar en TypeScript.
- SQL construido con f-strings, concatenación o interpolación de datos del usuario.
- `// @ts-ignore`, `// @ts-expect-error` o `type: ignore` global/sin justificación. Solo se permite `type: ignore` puntual con comentario que cite la herramienta externa (ej. `psycopg2` sin `py.typed`).
- Borrar copias de base de datos (`backups/*.dump`, R2 o cualquier respaldo): solo el dueño las elimina, nunca un agente ni un script.
- Entregar código con errores o warnings de tipado (`pyright` o `tsc`). Cero es el único estado válido.
- Revelar información interna en UI o mensajes (ej. "Fase 11", nombres de tablas, stack traces, versiones). Los mensajes al usuario deben ser genéricos.

### 5.2. OBLIGATORIO, SIN EXCEPCIÓN.

- Tipado explícito en cada función pública, cada respuesta de API y cada fila de base de datos.
- Cero errores y cero warnings de tipado: `pyright` en `strict` y `tsc --noEmit` (con `strict`, `noImplicitAny`, `noUncheckedIndexedAccess`) deben dar **0** antes de documentar/commitear. Solo se admite `type: ignore` puntual justificado por herramienta externa sin tipos (ej. `psycopg2`).
- Seguridad en tres capas — frontend, backend y base de datos — nunca confiar en una sola capa.
- Mobile first en todo el frontend.
- Documentar cada cambio relevante en `docs/` con **un tema por archivo** (estilo `opencode.ai/docs` — Configuración, Estructura, Componentes, etc.); **prohibido englobar `backend`/`frontend` en un solo doc**.
- Actualizar `README.md` en cada fase (estado actual, funcionalidades, estructura del repo, desarrollo local/producción y enlaces) al igual que `docs/` y `STATE.md`; el README es el mapa de entrada y debe reflejar la fase cerrada.
- Commits granulares: un commit = un cambio lógico coherente.
- Las migraciones son la única forma aceptada de cambiar el esquema después de crear la base inicial.
- Verificación obligatoria en cada tarea: `ruff check` + `ruff format --check` + `pyright` + `pytest` + `biome check` + `tsc --noEmit` + `vite build`; si uno falla, no se avanza a `STATE.md` ni a `README.md` ni a commit.

## 6. STACK.