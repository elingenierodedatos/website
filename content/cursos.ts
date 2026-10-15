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

/** Encabezado de la sección en la página de inicio. */
export const SECCION_CURSOS = {
  titulo: "Cursos",
  texto:
    "Tres fundamentos gratuitos, con el mismo método: datos sucios, pruebas que califican tu avance y un proyecto en tu GitHub. Lo que sigue (dbt, nube, plataformas) se construye sobre estos tres.",
} as const;

/**
 * La entrada gratuita: Python, SQL y la terminal. En este orden se producen y se recomiendan.
 * Los cursos intermedios (dbt, Databricks, nube) se listan cuando existan, en una franja aparte.
 */
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
    slug: "sql-basico",
    titulo: "SQL básico para ingeniería de datos",
    descripcion:
      "Consulta, limpia y modela datos con SQL desde cero. Sin instalar un servidor: DuckDB y datos reales, con pruebas y un proyecto.",
    nivel: "Principiante",
    estado: "proximamente",
  },
  {
    slug: "terminal-git-linux",
    titulo: "Terminal, Git y Linux para datos",
    descripcion:
      "La caja de herramientas del ingeniero: la línea de comandos, versionar con Git, publicar en GitHub y moverte en un servidor Linux.",
    nivel: "Principiante",
    estado: "proximamente",
  },
];

export const ETIQUETA_ESTADO: Record<EstadoCurso, string> = {
  gratis: "Gratis",
  proximamente: "Próximamente",
};
