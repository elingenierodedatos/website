"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { CircleAlert } from "lucide-react";
import { PYTHON_BASICO, type ErrorDeRegistro } from "@/content/cursos/python-basico";

function errorDeLaUrl(valor: string | null): ErrorDeRegistro | undefined {
  if (valor && Object.hasOwn(PYTHON_BASICO.registro.errores, valor)) {
    return valor as ErrorDeRegistro;
  }
  return undefined;
}

/**
 * Aviso de error del registro. Es lo único del formulario que lee la URL
 * (`?registro=<error>`), así que va aparte y dentro de su propio Suspense para que
 * el resto del formulario sí quede en el HTML estático.
 */
export function AvisoDeError({ idCorreo }: { idCorreo: string }) {
  const error = errorDeLaUrl(useSearchParams().get("registro"));
  const correoInvalido = error === "correo_invalido";

  // Marca el campo de correo como inválido mientras el aviso esté visible.
  useEffect(() => {
    if (!correoInvalido) return;
    const campo = document.getElementById(idCorreo);
    if (!campo) return;
    campo.setAttribute("aria-invalid", "true");
    campo.setAttribute("aria-describedby", "registro-error");
    return () => {
      campo.removeAttribute("aria-invalid");
      campo.removeAttribute("aria-describedby");
    };
  }, [correoInvalido, idCorreo]);

  if (!error) return null;
  return (
    <div
      id="registro-error"
      role="alert"
      className="border-accent bg-navy-soft flex items-start gap-3 border p-4 text-white"
    >
      <CircleAlert className="text-accent mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <p className="leading-6">{PYTHON_BASICO.registro.errores[error]}</p>
    </div>
  );
}
