/**
 * Contenido de la landing del curso Python básico para ingeniería de datos.
 *
 * El copy aprobado vive en Notion (01 Sitio y SEO → Landing: Curso Python básico).
 * Si cambia el curso (lecciones, pruebas, tiempos), cambia aquí; los componentes solo pintan.
 */
import { REDES } from "@/content/sitio";

/** Ancla del formulario de registro en la landing. Todos los botones de acción llevan ahí. */
const ANCLA_REGISTRO = "#registro";

export const PYTHON_BASICO = {
  slug: "python-basico",
  anclaRegistro: ANCLA_REGISTRO,
  /** Enlace a la lista de reproducción. Mientras no exista, apunta al canal. */
  videos: REDES.youtube.url,

  metadatos: {
    titulo: "Curso gratis de Python para ingeniería de datos · EID",
    descripcion:
      "Aprende Python desde cero limpiando datos reales. Curso gratuito en español con ejercicios evaluados por pruebas y un proyecto de datos para tu GitHub.",
    imagen: "/marca/curso-python-og-1200x630.png",
  },

  hero: {
    etiqueta: "Curso gratuito · En español · 24 horas",
    titulo: "Aprende Python desde cero limpiando datos reales",
    subtitulo:
      "Completas funciones, corres pruebas y terminas con un flujo de datos propio en tu GitHub. Sin instalar nada raro y sin pagar nada.",
    accionPrincipal: "Quiero el curso",
    accionSecundaria: "Ver las lecciones en YouTube",
    confianza: "9 lecciones · 1 proyecto final · 470 pruebas que te dicen cómo vas",
    terminal: {
      comando: "pytest lecciones/leccion_01_variables_y_texto",
      salida: "29 passed in 0.08s",
    },
  },

  proyecto: {
    titulo: "Un flujo de datos de verdad, no ejercicios sueltos",
    texto:
      "Recibes un archivo con 63 pedidos de una tienda en línea, escritos como llegan en la vida real: precios con símbolos, ciudades de cinco formas, fechas en dos formatos y filas repetidas. Tu programa los lee, corrige lo que se puede, rechaza con motivo lo que no, los guarda en una base de datos y genera el reporte de ventas. Todo con pruebas que lo respaldan.",
    etapas: ["Extraer", "Limpiar", "Cargar", "Reportar"],
  },

  metodo: {
    titulo: "Así se aprende aquí",
    pasos: [
      "Lees la guía. Cada lección explica con ejemplos que puedes correr y modificar.",
      "Escribes el código. Completas funciones con un propósito claro, paso a paso.",
      "Corres las pruebas. Te dicen qué esperaban y qué obtuvieron, en español.",
      "Subes tu avance. Las pruebas vuelven a correr en la nube y tu portafolio crece solo.",
    ],
    cierre: "No hay exámenes. El código pasa las pruebas o no las pasa.",
  },

  temario: {
    titulo: "Nueve lecciones y un proyecto",
    lecciones: [
      {
        numero: "0",
        titulo: "Preparación",
        aprendes: "Instalar todo, correr tu primera prueba y leer un error",
        tiempo: "45 min",
        ruta: "lecciones/leccion_00_preparacion",
      },
      {
        numero: "1",
        titulo: "Variables, texto y números",
        aprendes: "Convertir texto sucio en datos utilizables",
        tiempo: "90 min",
        ruta: "lecciones/leccion_01_variables_y_texto",
      },
      {
        numero: "2",
        titulo: "Listas y bucles",
        aprendes: "Trabajar con una columna completa",
        tiempo: "2 h",
        ruta: "lecciones/leccion_02_listas_y_bucles",
      },
      {
        numero: "3",
        titulo: "Decisiones con if y bucles while",
        aprendes: "Validar, clasificar y detectar faltantes",
        tiempo: "100 min",
        ruta: "lecciones/leccion_03_condicionales",
      },
      {
        numero: "4",
        titulo: "Diccionarios y conjuntos",
        aprendes: "Representar filas y agrupar",
        tiempo: "2 h",
        ruta: "lecciones/leccion_04_diccionarios",
      },
      {
        numero: "5",
        titulo: "Funciones y módulos",
        aprendes: "Escribir y organizar tu propio código",
        tiempo: "2 h",
        ruta: "lecciones/leccion_05_funciones_y_modulos",
      },
      {
        numero: "6",
        titulo: "Archivos y manejo de errores",
        aprendes: "Leer y escribir CSV y JSON sin esconder errores",
        tiempo: "2 h",
        ruta: "lecciones/leccion_06_archivos_y_errores",
      },
      {
        numero: "7",
        titulo: "Pruebas con pytest",
        aprendes: "Escribir las pruebas que respaldan tu trabajo",
        tiempo: "2 h",
        ruta: "lecciones/leccion_07_pruebas",
      },
      {
        numero: "8",
        titulo: "Guardar y consultar datos con SQLite",
        aprendes: "Cargar a una base de datos y consultarla con SQL",
        tiempo: "2 h",
        ruta: "lecciones/leccion_08_sqlite",
      },
      {
        numero: "P",
        titulo: "Proyecto final: Flujo de ventas",
        aprendes: "Unir todo en un flujo de datos completo",
        tiempo: "8 h",
        ruta: "proyecto",
      },
    ],
    cierre: "Unas 24 horas en total. Una hora al día rinde más que seis el domingo.",
  },

  audiencia: {
    paraTi: {
      titulo: "Es para ti si…",
      puntos: [
        "Quieres entrar a ingeniería de datos y nunca has programado, o programaste poco y sin método.",
        "Prefieres construir algo real a ver videos sin tocar el teclado.",
        "Quieres un proyecto en tu GitHub que puedas explicar en una entrevista.",
      ],
    },
    noParaTi: {
      titulo: "No es para ti si…",
      puntos: [
        "Ya dominas Python y buscas pandas, Spark o la nube. Eso viene en los siguientes cursos.",
        "Quieres un certificado. Aquí el certificado es tu repositorio.",
      ],
    },
  },

  sinIaSeccion: {
    titulo: "Sin IA mientras aprendes",
    texto:
      "Te pedimos algo que suena raro: no uses asistentes de IA para resolver los ejercicios. No es desconfianza de la herramienta. Con la IA cambió la manera de enseñar, no la manera de aprender: recordar cuesta, y ese esfuerzo es el aprendizaje. Al terminar, úsala. Un ingeniero que sabe programar le saca mucho más a la IA, porque puede juzgar lo que recibe.",
  },

  autor: {
    titulo: "Quién está detrás",
    texto:
      "Soy Elmer, creador de EL INGENIERO DE DATOS. Llevo más de seis años en roles de datos y más de ocho como desarrollador, y di clases más de dos años. Este curso es el que me hubiera gustado tener al empezar: corto en teoría, largo en práctica y con un resultado que se puede enseñar.",
    /** Hasta tener foto, se usa el ícono de la marca. */
    imagen: "/marca/eid-icono-app.png",
  },

  preguntas: [
    {
      pregunta: "¿De verdad es gratis?",
      respuesta:
        "Sí. Te registras con tu correo y recibes el acceso al repositorio y el aviso de cada lección nueva. No hay versión de pago de este curso.",
    },
    {
      pregunta: "¿Para qué piden mi correo?",
      respuesta:
        "Para darte acceso al repositorio del curso y avisarte cuando salga una lección. Nada más, salvo que marques la casilla del newsletter. Puedes darte de baja con un clic desde cualquier correo.",
    },
    { pregunta: "¿Necesito saber programar?", respuesta: "No. Empieza desde instalar Python." },
    {
      pregunta: "¿Funciona en Windows?",
      respuesta: "Sí, y en macOS y Linux. Las guías tienen los comandos de cada sistema.",
    },
    {
      pregunta: "¿Cuánto tiempo toma?",
      respuesta: "Unas 24 horas. A seis horas por semana, un mes.",
    },
    {
      pregunta: "¿Qué necesito instalar?",
      respuesta:
        "Python, Git y un editor. Nada más: ni Docker, ni bases de datos, ni cuentas en la nube.",
    },
    {
      pregunta: "¿Hay certificado?",
      respuesta:
        "No. Al terminar tienes un repositorio con 470 pruebas en verde y un proyecto que puedes explicar. Eso pesa más en una entrevista.",
    },
    {
      pregunta: "¿Dónde pregunto si me atoro?",
      respuesta: "En la comunidad de Discord del curso.",
      enlace: { texto: "Entrar a la comunidad", href: REDES.discord.url },
    },
    {
      pregunta: "¿Puedo usar el material en mi escuela o equipo?",
      respuesta: "Sí, con atribución y sin fines comerciales (CC BY-NC-SA 4.0).",
    },
  ],

  registro: {
    etiqueta: "Registro gratuito",
    titulo: "Quiero el curso",
    texto:
      "Déjanos tu correo y te mandamos el acceso al repositorio, el aviso de cada lección nueva y tu certificado al terminar. Sin costo.",
    nombre: "Nombre (opcional)",
    correo: "Correo electrónico",
    marcador: "tu@correo.com",
    aceptaAviso: "Leí y acepto el",
    avisoEnlace: { texto: "aviso de privacidad", href: "/privacidad/" },
    aceptaNewsletter:
      "También quiero recibir el newsletter con tips de ingeniería de datos y avisos de nuevos cursos, incluidos los de pago",
    boton: "Registrarme",
    nota: "Te mandamos un correo para confirmar. Sin confirmación no hay registro.",
    origen: "python-basico",
    /** Clave pública del widget de Turnstile. La secreta vive en el Worker. */
    turnstileSiteKey: "0x4AAAAAAFYLMomDKHYVkzLU",
    errores: {
      correo_invalido: "El correo no parece válido. Revísalo e inténtalo de nuevo.",
      falta_consentimiento: "Para registrarte necesitas aceptar el aviso de privacidad.",
      verificacion_fallida:
        "No pudimos completar la verificación de seguridad. Inténtalo de nuevo.",
      envio_fallido:
        "No pudimos enviarte el correo de confirmación. Inténtalo de nuevo en unos minutos.",
    },
  },

  gracias: {
    titulo: "Revisa tu correo",
    texto:
      "Te enviamos un enlace para confirmar tu registro. El enlace es válido durante 48 horas.",
    subtitulo: "Si no te llega",
    puntos: [
      "Revisa la carpeta de spam o de correo no deseado.",
      "Espera 10 minutos antes de pedir otro enlace desde el formulario.",
    ],
    volver: "Volver al curso",
  },

  cierre: {
    titulo: "Ensúciate las manos con datos reales",
    texto: "Lo único que necesitas es una computadora y una hora al día.",
    accion: "Quiero el curso",
    nota: "Lección nueva cada semana en YouTube.",
  },
} as const;

export type ErrorDeRegistro = keyof typeof PYTHON_BASICO.registro.errores;

export type LeccionTemario = (typeof PYTHON_BASICO.temario.lecciones)[number];
export type PreguntaFrecuente = (typeof PYTHON_BASICO.preguntas)[number];
