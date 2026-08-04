export type WhatsAppSource =
  | 'hero'
  | 'servicios'
  | 'servicio-detalle'
  | 'orientador'
  | 'final'
  | 'flotante'
  | '404'
  | 'zona'
  | 'sin_dato';

const sourceLabelMap: Record<WhatsAppSource, string> = {
  hero: 'hero',
  servicios: 'servicios',
  'servicio-detalle': 'servicio-detalle',
  orientador: 'orientador',
  final: 'final',
  flotante: 'flotante',
  '404': '404',
  zona: 'zona',
  sin_dato: 'sin_dato',
};

export function buildWhatsAppUrl(
  phone: string,
  message: string,
  source?: WhatsAppSource,
): string {
  const cleanedPhone = phone.replace(/\D/g, '');
  const trimmedMessage = message.trim();
  const enrichedMessage =
    source && source !== 'sin_dato'
      ? `${trimmedMessage}\n\nOrigen web: ${sourceLabelMap[source]}`
      : trimmedMessage;
  const text = encodeURIComponent(enrichedMessage);
  return `https://wa.me/${cleanedPhone}?text=${text}`;
}
