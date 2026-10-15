Sitio de EL INGENIERO DE DATOS: Next.js exportado como HTML estático (`out/`) y servido desde Cloudflare Workers. Cada push a `main` se publica en producción. Escribe todos tus comentarios en español.

Revisa solo defectos introducidos por este PR. Prioriza:

1. **Roturas del export estático.** Nada que requiera servidor en tiempo de ejecución: rutas dinámicas sin `generateStaticParams`, APIs de servidor, `headers()` o `cookies()`, imágenes optimizadas por Next sin configuración compatible.
2. **Secretos o datos privados** en código, `wrangler.jsonc` o archivos públicos.
3. **SEO.** Cada página con título, descripción y `og:image` propios; enlaces internos válidos; datos estructurados correctos; no romper URLs ya publicadas.
4. **Accesibilidad.** Texto alternativo, jerarquía de encabezados, foco visible y contraste. Regla de marca: el amarillo `#F5B800` nunca va como texto o enlace sobre fondo claro.
5. **Separación contenido y presentación.** Todo el texto vive en `content/`; los componentes solo pintan.
6. **Marca.** El nombre se escribe siempre EL INGENIERO DE DATOS, sin ®. Copy en español claro y natural.

No comentes estilo que ya revisan prettier y eslint. Cada hallazgo lleva severidad, evidencia, impacto y una corrección concreta. Si no hay hallazgos materiales, dilo claramente.
