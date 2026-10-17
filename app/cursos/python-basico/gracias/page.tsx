import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";
import { metadatosDePagina } from "@/lib/metadatos";

export const metadata: Metadata = {
  ...metadatosDePagina({
    titulo: PYTHON_BASICO.gracias.metadatos.titulo,
    descripcion: PYTHON_BASICO.gracias.metadatos.descripcion,
    ruta: "/cursos/python-basico/gracias/",
  }),
  robots: { index: false, follow: false },
};

/** Página a la que redirige el Worker tras un registro correcto. */
export default function PaginaGracias() {
  const { gracias } = PYTHON_BASICO;
  return (
    <Seccion etiquetadoPor="gracias-titulo" className="max-w-3xl lg:py-32">
      <Titulo id="gracias-titulo" nivel={1}>
        {gracias.titulo}
      </Titulo>
      <p className="text-navy mt-8 max-w-[56ch] text-lg leading-8">{gracias.texto}</p>
      <Titulo nivel={2} tamano="text-3xl leading-none" className="mt-14">
        {gracias.subtitulo}
      </Titulo>
      <ul className="text-navy mt-6 flex max-w-[56ch] list-disc flex-col gap-3 pl-6 text-lg leading-8">
        {gracias.puntos.map((punto) => (
          <li key={punto}>{punto}</li>
        ))}
      </ul>
      <BotonEnlace
        href="/cursos/python-basico/"
        variante="enlace"
        className="text-navy mt-14 font-bold"
      >
        <ArrowLeft size={18} aria-hidden="true" />
        {gracias.volver}
      </BotonEnlace>
    </Seccion>
  );
}
