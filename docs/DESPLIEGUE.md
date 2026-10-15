# Despliegue en Cloudflare

El sitio se publica solo: cada push a `main` corre `.github/workflows/deploy.yml`, que instala, compila, verifica y sube la carpeta `out/` al Worker `elingenierodedatos-web`. No hace falta `wrangler login` en ninguna máquina.

## Configuración (una sola vez)

1. **DNS.** El dominio `elingenierodedatos.com` ya está en Cloudflare. En DNS no debe haber registros `A`, `AAAA` ni `CNAME` para la raíz ni para `www`; los dominios personalizados de Workers crean los suyos al publicar.
2. **Environment.** En GitHub → Settings → Environments crea `produccion`. Recomendado: en "Deployment branches" permite solo `main`.
3. **Secretos**, dentro de ese environment (no en los secretos del repositorio; el workflow los lee del environment):

   | Secreto                 | De dónde sale                                                                                     |
   | ----------------------- | ------------------------------------------------------------------------------------------------- |
   | `CLOUDFLARE_ACCOUNT_ID` | La cadena de 32 caracteres que sigue a `dash.cloudflare.com/` en la URL del panel                 |
   | `CLOUDFLARE_API_TOKEN`  | Mi perfil → API Tokens → Create Token → plantilla "Edit Cloudflare Workers", con la zona incluida |

4. Haz push a `main` (o Actions → Deploy → "Run workflow"). En dos o tres minutos el sitio responde con certificado.
5. Revisa `https://elingenierodedatos.com/`, `/cursos/python-basico/`, `/sitemap.xml` y una ruta inexistente (debe mostrar la página 404 del sitio).

Si el paso "Publicar en Cloudflare Workers" falla diciendo que falta `CLOUDFLARE_API_TOKEN`, el secreto está vacío o en el lugar equivocado; el resto del flujo no depende de Cloudflare.

## Publicar desde tu máquina (solo en emergencia)

```bash
pnpm exec wrangler login
pnpm deploy
```

Hace lo mismo que el workflow. Úsalo solo si GitHub Actions no está disponible.

## Después de la primera publicación

- Activa **Web Analytics** en Cloudflare para el dominio (gratis, sin cookies).
- Da de alta el sitio en **Google Search Console** con la propiedad de dominio y envía `https://elingenierodedatos.com/sitemap.xml`.
- Comprueba las tarjetas de enlace en LinkedIn Post Inspector y en X; usan `/marca/og-image-1200x630.png` y la del curso.

## Volver atrás

Cada despliegue crea una versión. En el panel de Workers → `elingenierodedatos-web` → Deployments se puede volver a cualquiera con un clic, o con `pnpm exec wrangler rollback`.
