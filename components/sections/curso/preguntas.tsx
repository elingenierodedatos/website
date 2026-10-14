"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { PreguntaFrecuente } from "@/content/cursos/python-basico";
import { cx } from "@/lib/utilidades";

/** Acordeón accesible: una pregunta abierta a la vez, con botones reales. */
export function Preguntas({ preguntas }: { preguntas: readonly PreguntaFrecuente[] }) {
  const [abierta, setAbierta] = useState<number | null>(null);

  return (
    <div className="border-navy-soft border-t">
      {preguntas.map((item, indice) => {
        const estaAbierta = abierta === indice;
        const idPanel = `faq-panel-${indice}`;
        return (
          <div key={item.pregunta} className="border-navy-soft border-b">
            <h3>
              <button
                type="button"
                className="font-heading text-navy flex w-full items-center justify-between gap-6 py-5 text-left text-2xl font-bold uppercase"
                aria-expanded={estaAbierta}
                aria-controls={idPanel}
                onClick={() => setAbierta(estaAbierta ? null : indice)}
              >
                <span>{item.pregunta}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cx("shrink-0 transition-transform", estaAbierta && "rotate-180")}
                />
              </button>
            </h3>
            <div id={idPanel} hidden={!estaAbierta} className="max-w-3xl pb-6">
              <p className="text-navy text-base leading-7">{item.respuesta}</p>
              {"enlace" in item && item.enlace && (
                <a
                  href={item.enlace.href}
                  className="text-navy decoration-accent mt-3 inline-block font-bold underline underline-offset-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.enlace.texto}
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
