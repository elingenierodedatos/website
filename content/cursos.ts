/**
 * Catálogo de cursos que se muestra en la página de inicio.
 *
 * Para agregar un curso: una entrada aquí y, si tiene landing, su archivo en content/cursos/.
 */

export type EstadoCurso = "gratis" | "proximamente";

export interface CursoResumen {
  /** Identificador estable; coincide con la ruta /cursos/<slug> cuando existe landing. */
  slug: string;
  titulo: string;
  descripcion: string;
  nivel: "Principiante" | "Intermedio" | "Avanzado";
  estado: EstadoCurso;
  /** Ruta de la landing. Sin landing, el botón lleva a "Avisarme". */
  href?: string;
  destacado?: boolean;
}

export const CURSOS: CursoResumen[] = [
  {
    slug: "python-basico",
    titulo: "Python básico para ingeniería de datos",
    descripcion:
      "Aprende Python desde cero limpiando datos reales. Nueve lecciones, un proyecto y 470 pruebas que te dicen cómo vas.",
    nivel: "Principiante",
    estado: "gratis",
    href: "/cursos/python-basico/",
    destacado: true,
  },
  {
    slug: "dbt-duckdb",
    titulo: "dbt con DuckDB: NeoBanco MX",
    descripcion:
      "Modela un warehouse completo con SQL, dbt y datos financieros de un banco digital.",
    nivel: "Intermedio",
    estado: "proximamente",
  },
  {
    slug: "databricks",
    titulo: "Databricks",
    descripcion:
      "Procesa datos a escala y aprende los fundamentos de una plataforma que usan los equipos modernos.",
    nivel: "Intermedio",
    estado: "proximamente",
  },
];

export const ETIQUETA_ESTADO: Record<EstadoCurso, string> = {
  gratis: "Gratis",
  proximamente: "Próximamente",
};
