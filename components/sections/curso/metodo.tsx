import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Metodo() {
  const { metodo } = PYTHON_BASICO;
  return (
    <Seccion tono="marino" etiquetadoPor="metodo-titulo">
      <Titulo id="metodo-titulo">{metodo.titulo}</Titulo>
      <ol className="border-navy-soft mt-14 grid border-y md:grid-cols-4">
        {metodo.pasos.map((paso, i) => (
          <li
            key={paso}
            className="border-navy-soft border-b py-8 md:border-r md:border-b-0 md:px-6 md:first:pl-0 md:last:border-0"
          >
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="font-heading mt-7 text-2xl leading-tight font-bold uppercase">{paso}</p>
          </li>
        ))}
      </ol>
      <p className="text-mist mt-10 text-lg">{metodo.cierre}</p>
    </Seccion>
  );
}
