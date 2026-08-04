import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, type WhatsAppSource } from './whatsapp';

describe('buildWhatsAppUrl', () => {
  it('construye URL wa.me con numero y mensaje codificado', () => {
    const url = buildWhatsAppUrl('5492613465718', 'Hola, quiero un presupuesto');
    expect(url).toBe(
      'https://wa.me/5492613465718?text=Hola%2C%20quiero%20un%20presupuesto',
    );
  });

  it('limpia caracteres no numericos del telefono', () => {
    const url = buildWhatsAppUrl('+54 9 2613 46-5718', 'Hola');
    expect(url).toMatch(/^https:\/\/wa\.me\/5492613465718\?/);
  });

  it('agrega el origen web cuando se pasa un source valido', () => {
    const url = buildWhatsAppUrl('5492613465718', 'Hola', 'zona');
    expect(url).toContain('Origen%20web%3A%20zona');
  });

  it('no agrega origen web para sin_dato', () => {
    const url = buildWhatsAppUrl('5492613465718', 'Hola', 'sin_dato');
    expect(url).not.toContain('Origen');
    expect(url).not.toContain('sin_dato');
  });

  it('trimea el mensaje antes de codificar', () => {
    const url = buildWhatsAppUrl('5492613465718', '  Hola  ');
    expect(url).toBe('https://wa.me/5492613465718?text=Hola');
  });

  it('soporta todos los orígenes definidos', () => {
    const sources: WhatsAppSource[] = ['hero', 'servicios', 'servicio-detalle', 'final', 'flotante', '404', 'zona'];
    for (const source of sources) {
      const url = buildWhatsAppUrl('5492613465718', 'Hola', source);
      expect(url).toContain(`Origen%20web%3A%20${source}`);
    }
  });
});
