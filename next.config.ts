import type { NextConfig } from "next";

/**
 * El sitio se exporta como HTML estático y se sirve desde Cloudflare Workers
 * (Static Assets). Ver docs/DECISIONES.md, ADR-001.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
