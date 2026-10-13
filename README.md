# website

Sitio de [El Ingeniero de Datos](https://elingenierodedatos.com): inicio, blog, páginas de cursos y landings.

> Estado: en construcción. Todavía no hay código de aplicación en este repo.

## Stack previsto

- Next.js desplegado en Cloudflare Workers (adaptador por decidir: OpenNext o vinext).
- Artículos del blog en MDX dentro del repo.
- CI/CD con GitHub Actions: lint, build, preview por PR y despliegue al hacer merge a `main`.

## Cómo correrlo

Pendiente: se documenta cuando entre el primer commit de la aplicación.

## Cómo desplegarlo

Pendiente.

## Convenciones

- Todo cambio entra por pull request.
- Commits con Conventional Commits.
- Ningún secreto en el repo; las credenciales viven en secretos de GitHub Actions y en `wrangler secret`.
