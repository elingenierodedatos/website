import type { Metadata } from "next";
import { ComoFunciona } from "@/components/sections/inicio/como-funciona";
import { Comunidad } from "@/components/sections/inicio/comunidad";
import { Cursos } from "@/components/sections/inicio/cursos";
import { Hero } from "@/components/sections/inicio/hero";
import { Pilares } from "@/components/sections/inicio/pilares";
import { SITIO } from "@/content/sitio";
import { metadatosDePagina } from "@/lib/metadatos";

export const metadata: Metadata = {
  ...metadatosDePagina({ titulo: SITIO.titulo, descripcion: SITIO.descripcion, ruta: "/" }),
  // SITIO.titulo ya incluye el nombre de la marca: sin la plantilla del layout.
  title: { absolute: SITIO.titulo },
};

export default function PaginaInicio() {
  return (
    <>
      <Hero />
      <Pilares />
      <Cursos />
      <ComoFunciona />
      <Comunidad />
    </>
  );
}
