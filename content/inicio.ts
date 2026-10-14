/** Contenido de la página de inicio. Narrativa de marca aprobada (Notion → 00 Marca). */
import { REDES } from "@/content/sitio";

export const INICIO = {
  hero: {
    titulo: "Aprende ingeniería de datos construyendo",
    tituloDestacado: "tu portafolio",
    subtitulo:
      "Para quien quiere ensuciarse las manos y demostrar de qué es capaz. Cada curso es un proyecto real que termina en tu GitHub, con pruebas que califican tu avance.",
    accionPrincipal: { etiqueta: "Empieza gratis con Python", href: "/cursos/python-basico/" },
    accionSecundaria: { etiqueta: "Ver cómo funciona", href: "#como-funciona" },
    terminal: {
      etiqueta: "CURSO 01 / PYTHON BÁSICO",
      lineas: ["git clone mi-curso-python", "pytest lecciones/leccion_01_variables_y_texto"],
      resultado: "29 pruebas superadas",
    },
  },
  pilares: ["Proyectos reales", "Repos en GitHub", "Calificación automática"],
  comoFunciona: {
    titulo: "Cómo funciona",
    pasos: [
      "Crea tu repo desde la plantilla del curso.",
      "Resuelve cada lección y haz push.",
      "Las pruebas corren solas y te dicen cómo vas.",
    ],
  },
  comunidad: {
    etiqueta: "Comunidad",
    titulo: "Una lección nueva cada semana",
    texto:
      "Los videos salen en YouTube y las dudas se resuelven en Discord. Entra, preséntate y empieza por la lección 0.",
    acciones: [
      { etiqueta: "Suscribirme en YouTube", href: REDES.youtube.url },
      { etiqueta: "Entrar a Discord", href: REDES.discord.url },
    ],
  },
} as const;
