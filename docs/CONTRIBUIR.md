# Cómo trabajar en este repositorio

## Reglas

- Español en todo: nombres de archivos, componentes, variables, comentarios y commits. Sin acentos ni ñ en identificadores y nombres de archivo.
- El texto visible vive en `content/`. Si un componente tiene una frase escrita a mano, está mal.
- Marca siempre como `EL INGENIERO DE DATOS`, en mayúsculas y sin ®.
- Nada de amarillo como texto sobre fondo claro. Sobre botón amarillo, texto marino.
- Antes de abrir un PR: `pnpm check` y `pnpm build` en verde.
- Commits en imperativo: `Agrega la landing del curso de dbt`.

## Agregar una sección a una página

1. Escribe el contenido en el archivo de `content/` de esa página (por ejemplo `content/inicio.ts`), tipado.
2. Crea el componente en `components/sections/<pagina>/<nombre>.tsx`. Usa `Seccion`, `Titulo`, `Etiqueta` y `BotonEnlace` de `components/ui/` para heredar márgenes, fondos y tipografía.
3. Impórtalo en `app/<pagina>/page.tsx` en el orden en que debe aparecer.
4. Si la sección necesita un `id` para enlazarse desde la navegación, ponlo en `Seccion` y agrega el enlace en `content/sitio.ts`.

## Agregar la landing de un curso

1. Agrega el curso a `content/cursos.ts` con `href: "/cursos/<slug>/"`.
2. Crea `content/cursos/<slug>.ts` siguiendo la estructura de `python-basico.ts`.
3. Crea `app/cursos/<slug>/page.tsx` reutilizando las secciones de `components/sections/curso/`. Si una sección necesita datos distintos, hazla recibir el contenido por props en lugar de duplicarla.
4. Define `metadata` con `metadatosDePagina` y agrega los datos estructurados `curso` y `preguntasFrecuentes`.
5. El sitemap se actualiza solo: lee `content/cursos.ts`.

## Agregar una red social

Una entrada en `REDES` de `content/sitio.ts`. Si debe aparecer en el pie, agrégala a `REDES_EN_PIE` y su ícono a `components/icons/redes.tsx`.

## Pedirle ayuda a v0

El chat de v0 sigue siendo el lugar para explorar diseño. Cuando v0 proponga algo, se trae a este repo adaptándolo a la estructura de arriba: contenido a `content/`, estilos con los tokens de `app/globals.css`, nada de copiar el archivo entero. v0 inventa textos con facilidad: el copy aprobado es el de Notion.
