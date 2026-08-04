import type { LandingContent } from './types';

const businessName = import.meta.env.PUBLIC_BUSINESS_NAME ?? 'JM Soluciones Electricas';
const businessH1 = import.meta.env.PUBLIC_BUSINESS_H1 ?? 'Electricidad para Obras y Refacciones';
const descriptor = import.meta.env.PUBLIC_BUSINESS_DESCRIPTOR ?? 'Viviendas • Locales • Obras';
const subtitle =
  import.meta.env.PUBLIC_BUSINESS_SUBTITLE ??
  'Instalaciones electricas para obras, ampliaciones y refacciones en Gran Mendoza. Relevamiento tecnico, presupuesto claro y coordinacion por WhatsApp.';
const locationLabel =
  import.meta.env.PUBLIC_LOCATION_LABEL ?? 'Cobertura en Gran Mendoza';
const whatsapp = import.meta.env.PUBLIC_WHATSAPP ?? '5492613465718';
const phoneLabel = import.meta.env.PUBLIC_PHONE_LABEL ?? '+54 9 2613 46-5718';
const whatsappMessage =
  import.meta.env.PUBLIC_WHATSAPP_MESSAGE ??
  'Hola, __JM_SALUDO__ quiero pedir presupuesto por una obra, refaccion o trabajo electrico.\nZona: [barrio/ciudad]\nTipo de trabajo: [obra/refaccion/instalacion]\nDetalle: [detalle]';
const addressReference =
  import.meta.env.PUBLIC_ADDRESS_REFERENCE ?? 'Gran Mendoza, Mendoza.';
const coverageLabel = import.meta.env.PUBLIC_COVERAGE_LABEL ?? 'Cobertura: Gran Mendoza y alrededores.';
const businessLabel =
  import.meta.env.PUBLIC_BUSINESS_LABEL ?? 'Electricidad para obras y refacciones en Gran Mendoza.';
const seoTitle =
  import.meta.env.PUBLIC_SEO_TITLE ?? 'JM Soluciones Electricas | Obras y Refacciones en Mendoza';
const seoDescription =
  import.meta.env.PUBLIC_SEO_DESCRIPTION ??
  'Electricidad para obras, ampliaciones y refacciones en Gran Mendoza. Instalaciones, tableros, cableado y diagnostico tecnico con presupuesto por WhatsApp.';
const seoKeywords =
  import.meta.env.PUBLIC_SEO_KEYWORDS ??
  'electricidad para obras y refacciones mendoza, instalaciones electricas mendoza, reparacion tableros electricos mendoza, cableado electrico mendoza, electricista en mendoza';

export const landingContent: LandingContent = {
  brand: {
    name: businessName,
    h1: businessH1,
    descriptor,
    subtitle,
    locationLabel,
  },
  contact: {
    whatsapp,
    phoneLabel,
    responseTimeLabel: 'Respuesta por WhatsApp',
  },
  cta: {
    whatsappMessage,
    primaryLabel: 'Coordinar presupuesto por WhatsApp',
    servicesLabel: 'No se que servicio elegir',
    finalLabel: 'Coordinar visita por WhatsApp',
    detailLabel: 'Coordinar visita y presupuesto',
    mobileLabel: 'Coordinar presupuesto',
  },
  legal: {
    availability: 'Visitas coordinadas segun agenda, zona y alcance del trabajo.',
    warranty: 'Garantia segun tipo de trabajo.',
    serviceConditions: [
      'Trabajo solo con diagnostico y aprobacion previa.',
      'Visitas y tiempos sujetos a agenda, zona y materiales.',
      'Garantia segun reparacion y estado de la instalacion.',
    ],
    commercialNotice: 'Presupuesto, alcance y materiales definidos antes de ejecutar.',
  },
  heroChecks: [
    'Obras, ampliaciones y refacciones',
    'Tableros, cableado y trifasica',
    'Presupuesto y alcance antes de ejecutar',
  ],
  trustPoints: [
    'Presupuesto tecnico antes de ejecutar',
    'Alcance definido por sector o etapa',
    'Materiales y protecciones a aprobar',
    'Factura y medios de pago',
    'Visitas coordinadas segun zona y agenda',
  ],
  proofMetrics: [
    {
      value: '12+',
      label: 'Años de experiencia',
      detail: 'Obras, tableros y diagnostico electrico.',
    },
    {
      value: 'Obras + refacciones',
      label: 'Foco principal',
      detail: 'Trabajo tecnico para ampliaciones y reformas.',
    },
    {
      value: 'Gran Mendoza',
      label: 'Cobertura operativa',
      detail: 'Visitas coordinadas segun zona y agenda.',
    },
    {
      value: 'WhatsApp directo',
      label: 'Canal principal',
      detail: 'Respuesta agil para relevamiento y presupuesto.',
    },
  ],
  processSteps: [
    {
      step: 'Paso 1',
      title: 'Relevamiento inicial por WhatsApp',
      description: 'Nos envias zona, tipo de trabajo, etapa actual y fotos o video si ya los tenes.',
    },
    {
      step: 'Paso 2',
      title: 'Visita y definicion de alcance',
      description: 'Revisamos tablero, circuitos, cargas, sectores a intervenir y condiciones reales del trabajo.',
    },
    {
      step: 'Paso 3',
      title: 'Presupuesto por etapa',
      description: 'Definimos alcance, materiales, tiempos y orden de ejecucion antes de avanzar.',
    },
    {
      step: 'Paso 4',
      title: 'Ejecucion, prueba y entrega',
      description: 'Trabajamos por sectores o etapas, verificamos funcionamiento y cerramos con entrega clara.',
    },
  ],
  serviceCategories: [
    {
      title: 'Obras y refacciones electricas',
      priority: 'high',
      items: [
        'Instalaciones trifasicas y distribucion de cargas',
        'Armado y ampliacion de tableros',
        'Reemplazo de cableado por sectores',
        'Circuitos para tomas, iluminacion y equipos',
      ],
    },
    {
      title: 'Tableros, protecciones y cargas',
      priority: 'high',
      items: [
        'Reemplazo de termicas y disyuntores',
        'Relevamiento de cargas',
        'Balanceo y ordenamiento de circuitos',
        'Puesta en seguridad de tableros',
      ],
    },
    {
      title: 'Instalaciones domiciliarias y comerciales',
      priority: 'high',
      items: [
        'Tomas, llaves e iluminacion',
        'Lineas para equipos de alto consumo',
        'Actualizacion de circuitos',
        'Puesta a tierra y adecuacion basica',
      ],
    },
    {
      title: 'Diagnostico y puesta en seguridad',
      priority: 'base',
      items: [
        'Cortes internos y cortocircuitos',
        'Falta de potencia y caidas de tension',
        'Aislamiento de fallas por sector',
        'Urgencias segun disponibilidad',
      ],
    },
  ],
  servicesDetails: [
    {
      slug: 'reparacion-tableros-electricos-mendoza',
      title: 'Reparacion de Tableros Electricos',
      seoTitle: 'Servicio Tecnico de Tableros Electricos en Mendoza | JM Soluciones Electricas',
      seoDescription:
        'Reparacion y puesta en seguridad de tableros electricos domiciliarios y comerciales en Gran Mendoza. Diagnostico claro y profesional.',
      description: 'Servicio para tableros con protecciones fuera de rango, recalentamiento o circuitos desordenados.',
      commercialSummary:
        'Ideal cuando el tablero presenta disparos recurrentes, ampliaciones mal resueltas o protecciones que ya no acompañan la carga instalada.',
      whatsappMessage:
        'Hola, __JM_SALUDO__ quiero consultar por reparacion de tableros electricos.\nZona: [barrio/ciudad]\nProblema del tablero: [detalle]',
      serviceHighlights: ['Termicas y disyuntores', 'Balanceo de circuitos', 'Puesta en seguridad'],
      supportBadge: 'Correccion y ordenamiento',
      features: [
        'Reemplazo de termicas y disyuntores',
        'Correccion de falsos contactos',
        'Balanceo de cargas por circuito',
        'Medicion y ajuste de protecciones',
      ],
      commonJobs: [
        'Termicas que disparan',
        'Reemplazo de disyuntor',
        'Tablero recalentado',
        'Circuitos mal identificados',
        'Ampliacion de tablero',
      ],
      relatedGalleryImages: ['tablero-sectorizado-con-protecciones.jpeg'],
      caseStudy: {
        problem: 'Cortes intermitentes y olor a quemado en tablero principal.',
        solution: 'Diagnostico de recalentamiento, recableado parcial y recambio de protecciones.',
        result: 'Instalacion estable, segura y sin disparos intempestivos.',
      },
    },
    {
      slug: 'cortocircuitos-urgencias-electricas-mendoza',
      title: 'Cortocircuitos y Urgencias Electricas',
      seoTitle: 'Urgencias Electricas en Mendoza | JM Soluciones Electricas',
      seoDescription:
        'Atencion tecnica de cortocircuitos, cortes y fallas electricas en Mendoza. Diagnostico rapido y reparacion segura.',
      description: 'Atencion tecnica para aislar fallas, poner en seguridad y restablecer servicio interno con criterio tecnico.',
      commercialSummary:
        'Ideal para cortes internos, olor a quemado, disparos inmediatos o sectores que quedaron sin servicio dentro de la instalacion.',
      whatsappMessage:
        'Hola, __JM_SALUDO__ necesito ayuda por una falla o urgencia electrica.\nZona: [barrio/ciudad]\nQue esta pasando: [detalle]',
      serviceHighlights: ['Aislamiento de la falla', 'Puesta en seguridad', 'Restablecimiento por sector'],
      supportBadge: 'Aislamiento y seguridad',
      features: [
        'Deteccion de cortocircuitos por sector',
        'Aislamiento de fallas en circuitos',
        'Reparacion de cables y conexiones dañadas',
        'Prueba final de seguridad electrica',
      ],
      commonJobs: [
        'Cortes internos',
        'Cortocircuitos por sector',
        'Olor a quemado',
        'Cables o conexiones dañadas',
        'Protecciones que disparan',
      ],
      relatedGalleryImages: ['obra-tradicional-apertura-de-caja-en-muro.jpeg', 'obra-tradicional-canalizacion-en-muro.jpeg'],
      caseStudy: {
        problem: 'Corte total en vivienda por cortocircuito en linea de cocina.',
        solution: 'Sectorizacion de circuitos, recambio de tramo dañado y ajuste de protecciones.',
        result: 'Servicio restablecido con funcionamiento estable y seguro.',
      },
    },
    {
      slug: 'instalaciones-electricas-domiciliarias-mendoza',
      title: 'Instalaciones Electricas Domiciliarias',
      seoTitle: 'Instalaciones Electricas en Mendoza | Tecnico a Domicilio',
      seoDescription:
        'Servicio tecnico de instalaciones electricas domiciliarias en Mendoza. Solucion de tomas, iluminacion, llaves y ampliaciones de circuitos.',
      description: 'Instalaciones, ampliaciones y mejoras electricas en viviendas con alcance definido y presupuesto previo.',
      commercialSummary:
        'Ideal para agregar circuitos, renovar cableado puntual, instalar tomas o adaptar la instalacion a equipos de mayor consumo.',
      whatsappMessage:
        'Hola, __JM_SALUDO__ quiero pedir presupuesto por una instalacion electrica.\nZona: [barrio/ciudad]\nTrabajo a realizar: [detalle]',
      serviceHighlights: ['Tomas y llaves nuevas', 'Lineas dedicadas', 'Adecuacion de circuitos'],
      supportBadge: 'Ampliacion y adecuacion',
      features: [
        'Instalacion de tomacorrientes y llaves',
        'Armado de lineas para equipos de alto consumo',
        'Actualizacion de circuitos antiguos',
        'Verificacion de puesta a tierra',
      ],
      commonJobs: [
        'Nuevos tomacorrientes',
        'Lineas para horno o aire',
        'Renovacion de cableado',
        'Actualizacion de circuitos',
        'Puesta a tierra',
      ],
      relatedGalleryImages: ['obra-tradicional-ambiente-con-dicroicas.jpeg'],
      caseStudy: {
        problem: 'Baja tension y disparos al conectar horno electrico.',
        solution: 'Nueva linea dedicada con proteccion independiente y ajuste de tablero.',
        result: 'Consumo estable sin caidas ni disparos de proteccion.',
      },
    },
    {
      slug: 'electricidad-para-obras-y-refacciones-mendoza',
      title: 'Electricidad para Obras y Refacciones',
      seoTitle: 'Instalaciones Electricas para Obras y Refacciones en Mendoza | JM Soluciones Electricas',
      seoDescription:
        'Instalaciones electricas para obras, ampliaciones y refacciones en Mendoza. Ejecucion tecnica, orden de circuitos y condiciones de seguridad.',
      description: 'Servicio electrico para obras, ampliaciones y refacciones con criterio tecnico, seguridad y continuidad de trabajo por etapa.',
      commercialSummary:
        'Ideal para obras nuevas, ampliaciones y refacciones que necesitan tableros ordenados, circuitos definidos y avance coordinado sin improvisaciones.',
      whatsappMessage:
        'Hola, __JM_SALUDO__ quiero consultar por electricidad para una obra o refaccion.\nZona: [barrio/ciudad]\nTipo de obra: [obra nueva/refaccion/ampliacion]\nNecesidad: [detalle]',
      serviceHighlights: ['Avance por etapas', 'Tableros y trifasica', 'Circuitos por sector'],
      supportBadge: 'Trabajo por etapas y sectores',
      features: [
        'Montaje y ordenamiento de tableros para obra',
        'Tendido y distribucion de lineas para avance de obra',
        'Instalacion de tomas, iluminacion y circuitos por sector',
        'Revision de protecciones, cargas y condiciones de seguridad',
      ],
      commonJobs: [
        'Instalaciones trifasicas',
        'Armado y ampliacion de tableros',
        'Reemplazo de cableado',
        'Fallas electricas y cortocircuitos',
        'Falta de potencia y caidas de tension',
      ],
      relatedGalleryImages: ['construccion-seco-vista-general.jpeg', 'construccion-seco-aberturas-y-canalizacion.jpeg'],
      caseStudy: {
        problem: 'Obra en ampliacion con alimentacion desordenada, disparos de protecciones y circuitos sin sectorizar.',
        solution: 'Reorganizacion del tablero, sectorizacion de lineas y ejecucion de circuitos para tomas, iluminacion y equipos.',
        result: 'Obra con suministro estable, distribucion segura y mejor continuidad de trabajo.',
      },
    },
  ],
  technicalScope: [
    {
      title: 'Obras, ampliaciones y refacciones',
      points: [
        'Instalaciones trifasicas y distribucion de cargas',
        'Tableros por etapa y sectorizacion de circuitos',
        'Cableado, iluminacion y tomas para avance de obra',
      ],
    },
    {
      title: 'Tableros y protecciones',
      points: [
        'Termicas que disparan o quedaron fuera de rango',
        'Disyuntores, falsos contactos y recalentamiento',
        'Balanceo, ordenamiento y puesta en seguridad',
      ],
    },
    {
      title: 'Instalaciones domiciliarias y comerciales',
      points: [
        'Nuevos tomas, llaves y puntos de iluminacion',
        'Lineas para horno, aire y equipos de mayor consumo',
        'Actualizacion de circuitos y adecuaciones puntuales',
      ],
    },
    {
      title: 'Diagnostico y puesta en seguridad',
      points: [
        'Cortocircuitos, cortes internos y falta de potencia',
        'Revision de sectores con olor a quemado o disparos recurrentes',
        'Aislamiento de fallas y restitucion segura del servicio',
      ],
    },
  ],
  whyChoosePoints: [
    {
      title: 'Alcance definido antes de empezar',
      description: 'Se releva el trabajo, se informa el alcance y se acuerda que se ejecuta en cada etapa.',
    },
    {
      title: 'Criterio tecnico en tableros y cargas',
      description: 'Ordenamiento de circuitos, protecciones y distribucion para que la instalacion quede estable.',
    },
    {
      title: 'Trabajo coordinado por etapas',
      description: 'Podemos avanzar segun obra, refaccion, terminaciones o disponibilidad del cliente.',
    },
    {
      title: 'Cobertura operativa real',
      description: 'Atencion en Gran Mendoza con visitas coordinadas segun zona y tipo de trabajo.',
    },
    {
      title: 'Cierre y garantia segun trabajo',
      description: 'Verificacion final y garantia definida de acuerdo con la intervencion realizada.',
    },
  ],
  zones: ['Capital', 'Guaymallen', 'Godoy Cruz', 'Lujan de Cuyo', 'Las Heras', 'Chacras de Coria', 'Ciudad'],
  localZones: [
    {
      slug: 'capital',
      name: 'Capital',
      description:
        'Asistencia electrica para obras, refacciones y tableros en el microcentro y barrios de Capital. Relevamiento previo, presupuesto y ejecucion por etapas.',
      coverageNote: 'Cobertura en toda la ciudad de Mendoza, Capital.',
    },
    {
      slug: 'godoy-cruz',
      name: 'Godoy Cruz',
      description:
        'Instalaciones, tableros y cableado residencial en Godoy Cruz. Trabajo por sectores para que el comercio o la vivienda sigan en uso durante la refaccion.',
      coverageNote: 'Cobertura en todo Godoy Cruz y sus barrios.',
    },
    {
      slug: 'guaymallen',
      name: 'Guaymallen',
      description:
        'Electricidad para obras, ampliaciones y refacciones en Guaymallen. Distribucion por circuitos, tableros ordenados y avance coordinado por etapa.',
      coverageNote: 'Cobertura en Guaymallen y zonas aledañas.',
    },
    {
      slug: 'lujan-de-cuyo',
      name: 'Lujan de Cuyo',
      description:
        'Instalaciones electricas y tableros en Lujan de Cuyo, incluidas zonas rurales y fincas. Relevamiento del alcance real antes de presupuestar.',
      coverageNote: 'Cobertura en Lujan de Cuyo y zonas rurales del departamento.',
    },
    {
      slug: 'las-heras',
      name: 'Las Heras',
      description:
        'Servicio electrico para viviendas, obras y refacciones en Las Heras. Diagnostico, puesta en seguridad y correccion de circuitos.',
      coverageNote: 'Cobertura en Las Heras y alrededores.',
    },
    {
      slug: 'chacras-de-coria',
      name: 'Chacras de Coria',
      description:
        'Instalaciones, iluminacion de detalle y obras en Chacras de Coria. Terminaciones con rieles, luz lineal y orden de tableros para residencias y comercios.',
      coverageNote: 'Cobertura en Chacras de Coria y Lujan de Cuyo cercano.',
    },
    {
      slug: 'ciudad',
      name: 'Ciudad',
      description:
        'Electricidad para obras, ampliaciones y refacciones en la ciudad de Mendoza. Relevamiento, presupuesto y coordinacion por WhatsApp.',
      coverageNote: 'Cobertura en el Gran Mendoza y la ciudad.',
    },
  ],
  zonesCoverageText: 'Cobertura en Gran Mendoza. Visitas segun zona y agenda.',
  galleryCategories: [
    {
      id: 'rieles-dicroicas',
      title: 'Rieles, dicroicas y luz lineal',
      description: 'Terminaciones de iluminacion para viviendas y locales con rieles electrificados, spots, lineas LED y resolucion de detalle.',
      images: [
        {
          src: 'local-comercial-colgantes-y-rieles.jpg',
          alt: 'Iluminacion terminada con colgantes, spots y rieles en local comercial',
        },
        {
          src: 'cielorraso-con-rieles-y-spots.jpg',
          alt: 'Rieles electrificados y spots instalados en cielorraso comercial',
        },
        {
          src: 'iluminacion-lineal-curva-frontal.jpg',
          alt: 'Iluminacion lineal curva instalada en interior comercial',
        },
        {
          src: 'iluminacion-lineal-curva-lateral.jpg',
          alt: 'Detalle lateral de iluminacion lineal curva en obra terminada',
        },
        {
          src: 'obra-tradicional-ambiente-con-dicroicas.jpeg',
          alt: 'Ambiente de vivienda en obra avanzada con dicroicas empotradas',
        },
      ],
    },
    {
      id: 'construccion-tradicional',
      title: 'Construccion tradicional',
      description: 'Instalaciones sobre mamposteria y losa con puntos de luz, cajas y canalizaciones definidas por sector para obras y refacciones.',
      images: [
        {
          src: 'obra-tradicional-cableado-de-losa.jpeg',
          alt: 'Cableado de losa y salidas electricas en vivienda en obra tradicional',
        },
        {
          src: 'obra-tradicional-cableado-general.jpeg',
          alt: 'Vista general de cableado de cielorraso en obra tradicional',
        },
        {
          src: 'obra-tradicional-instalacion-en-cielorraso-01.jpeg',
          alt: 'Instalacion electrica en cielorraso durante etapa de obra tradicional',
        },
        {
          src: 'obra-tradicional-canalizacion-en-muro.jpeg',
          alt: 'Canalizacion y preparacion de muro para instalacion electrica embutida',
        },
        {
          src: 'obra-tradicional-salidas-electricas-en-bano.jpeg',
          alt: 'Salidas electricas preparadas en baño durante obra y revestimiento',
        },
      ],
    },
    {
      id: 'construccion-seco',
      title: 'Construccion en seco',
      description: 'Tendido electrico sobre estructura metalica, cajas, recorridos y preparacion para cierres en steel frame y sistemas en seco.',
      images: [
        {
          src: 'construccion-seco-vista-general.jpeg',
          alt: 'Vista general de instalacion electrica en obra de construccion en seco',
        },
        {
          src: 'construccion-seco-lineas-por-estructura.jpeg',
          alt: 'Distribucion de lineas electricas sobre estructura metalica',
        },
        {
          src: 'construccion-seco-recorrido-en-cielorraso.jpeg',
          alt: 'Recorrido electrico en cielorraso de obra en steel frame',
        },
        {
          src: 'construccion-seco-aberturas-y-canalizacion.jpeg',
          alt: 'Canalizacion electrica en obra en seco con grandes aberturas',
        },
        {
          src: 'construccion-seco-cielorraso-exterior.jpeg',
          alt: 'Instalacion electrica en cielorraso exterior de estructura metalica',
        },
      ],
    },
    {
      id: 'tableros-sectorizacion',
      title: 'Tableros, cajas y sectorizacion',
      description: 'Preparacion de cajas, distribucion por sectores y puntos de paso para ordenar la instalacion desde la base tecnica.',
      images: [
        {
          src: 'tablero-sectorizado-con-protecciones.jpeg',
          alt: 'Tablero electrico sectorizado con protecciones instaladas y cableado ordenado',
        },
        {
          src: 'construccion-seco-caja-y-tabique.jpeg',
          alt: 'Caja electrica montada y sectorizada sobre tabique de construccion en seco',
        },
        {
          src: 'obra-tradicional-apertura-de-caja-en-muro.jpeg',
          alt: 'Apertura de caja electrica en muro de obra tradicional',
        },
        {
          src: 'obra-tradicional-trazado-de-caja-en-muro.jpeg',
          alt: 'Trazado de caja y punto electrico en muro para sectorizacion',
        },
        {
          src: 'obra-tradicional-marcado-de-caja-en-mamposteria.jpeg',
          alt: 'Marcado tecnico de caja electrica en mamposteria antes de intervenir',
        },
      ],
    },
    {
      id: 'exteriores-complementos',
      title: 'Exteriores y complementos',
      description: 'Luminarias, equipos y puntos especiales que acompañan instalaciones principales en fachadas, cubiertas y espacios exteriores.',
      images: [
        {
          src: 'conexion-electrica-en-cubierta.jpeg',
          alt: 'Conexion electrica de equipo sobre cubierta',
        },
        {
          src: 'luminaria-exterior-en-fachada.jpeg',
          alt: 'Instalacion de luminaria exterior en fachada',
        },
        {
          src: 'ventiladores-de-techo-instalados.jpeg',
          alt: 'Ventiladores de techo instalados en ambiente residencial',
        },
        {
          src: 'conexion-de-equipo-exterior.jpeg',
          alt: 'Conexion electrica de equipo exterior junto a tanque',
        },
      ],
    },
  ],
  testimonials: [
    {
      name: 'Cliente residencial',
      quote: 'Ordeno el tablero y preparo lineas nuevas para una ampliacion. Quedo claro que se hacia en cada etapa.',
      area: 'Capital',
      service: 'Ampliacion y tablero',
    },
    {
      name: 'Comercio local',
      quote: 'Necesitabamos seguir trabajando durante la refaccion y coordino el avance por sectores sin desordenar el local.',
      area: 'Godoy Cruz',
      service: 'Refaccion comercial',
    },
    {
      name: 'Cliente de obra',
      quote: 'Resolvio cableado, tablero y distribucion para que la obra siguiera sin cortes ni improvisaciones.',
      area: 'Guaymallen',
      service: 'Obra y distribucion',
    },
  ],
  faq: [
    {
      question: 'Presupuestan antes de empezar el trabajo?',
      answer:
        'Si. Primero se releva la instalacion o el alcance de obra y despues se informa presupuesto, materiales y forma de trabajo antes de ejecutar.',
    },
    {
      question: 'Pueden trabajar por etapas en una obra o refaccion?',
      answer:
        'Si. Se puede sectorizar el trabajo para avanzar por ambientes, circuitos o etapas segun el ritmo de la obra y la necesidad del cliente.',
    },
    {
      question: 'Se define que materiales y protecciones hacen falta?',
      answer:
        'Si. En el relevamiento se detecta que hace falta corregir, reemplazar o incorporar para que el trabajo quede claro antes de aprobar.',
    },
    {
      question: 'Pueden trabajar con la vivienda o el local en uso?',
      answer:
        'Si, cuando el trabajo lo permite se coordina por sectores para reducir cortes, desorden o interferencias con la actividad del lugar.',
    },
  ],
  footer: {
    addressReference,
    coverageLabel,
    businessLabel,
  },
  seo: {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
  },
};
