/**
 * Aviso de privacidad. Fuente de verdad del texto: Notion (05 Operación → Funnel →
 * Aviso de privacidad). Borrador provisional hasta la revisión legal.
 *
 * `version` es la que guarda el Worker junto con cada consentimiento (VERSION_AVISO).
 * Si cambia el texto de forma sustantiva, cambia la versión aquí y en el Worker.
 */
import { CORREO_CONTACTO, SITIO } from "@/content/sitio";

export const PRIVACIDAD = {
  version: "2026-10-16",
  actualizado: "16 de octubre de 2026",
  etiquetaActualizado: "Última actualización",
  etiquetaVersion: "Versión",
  metadatos: {
    titulo: "Aviso de privacidad",
    descripcion:
      "Cómo EL INGENIERO DE DATOS trata tus datos personales: qué recabamos, para qué, con quién y cómo ejercer tus derechos ARCO.",
  },
  titulo: "Aviso de privacidad",
  intro:
    "Este aviso explica, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, qué datos recabamos cuando te registras en un curso o en el newsletter, para qué los usamos y cómo puedes ejercer tus derechos.",
  secciones: [
    {
      id: "responsable",
      titulo: "1. Responsable",
      parrafos: [
        `Elmer Alpuche, persona física que opera la marca ${SITIO.nombre} y el sitio elingenierodedatos.com, es el responsable del tratamiento de tus datos personales.`,
        `Todas las solicitudes relacionadas con este aviso se atienden por correo electrónico en ${CORREO_CONTACTO}.`,
      ],
    },
    {
      id: "datos",
      titulo: "2. Datos personales que recabamos",
      parrafos: ["Al registrarte en un curso o en el newsletter recabamos directamente de ti:"],
      lista: [
        "Correo electrónico.",
        "Nombre, si decides darlo.",
        "El curso o la página desde la que te registraste.",
      ],
      parrafosDespues: [
        "De forma automática, como evidencia de tu consentimiento, guardamos la fecha y hora en que confirmaste tu registro, una huella irreversible (hash) de la dirección IP desde la que confirmaste, la versión de este aviso que aceptaste y las finalidades que marcaste. No guardamos la dirección IP en claro.",
        "De los correos que te enviamos guardamos los eventos de entrega que nos reporta el proveedor: entregado, rebotado o marcado como no deseado. No usamos píxeles de seguimiento de apertura.",
        "No recabamos datos personales sensibles. Si más adelante vendemos cursos de pago, el cobro lo hará un proveedor de pagos con su propio aviso de privacidad y nosotros no guardaremos datos de tarjetas.",
      ],
    },
    {
      id: "finalidades",
      titulo: "3. Finalidades",
      subsecciones: [
        {
          titulo: "Primarias, necesarias para lo que pediste",
          lista: [
            "Enviarte los avisos del curso en el que te registraste: nuevas lecciones, guías y material.",
            "Operar tu registro: confirmarlo, darte de baja y atender tus solicitudes.",
            "Emitir tu constancia o certificado al terminar el curso, si lo solicitas.",
            "Guardar la evidencia de tu consentimiento.",
          ],
        },
        {
          titulo: "Secundarias, solo si marcaste la casilla correspondiente",
          lista: [
            "Enviarte el newsletter con contenido sobre ingeniería de datos y avisos de nuevos cursos y productos, incluidos los de pago.",
          ],
        },
      ],
      parrafosDespues: [
        "Si no marcaste la casilla del newsletter no te lo enviaremos. Puedes activarlo o desactivarlo en cualquier momento escribiéndonos o con el enlace de baja que lleva cada correo.",
      ],
    },
    {
      id: "consentimiento",
      titulo: "4. Consentimiento",
      parrafos: [
        "Tu registro se completa cuando haces clic en el enlace de confirmación que te enviamos por correo. Al marcar la casilla de aceptación de este aviso y confirmar tu correo, consientes el tratamiento para las finalidades primarias. La casilla del newsletter es opcional y constituye tu consentimiento expreso para la finalidad secundaria.",
      ],
    },
    {
      id: "encargados",
      titulo: "5. Transferencias y encargados",
      parrafos: [
        "No vendemos ni cedemos tus datos a terceros. Para operar el servicio usamos proveedores que tratan los datos por cuenta nuestra, bajo sus propios compromisos de seguridad:",
      ],
      lista: [
        "Cloudflare, Inc. (Estados Unidos): alojamiento del sitio, base de datos de registros y verificación antibots.",
        "Resend, Inc. (Estados Unidos): envío de correos transaccionales y del newsletter.",
        "GitHub, Inc. (Estados Unidos): si participas en un curso con repositorio, tu actividad en GitHub se rige por el aviso de privacidad de GitHub.",
      ],
      parrafosDespues: [
        "Estos proveedores pueden almacenar datos fuera de México. Al registrarte aceptas esa transferencia, necesaria para prestarte el servicio.",
      ],
    },
    {
      id: "arco",
      titulo: "6. Derechos ARCO y revocación del consentimiento",
      parrafos: [
        `Puedes acceder a tus datos, rectificarlos, cancelarlos u oponerte a su tratamiento, así como revocar tu consentimiento, escribiendo a ${CORREO_CONTACTO} desde el correo registrado e indicando qué derecho quieres ejercer. Responderemos en un plazo máximo de 20 días hábiles.`,
        "Para dejar de recibir correos no hace falta escribirnos: cada correo lleva un enlace de baja de un clic.",
        "Si cancelas tus datos conservaremos únicamente una huella irreversible de tu correo en una lista de exclusión, para no volver a escribirte por error. Esa huella no permite reconstruir tu correo.",
      ],
    },
    {
      id: "conservacion",
      titulo: "7. Conservación",
      parrafos: [
        "Conservamos tus datos mientras tu registro esté activo. Tras tu baja o cancelación conservamos la evidencia de consentimiento y de baja durante cinco años, para poder acreditar que te escribimos con tu permiso y que atendimos tu baja, y después la eliminamos.",
      ],
    },
    {
      id: "seguridad",
      titulo: "8. Seguridad",
      parrafos: [
        "Los enlaces de confirmación y de baja son de un solo uso, van firmados y caducan. Las direcciones IP se guardan solo como huella irreversible. El acceso a la base de datos está restringido y protegido con credenciales que no se comparten.",
      ],
    },
    {
      id: "cookies",
      titulo: "9. Cookies",
      parrafos: [
        "El sitio no usa cookies de seguimiento ni de publicidad. Usamos Cloudflare Web Analytics, que no usa cookies ni identifica personas, y Cloudflare Turnstile para distinguir personas de bots en el formulario.",
      ],
    },
    {
      id: "cambios",
      titulo: "10. Cambios a este aviso",
      parrafos: [
        "Cuando cambiemos este aviso publicaremos la nueva versión en esta misma página con su fecha. Si el cambio afecta las finalidades o los datos que tratamos, te lo avisaremos por correo antes de aplicarlo.",
      ],
    },
  ],
} as const;
