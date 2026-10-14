import { ComoFunciona } from "@/components/sections/inicio/como-funciona";
import { Comunidad } from "@/components/sections/inicio/comunidad";
import { Cursos } from "@/components/sections/inicio/cursos";
import { Hero } from "@/components/sections/inicio/hero";
import { Pilares } from "@/components/sections/inicio/pilares";

export default function PaginaInicio() {
  return (
    <>
      <Hero />
      <Pilares />
      <Cursos />
      <ComoFunciona />
      <Comunidad />
    </>
  );
}
