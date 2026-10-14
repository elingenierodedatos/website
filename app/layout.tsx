import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Encabezado } from "@/components/layout/encabezado";
import { Pie } from "@/components/layout/pie";
import { DatosEstructurados } from "@/components/ui/datos-estructurados";
import { SITIO } from "@/content/sitio";
import { organizacion } from "@/lib/datos-estructurados";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "700"],
  display: "swap",
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["600", "700"],
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITIO.dominio),
  title: { default: SITIO.titulo, template: `%s · ${SITIO.nombre}` },
  description: SITIO.descripcion,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/marca/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/marca/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/marca/favicon-180.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { colorScheme: "light", themeColor: "#0B1F3A" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${barlow.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a
          href="#contenido"
          className="bg-accent text-navy sr-only z-50 px-4 py-2 font-bold focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Saltar al contenido
        </a>
        <Encabezado />
        <main id="contenido">{children}</main>
        <Pie />
        <DatosEstructurados datos={organizacion()} />
      </body>
    </html>
  );
}
