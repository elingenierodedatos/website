import type { ReactNode } from "react";
import { cx } from "@/lib/utilidades";

/** Texto pequeño en mayúsculas con tracking amplio: etiquetas y numeraciones. */
export function Etiqueta({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <p className={cx("text-xs font-medium tracking-[0.22em] uppercase", className)}>{children}</p>
  );
}
