import { ChevronRight } from "lucide-react";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Proyecto() {
  const { proyecto } = PYTHON_BASICO;
  return (
    <Seccion id="curso" etiquetadoPor="proyecto-titulo">
      <Titulo id="proyecto-titulo" className="max-w-3xl">
        {proyecto.titulo}
      </Titulo>
      <p className="text-navy mt-8 max-w-4xl text-lg leading-8">{proyecto.texto}</p>
      <ol className="border-navy-soft mt-14 grid border-y sm:grid-cols-4">
        {proyecto.etapas.map((etapa, i) => (
          <li
            key={etapa}
            className="border-navy-soft flex items-center gap-4 border-b py-6 last:border-0 sm:border-r sm:border-b-0 sm:px-6 sm:first:pl-0 sm:last:border-0"
          >
            <span className="text-navy-soft text-xs font-medium tracking-[0.2em] uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="font-heading text-navy text-2xl font-bold uppercase">{etapa}</span>
            {i < proyecto.etapas.length - 1 && (
              <ChevronRight className="text-navy-soft ml-auto hidden sm:block" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
