# Decisiones de arquitectura

Registro corto de decisiones. Las que afectan a todo el ecosistema están también en Notion (04 Tecnología → ADR).

## ADR-001: Next.js exportado a estático, servido por Cloudflare Workers

**Estado:** aceptada, 14 de octubre de 2026. Sustituye la propuesta de OpenNext.

**Contexto.** El sitio es contenido: inicio, landings de cursos y, después, blog. No tiene formularios con servidor, sesiones ni datos por usuario. El diseño sale de v0 en Next.js y queremos conservarlo. La infraestructura debe vivir en Cloudflare y costar lo menos posible.

**Opciones.**

| Opción                                             | Costo                             | Complejidad                                     | Dependencias             | Riesgo                                                 |
| -------------------------------------------------- | --------------------------------- | ----------------------------------------------- | ------------------------ | ------------------------------------------------------ |
| Next.js `output: "export"` + Workers Static Assets | 0 USD                             | Mínima: no hay servidor                         | Ninguna extra            | Sin SSR ni API routes; cuando hagan falta, se migra    |
| Next.js con OpenNext en Workers                    | 0 USD en plan gratuito            | Media: adaptador, límites de tamaño, depuración | `@opennextjs/cloudflare` | Adaptador en evolución; cambios de Next rompen cosas   |
| Vercel                                             | 0 USD en hobby, 20 USD/mes en pro | Mínima                                          | Vercel                   | Sale de Cloudflare; dominio y analítica en dos lugares |

**Decisión.** Exportar a estático y servir con Workers Static Assets. Es la opción con menos piezas, cero costo y despliegue de segundos. Lo dinámico que venga (calificaciones, campus) vive en Workers aparte con su propia API, no dentro del sitio.

**Consecuencias.** `next/image` va sin optimización (`unoptimized`): las imágenes se preparan al tamaño correcto antes de subirlas. No hay rutas dinámicas sin `generateStaticParams`. Los formularios se resuelven con servicios externos o con un Worker propio.

## ADR-002: El contenido vive en `content/`, no en los componentes

**Estado:** aceptada.

Todo texto visible está en archivos TypeScript tipados dentro de `content/`. Los componentes reciben datos y pintan. Así una corrección de copy no toca JSX, el copy se puede revisar en un solo lugar y, cuando llegue el blog, el mismo patrón admite Markdown o MDX.

## ADR-003: Los assets de marca se descargan del repo `brand` en cada build

**Estado:** aceptada.

Una sola fuente de verdad para logos e imágenes. `scripts/sincronizar-marca.mjs` los baja a `public/marca/` antes de compilar. Costo: el build depende de GitHub (si falla, el build falla con un mensaje claro). Alternativa descartada: copiar los PNG a este repo, que crea dos versiones que se desincronizan.

## ADR-004: Tipografías con `next/font/google`

**Estado:** aceptada.

Barlow, Barlow Condensed y JetBrains Mono se descargan en el build y se sirven desde el propio sitio: ningún navegador habla con Google. Solo la máquina que compila necesita acceso a Google Fonts.

## Decisiones pendientes

- **Newsletter.** Sin herramienta (Kit o beehiiv, semana 4 del plan). Mientras tanto la sección "Comunidad" manda a YouTube y Discord; no hay formulario falso.
- **Analítica.** Cloudflare Web Analytics (gratuita, sin cookies) cuando el sitio esté en línea. Se activa desde el panel; no requiere código.
- **Blog.** Entrará como `app/blog/` con contenido en Markdown. Hasta entonces no aparece en la navegación.
