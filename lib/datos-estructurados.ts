import { REDES, SITIO } from "@/content/sitio";
import type { PreguntaFrecuente } from "@/content/cursos/python-basico";

/** Datos estructurados (schema.org) de la organización, para todas las páginas. */
export function organizacion() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITIO.nombre,
    url: SITIO.dominio,
    logo: `${SITIO.dominio}/marca/eid-icono-app.png`,
    sameAs: Object.values(REDES).map((red) => red.url),
  };
}

interface DatosCurso {
  nombre: string;
  descripcion: string;
  ruta: string;
}

/** Datos estructurados de un curso gratuito. */
export function curso({ nombre, descripcion, ruta }: DatosCurso) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: nombre,
    description: descripcion,
    url: `${SITIO.dominio}${ruta}`,
    inLanguage: "es",
    isAccessibleForFree: true,
    provider: { "@type": "Organization", name: SITIO.nombre, url: SITIO.dominio },
    offers: { "@type": "Offer", price: "0", priceCurrency: "MXN" },
  };
}

/** Datos estructurados de preguntas frecuentes. */
export function preguntasFrecuentes(preguntas: readonly PreguntaFrecuente[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: preguntas.map((p) => ({
      "@type": "Question",
      name: p.pregunta,
      acceptedAnswer: { "@type": "Answer", text: p.respuesta },
    })),
  };
}
