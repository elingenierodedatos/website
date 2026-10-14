/** Une clases condicionales sin dependencias externas. */
export function cx(...clases: Array<string | false | null | undefined>): string {
  return clases.filter(Boolean).join(" ");
}

/** Convierte una ruta relativa en URL absoluta del sitio. */
export function urlAbsoluta(ruta: string, dominio: string): string {
  return new URL(ruta, dominio).toString();
}
