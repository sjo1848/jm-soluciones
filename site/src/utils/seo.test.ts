import { describe, expect, it } from 'vitest';
import type { LandingContent, ServiceDetail } from '../content/types';
import {
  buildLandingPageSchema,
  buildLocalZonePageSchema,
  buildServicePageSchema,
} from './seo';

const service: ServiceDetail = {
  slug: 'electricidad-para-obras-y-refacciones-mendoza',
  title: 'Electricidad para Obras y Refacciones',
  seoTitle: 'Instalaciones Electricas para Obras y Refacciones en Mendoza',
  seoDescription: 'Descripcion SEO del servicio.',
  description: 'Descripcion comercial del servicio.',
  commercialSummary: 'Resumen comercial.',
  whatsappMessage: 'Hola, quiero presupuesto de obra.',
  serviceHighlights: ['Avance por etapas'],
  supportBadge: 'Trabajo por etapas',
  features: ['Montaje de tableros', 'Tendido de lineas'],
  commonJobs: ['Instalaciones trifasicas'],
  relatedGalleryImages: ['construccion-seco-vista-general.jpeg'],
  caseStudy: {
    problem: 'Problema',
    solution: 'Solucion',
    result: 'Resultado',
  },
};

const content: LandingContent = {
  brand: {
    name: 'JM Soluciones Electricas',
    h1: 'Electricidad para Obras y Refacciones',
    descriptor: 'Viviendas • Locales • Obras',
    subtitle: 'Subtitle',
    locationLabel: 'Gran Mendoza',
  },
  contact: {
    whatsapp: '5492613465718',
    phoneLabel: '+54 9 2613 46-5718',
    responseTimeLabel: 'Respuesta por WhatsApp',
  },
  cta: {
    whatsappMessage: 'Hola, quiero presupuesto',
    primaryLabel: 'Coordinar',
    servicesLabel: 'No se que servicio',
    finalLabel: 'Coordinar visita',
    detailLabel: 'Coordinar visita',
    mobileLabel: 'Coordinar',
  },
  legal: {
    availability: 'Disponible',
    warranty: 'Garantia',
    serviceConditions: ['Condicion 1'],
    commercialNotice: 'Aviso',
  },
  heroChecks: ['Obras'],
  trustPoints: ['Punto'],
  proofMetrics: [
    { value: '12+', label: 'Anios', detail: 'Experiencia' },
  ],
  processSteps: [
    { step: 'Paso 1', title: 'Relevamiento', description: 'Desc' },
  ],
  serviceCategories: [
    { title: 'Obras y refacciones', priority: 'high', items: ['Trifasica'] },
  ],
  servicesDetails: [service],
  technicalScope: [
    { title: 'Obras', points: ['Cableado'] },
  ],
  whyChoosePoints: [
    { title: 'Alcance', description: 'Definido' },
  ],
  zones: ['Capital', 'Godoy Cruz'],
  localZones: [
    {
      slug: 'godoy-cruz',
      name: 'Godoy Cruz',
      description: 'Instalaciones en Godoy Cruz.',
      coverageNote: 'Cobertura en Godoy Cruz.',
    },
  ],
  zonesCoverageText: 'Cobertura en Gran Mendoza.',
  galleryCategories: [
    {
      id: 'rieles-dicroicas',
      title: 'Rieles',
      description: 'Desc',
      images: [{ src: 'foto.jpg', alt: 'Foto' }],
    },
  ],
  testimonials: [
    { name: 'Cliente', quote: 'Muy buen trabajo', area: 'Capital' },
  ],
  faq: [
    { question: 'Presupuestan?', answer: 'Si' },
  ],
  footer: {
    addressReference: 'Gran Mendoza',
    coverageLabel: 'Cobertura',
    businessLabel: 'Label',
  },
  seo: {
    title: 'Titulo',
    description: 'Descripcion',
    keywords: 'keywords',
  },
};

const pageUrl = new URL('http://localhost:4321/servicios/electricidad-para-obras-y-refacciones-mendoza/');
const whatsappUrl = 'https://wa.me/5492613465718?text=Hola';

type SchemaNode = Record<string, any>;

function findNode(schema: { '@graph': SchemaNode[] }, type: string): SchemaNode {
  const node = schema['@graph'].find((item) => item['@type'] === type);
  if (!node) throw new Error(`Nodo ${type} no encontrado en el schema`);
  return node;
}

describe('buildServicePageSchema', () => {
  it('incluye LocalBusiness, BreadcrumbList y Service', () => {
    const schema = buildServicePageSchema(content, service, pageUrl, whatsappUrl);
    const types = schema['@graph'].map((node) => node['@type']);

    expect(schema['@context']).toBe('https://schema.org');
    expect(types).toEqual(
      expect.arrayContaining(['LocalBusiness', 'BreadcrumbList', 'Service']),
    );
  });

  it('el BreadcrumbList apunta a inicio y al servicio', () => {
    const schema = buildServicePageSchema(content, service, pageUrl, whatsappUrl);
    const breadcrumb = findNode(schema, 'BreadcrumbList');
    const items = breadcrumb.itemListElement;

    expect(items).toHaveLength(2);
    expect(items[0].name).toBe('Inicio');
    expect(items[1].name).toBe(service.title);
    expect(items[1].item).toBe(pageUrl.toString());
  });

  it('el Service enlaza el offer al WhatsApp', () => {
    const schema = buildServicePageSchema(content, service, pageUrl, whatsappUrl);
    const serviceNode = findNode(schema, 'Service');

    expect(serviceNode.name).toBe(service.title);
    expect(serviceNode.offers.url).toBe(whatsappUrl);
  });
});

describe('buildLandingPageSchema', () => {
  it('incluye FAQPage con las preguntas', () => {
    const schema = buildLandingPageSchema(content, pageUrl, whatsappUrl);
    const faq = findNode(schema, 'FAQPage');

    expect(faq.mainEntity).toHaveLength(content.faq.length);
    expect(faq.mainEntity[0].name).toBe(content.faq[0].question);
  });
});

describe('buildLocalZonePageSchema', () => {
  const zone = content.localZones[0];
  const zoneUrl = new URL('http://localhost:4321/zona/godoy-cruz/');

  it('incluye LocalBusiness, BreadcrumbList y Service', () => {
    const schema = buildLocalZonePageSchema(content, zone, zoneUrl, whatsappUrl);
    const types = schema['@graph'].map((node) => node['@type']);

    expect(types).toEqual(
      expect.arrayContaining(['LocalBusiness', 'BreadcrumbList', 'Service']),
    );
  });

  it('el Service usa el nombre y zona correctos', () => {
    const schema = buildLocalZonePageSchema(content, zone, zoneUrl, whatsappUrl);
    const serviceNode = findNode(schema, 'Service');

    expect(serviceNode.name).toBe(`Electricidad para obras y refacciones en ${zone.name}`);
    expect(serviceNode.areaServed).toBe(zone.name);
    expect(serviceNode.offers.url).toBe(whatsappUrl);
  });

  it('el OfferCatalog lista los servicios del negocio', () => {
    const schema = buildLocalZonePageSchema(content, zone, zoneUrl, whatsappUrl);
    const serviceNode = findNode(schema, 'Service');

    expect(serviceNode.hasOfferCatalog.itemListElement).toHaveLength(
      content.servicesDetails.length,
    );
  });
});
