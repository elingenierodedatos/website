import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Audiencia() {
  const { paraTi, noParaTi } = PYTHON_BASICO.audiencia;
  return (
    <Seccion tono="marino" ariaLabel="Para quién es el curso" className="lg:py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        {[paraTi, noParaTi].map((bloque) => (
          <div key={bloque.titulo}>
            <Titulo tamano="text-5xl leading-none">{bloque.titulo}</Titulo>
            <ul className="text-mist mt-8 list-disc space-y-5 pl-6 text-lg leading-7">
              {bloque.puntos.map((punto) => (
                <li key={punto}>{punto}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Seccion>
  );
}
