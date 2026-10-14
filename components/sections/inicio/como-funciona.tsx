import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { INICIO } from "@/content/inicio";

export function ComoFunciona() {
  const { comoFunciona } = INICIO;
  return (
    <Seccion
      id="como-funciona"
      tono="marino"
      etiquetadoPor="como-funciona-titulo"
      className="lg:py-24"
    >
      <Titulo id="como-funciona-titulo">{comoFunciona.titulo}</Titulo>
      <ol className="border-navy-soft mt-14 grid border-y md:grid-cols-3">
        {comoFunciona.pasos.map((paso, indice) => (
          <li
            key={paso}
            className="border-navy-soft border-b py-8 last:border-0 md:border-r md:border-b-0 md:px-8 md:first:pl-0 md:last:border-0"
          >
            <span
              className="text-accent text-sm font-medium tracking-[0.16em] uppercase"
              aria-hidden="true"
            >
              {String(indice + 1).padStart(2, "0")}
            </span>
            <p className="font-heading mt-8 max-w-xs text-2xl leading-tight font-bold uppercase">
              {paso}
            </p>
          </li>
        ))}
      </ol>
    </Seccion>
  );
}
