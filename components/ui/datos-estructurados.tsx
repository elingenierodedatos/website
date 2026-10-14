/** Inserta un bloque JSON-LD. El contenido viene de lib/datos-estructurados.ts, nunca del usuario. */
export function DatosEstructurados({ datos }: { datos: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(datos).replaceAll("<", "\\u003c") }}
    />
  );
}
