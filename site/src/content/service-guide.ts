export type ServiceGuideNeed = 'obras' | 'tablero' | 'instalacion' | 'falla' | 'orientacion';
export type ServiceGuideZone =
  | 'capital'
  | 'godoy-cruz'
  | 'guaymallen'
  | 'las-heras'
  | 'lujan'
  | 'otra';
export type ServiceGuideStage =
  | 'por-comenzar'
  | 'en-ejecucion'
  | 'instalacion-existente'
  | 'urgencia'
  | 'asesoramiento';

export interface ServiceGuideOption<T extends string> {
  value: T;
  label: string;
  description: string;
}

export interface ServiceGuideRecommendation {
  slug: string;
  title: string;
  summary: string;
  messageSubject: string;
}

export const serviceGuideContent = {
  eyebrow: 'Orientador interactivo',
  title: 'Encontra el servicio adecuado en tres pasos',
  description:
    'Selecciona tu necesidad, la zona y el estado del trabajo. Al final vas a obtener una recomendacion y un mensaje listo para enviar por WhatsApp.',
  needs: [
    {
      value: 'obras',
      label: 'Obra, ampliacion o refaccion',
      description: 'Instalacion nueva, reforma integral o trabajo electrico coordinado por etapas.',
    },
    {
      value: 'tablero',
      label: 'Problema en tablero',
      description: 'Termicas que disparan, recalentamiento, protecciones o circuitos desordenados.',
    },
    {
      value: 'instalacion',
      label: 'Instalacion domiciliaria o comercial',
      description: 'Tomas, iluminacion, lineas dedicadas, cableado o ampliacion de circuitos.',
    },
    {
      value: 'falla',
      label: 'Falla o cortocircuito',
      description: 'Corte interno, olor a quemado, falta de energia o protecciones que disparan.',
    },
    {
      value: 'orientacion',
      label: 'Todavia no estoy seguro',
      description: 'Necesitas una primera orientacion para definir el alcance correcto.',
    },
  ] satisfies ServiceGuideOption<ServiceGuideNeed>[],
  zones: [
    { value: 'capital', label: 'Ciudad de Mendoza', description: 'Capital y zonas cercanas.' },
    { value: 'godoy-cruz', label: 'Godoy Cruz', description: 'Visita coordinada segun agenda.' },
    { value: 'guaymallen', label: 'Guaymallen', description: 'Visita coordinada segun agenda.' },
    { value: 'las-heras', label: 'Las Heras', description: 'Visita coordinada segun agenda.' },
    { value: 'lujan', label: 'Lujan de Cuyo', description: 'Visita coordinada segun agenda.' },
    { value: 'otra', label: 'Otra zona', description: 'La cobertura se confirma antes de coordinar.' },
  ] satisfies ServiceGuideOption<ServiceGuideZone>[],
  stages: [
    {
      value: 'por-comenzar',
      label: 'Trabajo por comenzar',
      description: 'Todavia no se inicio la ejecucion.',
    },
    {
      value: 'en-ejecucion',
      label: 'Trabajo en ejecucion',
      description: 'La obra o refaccion ya esta avanzando.',
    },
    {
      value: 'instalacion-existente',
      label: 'Instalacion existente',
      description: 'Se necesita revisar, ampliar o corregir una instalacion actual.',
    },
    {
      value: 'urgencia',
      label: 'Urgencia o falla activa',
      description: 'Existe una falla que requiere puesta en seguridad y diagnostico.',
    },
    {
      value: 'asesoramiento',
      label: 'Necesito asesoramiento',
      description: 'Buscas definir alternativas antes de ejecutar.',
    },
  ] satisfies ServiceGuideOption<ServiceGuideStage>[],
  recommendations: {
    obras: {
      slug: 'electricidad-para-obras-y-refacciones-mendoza',
      title: 'Electricidad para Obras y Refacciones',
      summary:
        'La mejor opcion para instalaciones nuevas, ampliaciones y reformas que necesitan avance ordenado por sectores o etapas.',
      messageSubject: 'electricidad para una obra, ampliacion o refaccion',
    },
    tablero: {
      slug: 'reparacion-tableros-electricos-mendoza',
      title: 'Reparacion de Tableros Electricos',
      summary:
        'Recomendado para revisar protecciones, recalentamientos, disparos recurrentes y distribucion de circuitos.',
      messageSubject: 'revision o reparacion de un tablero electrico',
    },
    instalacion: {
      slug: 'instalaciones-electricas-domiciliarias-mendoza',
      title: 'Instalaciones Electricas Domiciliarias',
      summary:
        'Adecuado para nuevos tomas, iluminacion, lineas dedicadas, cableado y ampliaciones de circuitos.',
      messageSubject: 'una instalacion electrica domiciliaria o comercial',
    },
    falla: {
      slug: 'cortocircuitos-urgencias-electricas-mendoza',
      title: 'Cortocircuitos y Urgencias Electricas',
      summary:
        'La opcion indicada para aislar fallas, poner la instalacion en seguridad y recuperar el servicio por sectores.',
      messageSubject: 'una falla o urgencia electrica',
    },
    orientacion: {
      slug: 'electricidad-para-obras-y-refacciones-mendoza',
      title: 'Orientacion tecnica inicial',
      summary:
        'Vamos a ordenar la necesidad primero y definir que revision o servicio corresponde antes de coordinar una visita.',
      messageSubject: 'orientacion para definir un trabajo electrico',
    },
  } satisfies Record<ServiceGuideNeed, ServiceGuideRecommendation>,
} as const;
