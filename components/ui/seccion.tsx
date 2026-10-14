import type { ReactNode } from "react";
import { Contenedor } from "@/components/ui/contenedor";
import { cx } from "@/lib/utilidades";

type Tono = "claro" | "marino" | "acento";

const TONOS: Record<Tono, string> = {
  claro: "bg-white text-navy",
  marino: "on-navy bg-navy text-white",
  acento: "bg-accent text-navy",
};

interface Props {
  id?: string;
  tono?: Tono;
  /** Trama de puntos sobre fondo marino. */
  trama?: boolean;
  etiquetadoPor?: string;
  ariaLabel?: string;
  className?: string;
  children: ReactNode;
}

/** Bloque de página con fondo, padding vertical y contenedor. */
export function Seccion({
  id,
  tono = "claro",
  trama = false,
  etiquetadoPor,
  ariaLabel,
  className,
  children,
}: Props) {
  return (
    <section
      id={id}
      aria-labelledby={etiquetadoPor}
      aria-label={ariaLabel}
      className={cx(TONOS[tono], trama && "dot-pattern")}
    >
      <Contenedor className={cx("py-20 lg:py-28", className)}>{children}</Contenedor>
    </section>
  );
}
