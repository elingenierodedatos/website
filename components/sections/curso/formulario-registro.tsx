"use client";

import Script from "next/script";
import { Suspense, useCallback, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { AvisoDeError } from "@/components/sections/curso/aviso-de-error";
import { PYTHON_BASICO } from "@/content/cursos/python-basico";

const CLASE_CAMPO =
  "border-mist text-navy placeholder:text-navy-soft w-full border bg-white px-4 py-3.5 text-base";

/** Render explícito: el script no vuelve a correr en navegaciones del cliente, así que pintamos nosotros. */
const SCRIPT_TURNSTILE = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Parámetros de campaña que se guardan con el registro para medir de dónde llega cada persona. */
const CLAVES_UTM = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;
const LLAVE_SESION = "eid-utm";
/** Límite y patrón del campo origen en el Worker (eid-plataforma, src/validacion.ts). */
const MAXIMO_ORIGEN = 120;
const PATRON_UTM = /^[\w\-.=&]*$/;

interface Turnstile {
  render: (contenedor: HTMLElement, opciones: { sitekey: string; language: string }) => string;
  remove: (id: string) => void;
}

declare global {
  interface Window {
    turnstile?: Turnstile;
  }
}

/** Pinta el widget de Turnstile en cada montaje del formulario y lo retira al desmontar. */
function useTurnstile(sitekey: string) {
  const contenedor = useRef<HTMLDivElement>(null);
  const widget = useRef<string | null>(null);

  const pintar = useCallback(() => {
    if (!contenedor.current || !window.turnstile || widget.current !== null) return;
    widget.current = window.turnstile.render(contenedor.current, { sitekey, language: "es" });
  }, [sitekey]);

  useEffect(() => {
    pintar();
    return () => {
      if (widget.current !== null) window.turnstile?.remove(widget.current);
      widget.current = null;
    };
  }, [pintar]);

  return { contenedor, pintar };
}

/** Arma "utm_source=meta&utm_campaign=..." con los UTM de la URL, limpios. Vacío si no hay. */
function utmDeLaUrl(busqueda: string) {
  const parametros = new URLSearchParams(busqueda);
  return CLAVES_UTM.flatMap((clave) => {
    const valor = (parametros.get(clave) ?? "").replace(/[^\w\-.]/g, "").slice(0, 40);
    return valor ? [`${clave}=${valor}`] : [];
  }).join("&");
}

/**
 * Agrega los UTM de la visita al campo oculto origen. Los guarda en la sesión
 * para no perderlos si la persona navega por el sitio antes de registrarse.
 * Se escribe directo en el campo porque el HTML del formulario es estático.
 */
function useOrigenConUtm(base: string) {
  const campo = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let utm = utmDeLaUrl(window.location.search);
    try {
      if (utm) sessionStorage.setItem(LLAVE_SESION, utm);
      else utm = sessionStorage.getItem(LLAVE_SESION) ?? "";
    } catch {
      // Sin almacenamiento (modo privado o bloqueado): basta con la URL.
    }
    if (utm && PATRON_UTM.test(utm) && campo.current) {
      campo.current.value = `${base}?${utm}`.slice(0, MAXIMO_ORIGEN);
    }
  }, [base]);

  return campo;
}

/**
 * Formulario de registro. Hace POST al Worker (/api/registro), que redirige a
 * /gracias o de vuelta aquí con ?registro=<error>. Como el sitio es estático,
 * el error se lee en el navegador (ver AvisoDeError). El formulario en sí
 * queda en el HTML estático.
 */
export function FormularioRegistro() {
  const { registro } = PYTHON_BASICO;
  const { contenedor, pintar } = useTurnstile(registro.turnstileSiteKey);
  const campoOrigen = useOrigenConUtm(registro.origen);

  return (
    <form action="/api/registro" method="post" className="relative flex flex-col gap-6">
      <Suspense fallback={null}>
        <AvisoDeError idCorreo="correo" />
      </Suspense>
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
              <span className="sr-only"> {registro.nuevaPestana}</span>
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
        <label htmlFor="sitio_web">{registro.trampa}</label>
        <input id="sitio_web" name="sitio_web" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div ref={contenedor} className="min-h-[65px]" data-turnstile />
      <Script src={SCRIPT_TURNSTILE} strategy="afterInteractive" onReady={pintar} />
      <input ref={campoOrigen} type="hidden" name="origen" defaultValue={registro.origen} />
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
