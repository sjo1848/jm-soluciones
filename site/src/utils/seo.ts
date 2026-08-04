import type { LandingContent, LocalZone, ServiceDetail } from '../content/types';

export function buildLocalBusinessSchema(
  content: LandingContent,
  pageUrl: URL,
  whatsappUrl: string,
) {
  const addressLocality = import.meta.env.PUBLIC_ADDRESS_LOCALITY ?? 'Mendoza';
  const addressCountry = import.meta.env.PUBLIC_ADDRESS_COUNTRY ?? 'AR';
  // Reactivar Instagram en sameAs cuando el perfil tenga contenido publicado nuevamente.
  const instagramUrl = import.meta.env.PUBLIC_INSTAGRAM_URL ?? '';
  const whatsappPhone = content.contact.whatsapp.replace(/\D/g, '');
  const cleanWhatsAppUrl = whatsappPhone ? `https://wa.me/${whatsappPhone}` : whatsappUrl;
  const sameAs = [pageUrl.origin, instagramUrl, cleanWhatsAppUrl].filter(Boolean);

  const serviceItems = content.serviceCategories.map((category) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: category.title,
      serviceType: category.items.join(', '),
    },
  }));

  const reviews = content.testimonials.map((testimonial) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Person',
      name: testimonial.name,
    },
    reviewBody: testimonial.quote,
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: content.brand.name,
    description: content.seo.description,
    slogan: content.brand.descriptor,
    areaServed: content.zones,
    telephone: content.contact.phoneLabel,
    url: pageUrl.toString(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: content.footer.addressReference,
      addressLocality,
      addressCountry,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: content.contact.phoneLabel,
        areaServed: addressLocality,
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios electricos para obras, refacciones y tableros',
      itemListElement: serviceItems,
    },
    review: reviews,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: reviews.length.toString(),
    },
    sameAs,
  };
}

export function buildLandingPageSchema(
  content: LandingContent,
  pageUrl: URL,
  whatsappUrl: string,
) {
  const localBusiness = buildLocalBusinessSchema(content, pageUrl, whatsappUrl);

  const faqItems = content.faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusiness,
      {
        '@type': 'FAQPage',
        mainEntity: faqItems,
      },
      {
        '@type': 'WebPage',
        name: content.seo.title,
        description: content.seo.description,
        url: pageUrl.toString(),
        about: {
          '@id': pageUrl.toString(),
        },
      },
    ],
  };
}

export function buildLocalZonePageSchema(
  content: LandingContent,
  zone: LocalZone,
  pageUrl: URL,
  whatsappUrl: string,
) {
  const homeUrl = new URL('/', pageUrl);
  const localBusiness = buildLocalBusinessSchema(content, homeUrl, whatsappUrl);

  const serviceItems = content.servicesDetails.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.title,
      url: new URL(`/servicios/${service.slug}`, homeUrl).toString(),
      serviceType: service.features.join(', '),
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusiness,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: homeUrl.toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: `Electricista en ${zone.name}`,
            item: pageUrl.toString(),
          },
        ],
      },
      {
        '@type': 'Service',
        name: `Electricidad para obras y refacciones en ${zone.name}`,
        description: zone.description,
        areaServed: zone.name,
        url: pageUrl.toString(),
        serviceType: content.servicesDetails.map((service) => service.title).join(', '),
        provider: {
          '@type': 'LocalBusiness',
          name: content.brand.name,
          telephone: content.contact.phoneLabel,
          url: homeUrl.toString(),
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Servicios electricos en ${zone.name}`,
          itemListElement: serviceItems,
        },
        offers: {
          '@type': 'Offer',
          url: whatsappUrl,
          availability: 'https://schema.org/InStock',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl.toString(),
        },
      },
    ],
  };
}

export function buildServicePageSchema(
  content: LandingContent,
  service: ServiceDetail,
  pageUrl: URL,
  whatsappUrl: string,
) {
  const homeUrl = new URL('/', pageUrl);
  const localBusiness = buildLocalBusinessSchema(content, homeUrl, whatsappUrl);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      localBusiness,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: homeUrl.toString(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: service.title,
            item: pageUrl.toString(),
          },
        ],
      },
      {
        '@type': 'Service',
        name: service.title,
        description: service.seoDescription,
        areaServed: content.zones,
        url: pageUrl.toString(),
        serviceType: service.features.join(', '),
        provider: {
          '@type': 'LocalBusiness',
          name: content.brand.name,
          telephone: content.contact.phoneLabel,
          url: homeUrl.toString(),
        },
        offers: {
          '@type': 'Offer',
          url: whatsappUrl,
          availability: 'https://schema.org/InStock',
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl.toString(),
        },
      },
    ],
  };
}
