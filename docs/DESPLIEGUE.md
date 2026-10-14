# Despliegue en Cloudflare

## Primera vez (una sola vez, desde tu máquina)

1. El dominio `elingenierodedatos.com` ya está en Cloudflare. Confirma que en DNS no haya registros `A`, `AAAA` o `CNAME` para la raíz ni para `www`; si los hay, bórralos. Los dominios personalizados de Workers crean los suyos.
2. Instala dependencias y entra a Cloudflare:

   ```bash
   pnpm install
   pnpm exec wrangler login
   ```

3. Publica:

   ```bash
   pnpm deploy
   ```

   `wrangler` crea el Worker `elingenierodedatos-web`, sube la carpeta `out/` y conecta los dos dominios de `wrangler.jsonc`. En uno o dos minutos el sitio responde con certificado.

4. Revisa `https://elingenierodedatos.com/`, `/cursos/python-basico/`, `/sitemap.xml` y una ruta inexistente (debe mostrar la página 404 del sitio).

## Publicación automática

Cada push a `main` corre `.github/workflows/deploy.yml`. Necesita dos secretos en GitHub → Settings → Secrets and variables → Actions:

| Secreto                 | De dónde sale                                                               |
| ----------------------- | --------------------------------------------------------------------------- |
| `CLOUDFLARE_ACCOUNT_ID` | Panel de Cloudflare → Workers & Pages → Overview, columna derecha           |
| `CLOUDFLARE_API_TOKEN`  | Mi perfil → API Tokens → Create Token → plantilla "Edit Cloudflare Workers" |

Crea también el _environment_ `produccion` en Settings → Environments; el workflow lo usa para agrupar despliegues.

## Después de la primera publicación

- Activa **Web Analytics** en Cloudflare para el dominio (gratis, sin cookies).
- Da de alta el sitio en **Google Search Console** con la propiedad de dominio y envía `https://elingenierodedatos.com/sitemap.xml`.
- Comprueba las tarjetas de enlace en LinkedIn Post Inspector y en X; usan `/marca/og-image-1200x630.png` y la del curso.

## Volver atrás

Cada despliegue crea una versión. En el panel de Workers → `elingenierodedatos-web` → Deployments se puede volver a cualquiera con un clic, o con `pnpm exec wrangler rollback`.
