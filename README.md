# elingenierodedatos.com

Sitio de **EL INGENIERO DE DATOS**. Next.js exportado como HTML estático y servido desde Cloudflare Workers.

| Qué                           | Dónde                                                     |
| ----------------------------- | --------------------------------------------------------- |
| Producción                    | https://elingenierodedatos.com                            |
| Diseño de referencia          | v0, chat "EID · Inicio y validación de paleta"            |
| Copy y decisiones de producto | Notion → 01 Sitio y SEO                                   |
| Identidad visual              | Repo [brand](https://github.com/elingenierodedatos/brand) |

## Correr en local

Requisitos: Node 22 (ver `.nvmrc`) y pnpm 10 (`corepack enable`).

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Antes de subir cambios:

```bash
pnpm check        # prettier, eslint y tipos
pnpm build        # exporta el sitio a out/
pnpm preview      # sirve out/ con wrangler, igual que en producción
```

`pnpm build` descarga primero los logos e imágenes desde el repo `brand` a `public/marca/` (carpeta ignorada por Git). Si cambia un asset de marca, se cambia allá y aquí se vuelve a compilar.

## Publicar

Cada push a `main` compila y publica con GitHub Actions (`.github/workflows/deploy.yml`). Para publicar desde tu máquina:

```bash
pnpm exec wrangler login
pnpm deploy
```

Configuración de Cloudflare en `wrangler.jsonc`. Detalle de la primera puesta en línea en [docs/DESPLIEGUE.md](docs/DESPLIEGUE.md).

## Cómo está organizado

```text
app/                 rutas (una carpeta por página) y archivos globales
components/layout/   encabezado, pie, marca, menú móvil
components/sections/ secciones de cada página, una por archivo
components/ui/       piezas reutilizables: Seccion, Titulo, BotonEnlace, Etiqueta
components/icons/    íconos de redes
content/             todo el texto del sitio, tipado; los componentes solo pintan
lib/                 metadatos, datos estructurados y utilidades
public/              archivos estáticos propios (los de marca llegan a public/marca/)
scripts/             sincronización de assets de marca
docs/                arquitectura, decisiones y guías
```

Para agregar una sección o una página, sigue [docs/CONTRIBUIR.md](docs/CONTRIBUIR.md). Las decisiones de arquitectura están en [docs/DECISIONES.md](docs/DECISIONES.md).
