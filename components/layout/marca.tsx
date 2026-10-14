import Image from "next/image";
import Link from "next/link";
import { SITIO } from "@/content/sitio";

/** Isotipo y nombre, para encabezado y pie. Siempre sobre fondo marino. */
export function Marca() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label={`${SITIO.nombre}, inicio`}>
      <Image src="/logo.svg" alt="" width={42} height={42} className="size-10" priority />
      <span className="font-heading text-sm leading-[0.92] font-bold tracking-[0.08em] text-white uppercase">
        EL INGENIERO
        <br />
        <span className="text-accent">DE DATOS</span>
      </span>
    </Link>
  );
}
