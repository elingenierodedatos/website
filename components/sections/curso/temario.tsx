import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Temario() {
  const { temario } = PYTHON_BASICO;
  return (
    <Seccion etiquetadoPor="temario-titulo">
      <Titulo id="temario-titulo">{temario.titulo}</Titulo>
      <div className="border-navy-soft mt-10 overflow-x-auto border-y">
        <table className="w-full min-w-[720px] text-left">
          <caption className="sr-only">
            Lecciones del curso, qué se aprende en cada una y su duración
          </caption>
          <thead>
            <tr className="border-navy-soft text-navy-soft border-b text-xs font-medium tracking-[0.18em] uppercase">
              <th scope="col" className="px-4 py-4">
                #
              </th>
              <th scope="col" className="px-4 py-4">
                Lección
              </th>
              <th scope="col" className="px-4 py-4">
                Qué aprendes
              </th>
              <th scope="col" className="px-4 py-4">
                Tiempo
              </th>
            </tr>
          </thead>
          <tbody>
            {temario.lecciones.map((leccion) => (
              <tr
                key={leccion.numero}
                className="border-navy-soft text-navy border-b text-sm leading-6 last:border-0"
              >
                <td className="px-4 py-4 font-bold">{leccion.numero}</td>
                <td className="px-4 py-4 font-bold">{leccion.titulo}</td>
                <td className="px-4 py-4">{leccion.aprendes}</td>
                <td className="px-4 py-4 whitespace-nowrap">{leccion.tiempo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-navy mt-7 text-lg">{temario.cierre}</p>
    </Seccion>
  );
}
