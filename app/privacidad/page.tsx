import type { Metadata } from "next";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { PRIVACIDAD } from "@/content/privacidad";
import { metadatosDePagina } from "@/lib/metadatos";

export const metadata: Metadata = metadatosDePagina({
  titulo: PRIVACIDAD.metadatos.titulo,
  descripcion: PRIVACIDAD.metadatos.descripcion,
  ruta: "/privacidad/",
});

const PARRAFO = "mt-5 text-lg leading-8";
const LISTA = "mt-5 flex list-disc flex-col gap-3 pl-6 text-lg leading-8";

function Parrafos({ textos }: { textos?: readonly string[] }) {
  return textos?.map((texto) => (
    <p key={texto} className={PARRAFO}>
      {texto}
    </p>
  ));
}

function Lista({ puntos }: { puntos?: readonly string[] }) {
  if (!puntos) return null;
  return (
    <ul className={LISTA}>
      {puntos.map((punto) => (
        <li key={punto}>{punto}</li>
      ))}
    </ul>
  );
}

export default function PaginaPrivacidad() {
  return (
    <Seccion etiquetadoPor="privacidad-titulo" className="max-w-3xl">
      <article className="text-navy max-w-[56ch]">
        <Titulo id="privacidad-titulo" nivel={1}>
          {PRIVACIDAD.titulo}
        </Titulo>
        <p className="text-navy-soft mt-6 text-sm">
          Última actualización: {PRIVACIDAD.actualizado} · Versión {PRIVACIDAD.version}
        </p>
        <p className="mt-8 text-lg leading-8">{PRIVACIDAD.intro}</p>
        {PRIVACIDAD.secciones.map((seccion) => (
          <section key={seccion.id} aria-labelledby={seccion.id} className="mt-14">
            <Titulo id={seccion.id} nivel={3}>
              {seccion.titulo}
            </Titulo>
            <Parrafos textos={"parrafos" in seccion ? seccion.parrafos : undefined} />
            <Lista puntos={"lista" in seccion ? seccion.lista : undefined} />
            {"subsecciones" in seccion &&
              seccion.subsecciones.map((sub) => (
                <div key={sub.titulo} className="mt-8">
                  <h3 className="text-navy text-lg font-bold">{sub.titulo}</h3>
                  <Lista puntos={sub.lista} />
                </div>
              ))}
            <Parrafos textos={"parrafosDespues" in seccion ? seccion.parrafosDespues : undefined} />
          </section>
        ))}
      </article>
    </Seccion>
  );
}
