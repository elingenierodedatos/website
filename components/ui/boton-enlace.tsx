import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cx } from "@/lib/utilidades";

type Variante = "acento" | "marino" | "enlace";

const VARIANTES: Record<Variante, string> = {
  acento:
    "inline-flex items-center gap-3 bg-accent px-6 py-3.5 font-bold text-navy transition-colors hover:bg-accent-light",
  marino:
    "inline-flex items-center gap-3 bg-navy px-6 py-3.5 font-bold text-white transition-colors hover:bg-navy-soft",
  enlace:
    "inline-flex items-center gap-2 font-medium underline decoration-accent underline-offset-4 hover:text-accent-light",
};

interface Props {
  href: string;
  variante?: Variante;
  flecha?: boolean;
  className?: string;
  children: ReactNode;
}

function esExterno(href: string) {
  return /^https?:\/\//.test(href);
}

/** Enlace con aspecto de botón. Los externos abren en pestaña nueva. */
export function BotonEnlace({
  href,
  variante = "acento",
  flecha = false,
  className,
  children,
}: Props) {
  const clases = cx(VARIANTES[variante], className);
  const contenido = (
    <>
      {children}
      {flecha && <ArrowRight size={18} aria-hidden="true" />}
    </>
  );
  if (esExterno(href)) {
    return (
      <a href={href} className={clases} target="_blank" rel="noopener noreferrer">
        {contenido}
      </a>
    );
  }
  return (
    <Link href={href} className={clases}>
      {contenido}
    </Link>
  );
}
