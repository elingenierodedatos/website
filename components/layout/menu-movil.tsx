"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { ACCION_PRINCIPAL, NAVEGACION } from "@/content/sitio";

/** Menú desplegable para pantallas chicas. Se cierra con Escape y al navegar. */
export function MenuMovil() {
  const [abierto, setAbierto] = useState(false);
  const idMenu = useId();

  useEffect(() => {
    if (!abierto) return;
    const cerrar = (evento: KeyboardEvent) => {
      if (evento.key === "Escape") setAbierto(false);
    };
    window.addEventListener("keydown", cerrar);
    return () => window.removeEventListener("keydown", cerrar);
  }, [abierto]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex size-11 items-center justify-center text-white"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
        aria-controls={idMenu}
        onClick={() => setAbierto((valor) => !valor)}
      >
        {abierto ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
      </button>

      {abierto && (
        <nav
          id={idMenu}
          aria-label="Navegación principal"
          className="border-navy-soft bg-navy absolute inset-x-0 top-full z-10 border-t px-6 pt-2 pb-6"
        >
          <ul className="flex flex-col">
            {NAVEGACION.map((enlace) => (
              <li key={enlace.href} className="border-navy-soft border-b">
                <a
                  href={enlace.href}
                  onClick={() => setAbierto(false)}
                  className="block py-4 text-base font-medium text-white"
                  {...("externo" in enlace && enlace.externo
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {enlace.etiqueta}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={ACCION_PRINCIPAL.href}
            onClick={() => setAbierto(false)}
            className="bg-accent text-navy hover:bg-accent-light mt-6 block px-5 py-3.5 text-center font-bold transition-colors"
          >
            {ACCION_PRINCIPAL.etiqueta}
          </a>
        </nav>
      )}
    </div>
  );
}
