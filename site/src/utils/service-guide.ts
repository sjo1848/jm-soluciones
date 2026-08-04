import {
  serviceGuideContent,
  type ServiceGuideNeed,
  type ServiceGuideStage,
  type ServiceGuideZone,
} from '../content/service-guide';
import { buildWhatsAppUrl } from './whatsapp';

export interface ServiceGuideSelection {
  need: ServiceGuideNeed;
  zone: ServiceGuideZone;
  stage: ServiceGuideStage;
}

function findOptionLabel<T extends string>(
  options: readonly { value: T; label: string }[],
  value: T,
): string {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function getServiceGuideRecommendation(need: ServiceGuideNeed) {
  return serviceGuideContent.recommendations[need];
}

export function buildServiceGuideMessage(selection: ServiceGuideSelection): string {
  const recommendation = getServiceGuideRecommendation(selection.need);
  const needLabel = findOptionLabel(serviceGuideContent.needs, selection.need);
  const zoneLabel = findOptionLabel(serviceGuideContent.zones, selection.zone);
  const stageLabel = findOptionLabel(serviceGuideContent.stages, selection.stage);

  return [
    `Hola, quiero consultar por ${recommendation.messageSubject}.`,
    '',
    `Necesidad: ${needLabel}`,
    `Zona: ${zoneLabel}`,
    `Estado actual: ${stageLabel}`,
    '',
    'Quisiera recibir orientacion y coordinar un relevamiento o presupuesto.',
  ].join('\n');
}

export function buildServiceGuideWhatsAppUrl(
  phone: string,
  selection: ServiceGuideSelection,
): string {
  return buildWhatsAppUrl(phone, buildServiceGuideMessage(selection), 'orientador');
}
