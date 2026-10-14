import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts", ".wrangler/**"] },
];

export default config;
