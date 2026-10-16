import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function SinIa() {
  const { sinIaSeccion } = PYTHON_BASICO;
  return (
    <Seccion
      tono="marino"
      etiquetadoPor="sin-ia-titulo"
      className="border-navy-soft max-w-4xl border-t"
    >
      <Titulo id="sin-ia-titulo">{sinIaSeccion.titulo}</Titulo>
      <p className="text-mist mt-8 text-lg leading-8">{sinIaSeccion.texto}</p>
    </Seccion>
  );
}
