import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";

export default function NoEncontrada() {
  return (
    <Seccion tono="marino" trama etiquetadoPor="titulo-404" className="py-32">
      <p className="text-accent text-xs font-medium tracking-[0.22em] uppercase">Error 404</p>
      <Titulo id="titulo-404" nivel={1} className="mt-6 max-w-3xl">
        Esta página no existe
      </Titulo>
      <p className="text-mist mt-7 max-w-xl text-lg leading-7">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <div className="mt-9">
        <BotonEnlace href="/" flecha>
          Volver al inicio
        </BotonEnlace>
      </div>
    </Seccion>
  );
}
