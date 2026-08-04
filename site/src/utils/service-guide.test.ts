import { describe, expect, it } from 'vitest';
import {
  buildServiceGuideMessage,
  buildServiceGuideWhatsAppUrl,
  getServiceGuideRecommendation,
  type ServiceGuideSelection,
} from './service-guide';

const selection: ServiceGuideSelection = {
  need: 'obras',
  zone: 'godoy-cruz',
  stage: 'en-ejecucion',
};

describe('service guide', () => {
  it('recomienda la pagina correspondiente a la necesidad', () => {
    expect(getServiceGuideRecommendation('tablero').slug).toBe(
      'reparacion-tableros-electricos-mendoza',
    );
    expect(getServiceGuideRecommendation('falla').slug).toBe(
      'cortocircuitos-urgencias-electricas-mendoza',
    );
  });

  it('mantiene una salida util cuando el usuario no conoce el servicio', () => {
    const recommendation = getServiceGuideRecommendation('orientacion');
    expect(recommendation.title).toBe('Orientacion tecnica inicial');
    expect(recommendation.slug).toBe('electricidad-para-obras-y-refacciones-mendoza');
  });

  it('genera un mensaje con necesidad, zona y estado', () => {
    const message = buildServiceGuideMessage(selection);
    expect(message).toContain('Obra, ampliacion o refaccion');
    expect(message).toContain('Godoy Cruz');
    expect(message).toContain('Trabajo en ejecucion');
  });

  it('genera una URL de WhatsApp atribuida al orientador', () => {
    const url = decodeURIComponent(buildServiceGuideWhatsAppUrl('+54 9 2613 46-5718', selection));
    expect(url).toContain('https://wa.me/5492613465718?text=');
    expect(url).toContain('Origen web: orientador');
  });
});
