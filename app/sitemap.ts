import type { MetadataRoute } from "next";
import { CURSOS } from "@/content/cursos";
import { SITIO } from "@/content/sitio";

export const dynamic = "force-static";

/** Mapa del sitio: inicio más cada curso con landing. */
export default function sitemap(): MetadataRoute.Sitemap {
  const cursos = CURSOS.filter((c) => c.href).map((c) => ({
    url: `${SITIO.dominio}${c.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [
    { url: `${SITIO.dominio}/`, changeFrequency: "weekly", priority: 1 },
    ...cursos,
    { url: `${SITIO.dominio}/privacidad/`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
