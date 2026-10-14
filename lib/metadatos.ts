import type { Metadata } from "next";
import { SITIO } from "@/content/sitio";

interface Opciones {
  titulo: string;
  descripcion: string;
  ruta: string;
  imagen?: string;
}

/** Metadatos consistentes para cada página: Open Graph, Twitter y canónica. */
export function metadatosDePagina({ titulo, descripcion, ruta, imagen }: Opciones): Metadata {
  const imagenFinal = imagen ?? "/marca/og-image-1200x630.png";
  return {
    title: titulo,
    description: descripcion,
    alternates: { canonical: ruta },
    openGraph: {
      title: titulo,
      description: descripcion,
      url: ruta,
      siteName: SITIO.nombre,
      locale: "es_MX",
      type: "website",
      images: [{ url: imagenFinal, width: 1200, height: 630, alt: titulo }],
    },
    twitter: {
      card: "summary_large_image",
      title: titulo,
      description: descripcion,
      images: [imagenFinal],
    },
  };
}
