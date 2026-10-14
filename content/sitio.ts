/**
 * Datos globales del sitio: marca, navegación, redes y metadatos por defecto.
 *
 * Todo texto visible vive aquí o en content/cursos/*. Los componentes solo pintan.
 */

export const SITIO = {
  nombre: "EL INGENIERO DE DATOS",
  dominio: "https://elingenierodedatos.com",
  lema: "Ensúciate las manos con datos reales.",
  titulo: "EL INGENIERO DE DATOS | Aprende ingeniería de datos construyendo tu portafolio",
  descripcion:
    "Cursos prácticos de ingeniería de datos en español. Cada curso es un proyecto real que termina en tu GitHub, con pruebas que califican tu avance.",
  idioma: "es-MX",
  anioFundacion: 2026,
} as const;

export const REDES = {
  youtube: { nombre: "YouTube", url: "https://www.youtube.com/@elingenierodedatos" },
  github: { nombre: "GitHub", url: "https://github.com/elingenierodedatos" },
  linkedin: { nombre: "LinkedIn", url: "https://www.linkedin.com/company/elingenierodedatos" },
  discord: { nombre: "Discord", url: "https://discord.gg/tWtUXnAMuQ" },
  spotify: { nombre: "Spotify", url: "https://open.spotify.com/show/5qK2yRH4tUIdiMmW2QcTVC" },
  x: { nombre: "X", url: "https://x.com/elingededatos" },
  instagram: { nombre: "Instagram", url: "https://www.instagram.com/elingenierodedatos" },
  tiktok: { nombre: "TikTok", url: "https://www.tiktok.com/@elingenierodedatos" },
} as const;

export type RedSocial = keyof typeof REDES;

/** Redes que aparecen en el pie de página, en este orden. */
export const REDES_EN_PIE: RedSocial[] = ["youtube", "github", "linkedin", "discord"];

/** Navegación principal. Las secciones que aún no existen (blog) no se listan. */
export const NAVEGACION = [
  { etiqueta: "Cursos", href: "/#cursos" },
  { etiqueta: "Comunidad", href: REDES.discord.url, externo: true },
] as const;

export const ACCION_PRINCIPAL = { etiqueta: "Ver cursos", href: "/#cursos" } as const;
