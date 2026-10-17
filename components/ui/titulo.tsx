import type { ReactNode } from "react";
import { cx } from "@/lib/utilidades";

interface Props {
  id?: string;
  nivel?: 1 | 2 | 3;
  /**
   * Clases de tamaño que reemplazan las del nivel. Va aparte de `className` porque
   * `cx` solo concatena: dos clases de tamaño juntas no se sobrescriben, gana la que
   * Tailwind emita después en el CSS, sin importar el orden en que se escriban.
   */
  tamano?: string;
  className?: string;
  children: ReactNode;
}

/**
 * Tamaño por nivel. Por debajo de `sm` h1 y h2 son fluidos para que la palabra más
 * larga de un título ("CONSTRUYENDO", "FRECUENTES") quepa desde 320 px de ancho. El h2
 * solo se reduce por debajo de 400 px; desde ahí mide los mismos 48 px de siempre.
 */
const TAMANOS = {
  1: "text-[clamp(2rem,10.2vw,3rem)] sm:text-6xl lg:text-8xl leading-[0.96] tracking-tight text-balance",
  2: "text-[clamp(2.25rem,12vw,3rem)] sm:text-6xl leading-none",
  3: "text-3xl leading-none",
} as const;

/** Títulos de sección en Barlow Condensed, mayúsculas, como manda la marca. */
export function Titulo({ id, nivel = 2, tamano, className, children }: Props) {
  const Etiqueta = `h${nivel}` as const;
  return (
    <Etiqueta
      id={id}
      className={cx("font-heading font-bold uppercase", tamano ?? TAMANOS[nivel], className)}
    >
      {children}
    </Etiqueta>
  );
}
