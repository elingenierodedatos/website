import { FormularioRegistro } from "@/components/sections/curso/formulario-registro";
import { Etiqueta } from "@/components/ui/etiqueta";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

/** Tarjeta de registro: el punto más fuerte de la landing. Todos los botones llevan aquí. */
export function Registro() {
  const { registro } = PYTHON_BASICO;
  return (
    <Seccion id="registro" etiquetadoPor="registro-titulo" className="max-w-5xl scroll-mt-20">
      <div className="on-navy bg-navy grid gap-10 p-8 text-white sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Etiqueta className="text-accent">{registro.etiqueta}</Etiqueta>
          <Titulo id="registro-titulo" className="mt-6">
            {registro.titulo}
          </Titulo>
          <p className="text-mist mt-7 text-lg leading-7 text-pretty">{registro.texto}</p>
        </div>
        <FormularioRegistro />
      </div>
    </Seccion>
  );
}
