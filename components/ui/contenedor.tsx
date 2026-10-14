import type { ReactNode } from "react";
import { cx } from "@/lib/utilidades";

/** Ancho máximo y márgenes laterales comunes a todas las secciones. */
export function Contenedor({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto max-w-7xl px-6 lg:px-10", className)}>{children}</div>;
}
