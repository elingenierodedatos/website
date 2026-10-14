import { ArrowRight } from "lucide-react";
import { Etiqueta } from "@/components/ui/etiqueta";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { CURSOS, ETIQUETA_ESTADO } from "@/content/cursos";
import { REDES } from "@/content/sitio";
import { cx } from "@/lib/utilidades";

export function Cursos() {
  return (
    <Seccion id="cursos" etiquetadoPor="cursos-titulo">
      <div className="border-navy-soft border-b pb-8">
        <Titulo id="cursos-titulo">Cursos</Titulo>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {CURSOS.map((curso, indice) => {
          const destacado = Boolean(curso.destacado);
          const secundario = destacado ? "text-mist" : "text-navy";
          const href = curso.href ?? REDES.youtube.url;
          const externo = !curso.href;
          return (
            <article
              key={curso.slug}
              className={cx(
                "flex min-h-[350px] flex-col border p-6",
                destacado
                  ? "on-navy border-navy bg-navy text-white"
                  : "border-navy-soft text-navy bg-white",
              )}
            >
              <div className="flex items-center justify-between">
                <Etiqueta className={destacado ? "text-accent" : "text-navy"}>
                  {ETIQUETA_ESTADO[curso.estado]}
                </Etiqueta>
                <Etiqueta className={secundario}>{curso.nivel}</Etiqueta>
              </div>
              <div className="mt-auto">
                <Etiqueta className={secundario}>
                  {String(indice + 1).padStart(2, "0")} / Curso
                </Etiqueta>
                <Titulo nivel={3} className="mt-3">
                  {curso.titulo}
                </Titulo>
                <p className={cx("mt-4 text-sm leading-6", secundario)}>{curso.descripcion}</p>
                <a
                  href={href}
                  className={cx(
                    "mt-7 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4",
                    destacado ? "decoration-accent text-white" : "text-navy decoration-navy",
                  )}
                  {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {curso.href ? "Comenzar curso" : "Avisarme en YouTube"}
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Seccion>
  );
}
