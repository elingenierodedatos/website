import { Check } from "lucide-react";
import { Contenedor } from "@/components/ui/contenedor";
import { INICIO } from "@/content/inicio";

export function Pilares() {
  return (
    <section
      className="on-navy border-navy-soft bg-navy border-y text-white"
      aria-label="Lo que incluye"
    >
      <Contenedor>
        <ul className="divide-navy-soft sm:divide-x-navy-soft grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {INICIO.pilares.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 py-5 text-sm font-bold tracking-wide uppercase sm:justify-center sm:py-7"
            >
              <Check size={17} className="text-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </Contenedor>
    </section>
  );
}
