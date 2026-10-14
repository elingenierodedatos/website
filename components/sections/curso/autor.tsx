import Image from "next/image";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

export function Autor() {
  const { autor } = PYTHON_BASICO;
  return (
    <Seccion etiquetadoPor="autor-titulo">
      <div className="grid gap-10 lg:grid-cols-[180px_1fr]">
        <Image
          src={autor.imagen}
          alt=""
          width={180}
          height={180}
          className="border-navy-soft size-36 rounded-full border object-cover"
        />
        <div>
          <Titulo id="autor-titulo">{autor.titulo}</Titulo>
          <p className="text-navy mt-8 max-w-3xl text-lg leading-8">{autor.texto}</p>
        </div>
      </div>
    </Seccion>
  );
}
