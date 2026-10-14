import type { Metadata } from "next";
import { Audiencia } from "@/components/sections/curso/audiencia";
import { Autor } from "@/components/sections/curso/autor";
import { Cierre } from "@/components/sections/curso/cierre";
import { HeroCurso } from "@/components/sections/curso/hero-curso";
import { Metodo } from "@/components/sections/curso/metodo";
import { Preguntas } from "@/components/sections/curso/preguntas";
import { Proyecto } from "@/components/sections/curso/proyecto";
import { SinIa } from "@/components/sections/curso/sin-ia";
import { Temario } from "@/components/sections/curso/temario";
import { DatosEstructurados } from "@/components/ui/datos-estructurados";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";
import { curso, preguntasFrecuentes } from "@/lib/datos-estructurados";
import { metadatosDePagina } from "@/lib/metadatos";

const RUTA = "/cursos/python-basico/";

export const metadata: Metadata = metadatosDePagina({
  titulo: PYTHON_BASICO.metadatos.titulo,
  descripcion: PYTHON_BASICO.metadatos.descripcion,
  ruta: RUTA,
  imagen: PYTHON_BASICO.metadatos.imagen,
});

export default function PaginaPythonBasico() {
  return (
    <>
      <HeroCurso />
      <Proyecto />
      <Metodo />
      <Temario />
      <Audiencia />
      <SinIa />
      <Autor />
      <Seccion id="preguntas" etiquetadoPor="preguntas-titulo" className="max-w-5xl">
        <Titulo id="preguntas-titulo">Preguntas frecuentes</Titulo>
        <div className="mt-10">
          <Preguntas preguntas={PYTHON_BASICO.preguntas} />
        </div>
      </Seccion>
      <Cierre />
      <DatosEstructurados
        datos={curso({
          nombre: "Python básico para ingeniería de datos",
          descripcion: PYTHON_BASICO.metadatos.descripcion,
          ruta: RUTA,
        })}
      />
      <DatosEstructurados datos={preguntasFrecuentes(PYTHON_BASICO.preguntas)} />
    </>
  );
}
