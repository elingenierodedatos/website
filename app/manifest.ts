import type { MetadataRoute } from "next";
import { SITIO } from "@/content/sitio";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITIO.nombre,
    short_name: "EID",
    description: SITIO.descripcion,
    start_url: "/",
    display: "browser",
    background_color: "#0B1F3A",
    theme_color: "#0B1F3A",
    icons: [
      { src: "/marca/favicon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/marca/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
