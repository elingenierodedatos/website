import { Check } from "lucide-react";
import { BotonEnlace } from "@/components/ui/boton-enlace";
import { Etiqueta } from "@/components/ui/etiqueta";
import { Seccion } from "@/components/ui/seccion";
import { Titulo } from "@/components/ui/titulo";
import { INICIO } from "@/content/inicio";

export function Hero() {
  const { hero } = INICIO;
  return (
    <Seccion tono="marino" trama etiquetadoPor="hero-titulo" className="border-navy-soft border-t">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-3xl">
          <Titulo id="hero-titulo" nivel={1}>
            {hero.titulo} <span className="text-accent">{hero.tituloDestacado}</span>
          </Titulo>
          <p className="text-mist mt-7 max-w-2xl text-lg leading-7 text-pretty">{hero.subtitulo}</p>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <BotonEnlace href={hero.accionPrincipal.href} flecha>
              {hero.accionPrincipal.etiqueta}
            </BotonEnlace>
            <BotonEnlace href={hero.accionSecundaria.href} variante="enlace" className="text-white">
              {hero.accionSecundaria.etiqueta}
            </BotonEnlace>
          </div>
        </div>
        <div className="border-navy-soft hidden border p-8 lg:block" aria-hidden="true">
          <div className="border-navy-soft text-mist flex items-center justify-between border-b pb-5">
            <Etiqueta>{hero.terminal.etiqueta}</Etiqueta>
            <Etiqueta className="text-accent">Ejemplo</Etiqueta>
          </div>
          <div className="text-mist pt-8 font-mono text-sm leading-8">
            {hero.terminal.lineas.map((linea) => (
              <p key={linea}>
                <span className="text-accent">$</span> {linea}
              </p>
            ))}
            <p className="flex items-center gap-2 text-white">
              <Check size={16} className="text-accent" aria-hidden="true" />
              {hero.terminal.resultado}
            </p>
          </div>
        </div>
      </div>
    </Seccion>
  );
}
