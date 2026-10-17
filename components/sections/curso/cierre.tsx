import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Cierre() {
  const { cierre, anclaRegistro } = PYTHON_BASICO;
  return (
    <Seccion tono="acento" etiquetadoPor="cierre-titulo" className="lg:py-24">
      <Titulo
        id="cierre-titulo"
        tamano="text-[clamp(2.5rem,13vw,3.75rem)] sm:text-8xl leading-none"
      >
        {cierre.titulo}
      </Titulo>
      <p className="mt-7 text-xl">{cierre.texto}</p>
      <div className="mt-9">
        <BotonEnlace href={anclaRegistro} variante="marino" flecha>
          {cierre.accion}
        </BotonEnlace>
      </div>
      <p className="mt-6 text-sm">{cierre.nota}</p>
    </Seccion>
  );
}
