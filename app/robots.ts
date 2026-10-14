import type { MetadataRoute } from "next";
import { SITIO } from "@/content/sitio";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITIO.dominio}/sitemap.xml`,
  };
}
