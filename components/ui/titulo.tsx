import type { ReactNode } from "react";
import { cx } from "@/lib/utilidades";

interface Props {
  id?: string;
  nivel?: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
}

/** Títulos de sección en Barlow Condensed, mayúsculas, como manda la marca. */
export function Titulo({ id, nivel = 2, className, children }: Props) {
  const Etiqueta = `h${nivel}` as const;
  const tamano = {
    1: "text-5xl sm:text-6xl lg:text-8xl leading-[0.96] tracking-tight text-balance",
    2: "text-5xl sm:text-6xl leading-none",
    3: "text-3xl leading-none",
  }[nivel];
  return (
    <Etiqueta id={id} className={cx("font-heading font-bold uppercase", tamano, className)}>
      {children}
    </Etiqueta>
  );
}
