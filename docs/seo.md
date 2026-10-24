# SEO

## QUÉ HACE

Metadatos para buscadores y redes, más archivos de sitio.

## POR QUÉ SE IMPLEMENTÓ ASÍ

Título, descripción y canónica únicos en el HTML. Sin imagen social hasta tener recurso aprobado.

## CÓMO FUNCIONA

`index.html` trae canónica, color de tema y tarjetas Open Graph y Twitter. `public/` aporta `robots.txt`, `404.html` y favicon, que el build copia a `dist/`.

## REGLAS DE NEGOCIO

| Regla          | Detalle                                      |
| -------------- | -------------------------------------------- |
| Canónica       | `https://ingenerico.com/`                    |
| Imagen social  | Pendiente de recurso aprobado                |
| Logo y favicon | Oficiales en `public/`, con título accesible |

## SEGURIDAD ESPECÍFICA

Sin datos ni enlaces sensibles. Vale lo definido en [§5.1](../AGENTS.md#51-prohibido-sin-excepción).

## ARCHIVOS / SECCIONES / EVENTOS INVOLUCRADOS

| Ruta                     | Rol                              |
| ------------------------ | -------------------------------- |
| `index.html`             | Metadatos y tarjeta social       |
| `public/robots.txt`      | Acceso de rastreadores           |
| `public/404.html`        | Página no encontrada sin indexar |
| `public/favicon.svg`     | Icono oficial                    |
| `public/images/logo.svg` | Logo oficial                     |
| `e2e/seo.spec.ts`        | Metadatos y logo                 |

## TESTS

Metadatos en Playwright. `404.html`, `robots.txt` y favicon se verifican en `dist/` tras el build.

## ENLACES INTERNOS RELACIONADOS

- [§11](../AGENTS.md#11-seo-rendimiento-accesibilidad-y-compatibilidad)
