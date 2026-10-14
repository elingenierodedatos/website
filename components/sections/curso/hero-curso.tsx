import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Etiqueta } from "@/components/ui/etiqueta";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function HeroCurso() {
  const { hero, repo, videos } = PYTHON_BASICO;
  return (
    <Seccion tono="marino" trama etiquetadoPor="hero-titulo" className="border-navy-soft border-t">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Etiqueta className="text-accent">{hero.etiqueta}</Etiqueta>
          <Titulo id="hero-titulo" nivel={1} className="mt-6 max-w-3xl">
            {hero.titulo}
          </Titulo>
          <p className="text-mist mt-7 max-w-2xl text-lg leading-7 text-pretty">{hero.subtitulo}</p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <BotonEnlace href={repo} flecha>
              {hero.accionPrincipal}
            </BotonEnlace>
            <BotonEnlace href={videos} variante="enlace" className="text-white">
              {hero.accionSecundaria}
            </BotonEnlace>
          </div>
          <p className="text-mist mt-7 text-sm">{hero.confianza}</p>
        </div>
        <div className="border-navy-soft bg-navy-soft border p-6 lg:p-8" aria-hidden="true">
          <div className="text-mist overflow-x-auto font-mono text-sm leading-8 whitespace-nowrap">
            <p>
              <span className="text-accent">$</span> {hero.terminal.comando}
            </p>
            <p className="text-white">{hero.terminal.salida}</p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
