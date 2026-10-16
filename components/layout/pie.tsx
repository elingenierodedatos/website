import { Marca } from "@/components/layout/marca";
import { IconoRed } from "@/components/icons/redes";
import { Contenedor } from "@/components/ui/contenedor";
import Link from "next/link";
import { ENLACES_LEGALES, REDES, REDES_EN_PIE, SITIO } from "@/content/sitio";

/** Pie de página común: marca, lema, redes y aviso legal. */
export function Pie() {
  return (
    <footer id="comunidad" className="on-navy bg-navy text-white">
      <Contenedor className="flex flex-col gap-10 py-12">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Marca />
            <p className="text-mist mt-4 text-sm">{SITIO.lema}</p>
          </div>
          <ul
            className="text-mist flex flex-wrap gap-x-6 gap-y-3 text-sm"
            aria-label="Redes sociales"
          >
            {REDES_EN_PIE.map((clave) => {
              const red = REDES[clave];
              return (
                <li key={clave}>
                  <a
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-1 hover:text-white"
                  >
                    <IconoRed red={clave} />
                    {red.nombre}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="border-navy-soft text-mist flex flex-wrap items-center justify-between gap-4 border-t pt-5 text-xs">
          <span>
            © {SITIO.anioFundacion} {SITIO.nombre}
          </span>
          <ul className="flex gap-5" aria-label="Enlaces legales">
            {ENLACES_LEGALES.map((enlace) => (
              <li key={enlace.href}>
                <Link href={enlace.href} className="py-1 hover:text-white">
                  {enlace.etiqueta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Contenedor>
    </footer>
  );
}
