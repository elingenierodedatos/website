import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Etiqueta } from "@/components/ui/etiqueta";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { INICIO } from "@/content/inicio";

/**
 * Sustituye al formulario de newsletter hasta que exista la herramienta de correo
 * (decisión pendiente: Kit o beehiiv). Ver docs/DECISIONES.md.
 */
export function Comunidad() {
  const { comunidad } = INICIO;
  return (
    <Seccion etiquetadoPor="comunidad-titulo">
      <div className="border-navy-soft grid gap-10 border p-7 md:grid-cols-[1fr_0.8fr] md:items-end md:p-12">
        <div>
          <Etiqueta className="text-navy">{comunidad.etiqueta}</Etiqueta>
          <Titulo
            id="comunidad-titulo"
            tamano="text-4xl sm:text-5xl leading-none"
            className="mt-3 max-w-xl"
          >
            {comunidad.titulo}
          </Titulo>
          <p className="text-navy mt-6 max-w-xl text-lg leading-7">{comunidad.texto}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
          {comunidad.acciones.map((accion, indice) => (
            <BotonEnlace
              key={accion.href}
              href={accion.href}
              variante={indice === 0 ? "acento" : "marino"}
            >
              {accion.etiqueta}
            </BotonEnlace>
          ))}
        </div>
      </div>
    </Seccion>
  );
}
