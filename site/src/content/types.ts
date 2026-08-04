export interface ServiceCategory {
  title: string;
  items: string[];
  priority: 'high' | 'medium' | 'base';
}

export interface ServiceDetail {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  commercialSummary: string;
  whatsappMessage: string;
  serviceHighlights: string[];
  supportBadge: string;
  features: string[];
  commonJobs?: string[];
  relatedGalleryImages: string[];
  caseStudy: {
    problem: string;
    solution: string;
    result: string;
  };
}

export interface WhyChoosePoint {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface TechnicalScopeItem {
  title: string;
  points: string[];
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface WorkGalleryCategory {
  id: string;
  title: string;
  description: string;
  images: GalleryItem[];
}

export interface Testimonial {
  name: string;
  quote: string;
  area: string;
  service?: string;
}

export interface ProofMetric {
  value: string;
  label: string;
  detail: string;
}

export interface TrustBadge {
  title: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface LocalZone {
  slug: string;
  name: string;
  description: string;
  coverageNote: string;
}

export interface LandingContent {
  brand: {
    name: string;
    h1: string;
    descriptor: string;
    subtitle: string;
    locationLabel: string;
  };
  contact: {
    whatsapp: string;
    phoneLabel: string;
    responseTimeLabel: string;
  };
  cta: {
    whatsappMessage: string;
    primaryLabel: string;
    servicesLabel: string;
    finalLabel: string;
    detailLabel: string;
    mobileLabel: string;
  };
  legal: {
    availability: string;
    warranty: string;
    serviceConditions: string[];
    commercialNotice: string;
  };
  heroChecks: string[];
  trustPoints: string[];
  proofMetrics: ProofMetric[];
  processSteps: ProcessStep[];
  serviceCategories: ServiceCategory[];
  servicesDetails: ServiceDetail[];
  technicalScope: TechnicalScopeItem[];
  whyChoosePoints: WhyChoosePoint[];
  zones: string[];
  localZones: LocalZone[];
  zonesCoverageText: string;
  galleryCategories: WorkGalleryCategory[];
  testimonials: Testimonial[];
  faq: FaqItem[];
  footer: {
    addressReference: string;
    coverageLabel: string;
    businessLabel: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}
