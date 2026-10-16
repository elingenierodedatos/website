"use client";

import Script from "next/script";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CircleAlert } from "lucide-react";
import { PYTHON_BASICO, type ErrorDeRegistro } from "@/content/cursos/python-basico";

const CLASE_CAMPO =
  "border-mist text-navy placeholder:text-navy-soft w-full border bg-white px-4 py-3.5 text-base";

function errorDeLaUrl(valor: string | null): ErrorDeRegistro | undefined {
  if (valor && Object.hasOwn(PYTHON_BASICO.registro.errores, valor)) {
    return valor as ErrorDeRegistro;
  }
  return undefined;
}

/**
 * Formulario de registro. Hace POST al Worker (/api/registro), que redirige a
 * /gracias o de vuelta aquí con ?registro=<error>. Como el sitio es estático,
 * el error se lee en el navegador.
 */
export function FormularioRegistro() {
  const { registro } = PYTHON_BASICO;
  const error = errorDeLaUrl(useSearchParams().get("registro"));
  const correoInvalido = error === "correo_invalido";

  return (
    <form action="/api/registro" method="post" className="relative flex flex-col gap-6">
      {error && (
        <div
          id="registro-error"
          role="alert"
          className="border-accent bg-navy-soft flex items-start gap-3 border p-4 text-white"
        >
          <CircleAlert className="text-accent mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <p className="leading-6">{registro.errores[error]}</p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="nombre" className="font-medium text-white">
          {registro.nombre}
        </label>
        <input id="nombre" name="nombre" type="text" autoComplete="name" className={CLASE_CAMPO} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="correo" className="font-medium text-white">
          {registro.correo}
        </label>
        <input
          id="correo"
          name="correo"
          type="email"
          required
          autoComplete="email"
          placeholder={registro.marcador}
          aria-invalid={correoInvalido || undefined}
          aria-describedby={correoInvalido ? "registro-error" : undefined}
          className={CLASE_CAMPO}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <input
            id="acepta_curso"
            name="acepta_curso"
            type="checkbox"
            required
            className="accent-accent mt-1 size-5 shrink-0"
          />
          <label htmlFor="acepta_curso" className="leading-6 text-white">
            {registro.aceptaAviso}{" "}
            <a
              href={registro.avisoEnlace.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-light underline underline-offset-4"
            >
              {registro.avisoEnlace.texto}
              <span className="sr-only"> (se abre en una pestaña nueva)</span>
            </a>
          </label>
        </div>
        <div className="flex items-start gap-3">
          <input
            id="acepta_newsletter"
            name="acepta_newsletter"
            type="checkbox"
            className="accent-accent mt-1 size-5 shrink-0"
          />
          <label htmlFor="acepta_newsletter" className="leading-6 text-white">
            {registro.aceptaNewsletter}
          </label>
        </div>
      </div>
      {/* Campo trampa para bots: fuera de la vista y del orden de tabulación. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="sitio_web">Sitio web</label>
        <input id="sitio_web" name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div
        className="cf-turnstile min-h-[65px]"
        data-sitekey={registro.turnstileSiteKey}
        data-language="es"
      />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
      />
      <input type="hidden" name="origen" value={registro.origen} />
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="bg-accent text-navy hover:bg-accent-light inline-flex w-full cursor-pointer items-center justify-center gap-3 px-7 py-4 text-lg font-bold transition-colors"
        >
          {registro.boton} <ArrowRight size={18} aria-hidden="true" />
        </button>
        <p className="text-mist text-sm leading-6">{registro.nota}</p>
      </div>
    </form>
  );
}
