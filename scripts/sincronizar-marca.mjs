/**
 * Descarga los assets de marca desde el repositorio público `brand` a public/marca/.
 *
 * El repo brand es la fuente de verdad de logos e imágenes; este sitio no guarda
 * copias para no tener dos versiones. Corre solo antes de cada build (prebuild).
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

const BASE = "https://raw.githubusercontent.com/elingenierodedatos/brand/main";
const DESTINO = join(process.cwd(), "public", "marca");

const ARCHIVOS = [
  "logo/eid-logo-horizontal-oscuro.svg",
  "logo/eid-icono-app.svg",
  "png/logo/eid-icono-app.png",
  "png/social/og-image-1200x630.png",
  "png/social/curso-python-og-1200x630.png",
  "png/social/curso-python-portada-1920x1080.png",
  "favicon/favicon.ico",
  "favicon/favicon-32.png",
  "favicon/favicon-180.png",
  "favicon/favicon-192.png",
  "favicon/favicon-512.png",
];

const forzar = process.argv.includes("--forzar");

async function existe(ruta) {
  try {
    await access(ruta);
    return true;
  } catch {
    return false;
  }
}

async function descargar(relativo) {
  const nombre = relativo.split("/").at(-1);
  const destino = join(DESTINO, nombre);
  if (!forzar && (await existe(destino))) return `${nombre}: ya estaba`;
  const respuesta = await fetch(`${BASE}/${relativo}`);
  if (!respuesta.ok) throw new Error(`${relativo}: HTTP ${respuesta.status}`);
  await writeFile(destino, Buffer.from(await respuesta.arrayBuffer()));
  return `${nombre}: descargado`;
}

await mkdir(DESTINO, { recursive: true });
const resultados = await Promise.allSettled(ARCHIVOS.map(descargar));
let fallos = 0;
for (const r of resultados) {
  if (r.status === "fulfilled") console.log(`  ${r.value}`);
  else {
    fallos += 1;
    console.error(`  ERROR ${r.reason.message}`);
  }
}
if (fallos) {
  console.error(`\n${fallos} assets no se pudieron descargar. Revisa la conexión o el repo brand.`);
  process.exit(1);
}
console.log(`\nAssets de marca listos en public/marca/ (${ARCHIVOS.length}).`);
