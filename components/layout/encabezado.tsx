import { Marca } from "@/components/layout/marca";
import { MenuMovil } from "@/components/layout/menu-movil";
import { Contenedor } from "@/components/ui/contenedor";
import { ACCION_PRINCIPAL, NAVEGACION } from "@/content/sitio";

/** Encabezado común a todas las páginas. */
export function Encabezado() {
  return (
    <div className="on-navy bg-navy text-white">
      <Contenedor className="relative flex items-center justify-between py-5">
        <Marca />
        <nav
          className="text-mist hidden items-center gap-8 text-sm font-medium md:flex"
          aria-label="Navegación principal"
        >
          {NAVEGACION.map((enlace) => (
            <a
              key={enlace.href}
              href={enlace.href}
              className="transition-colors hover:text-white"
              {...("externo" in enlace && enlace.externo
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {enlace.etiqueta}
            </a>
          ))}
        </nav>
        <a
          href={ACCION_PRINCIPAL.href}
          className="border-accent bg-accent text-navy hover:bg-accent-light hidden border px-5 py-2.5 text-sm font-bold transition-colors md:block"
        >
          {ACCION_PRINCIPAL.etiqueta}
        </a>
        <MenuMovil />
      </Contenedor>
    </div>
  );
}
