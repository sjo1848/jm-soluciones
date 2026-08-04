# Insumos Finales Pendientes

Fecha: 2026-03-16
Estado: pendiente de datos finales del negocio

## Resumen

El frente técnico de pre-release ya quedó validado.

Evidencia disponible:
- `docs/deploy/evidencia/preflight_20260316_233231.log`
- `docs/deploy/evidencia/preflight_20260316_233414.log`

Pendientes reales que todavía requieren insumos externos:
- confirmación final de dirección/referencia
- dominio final

## 1. Fotos reales

### Estado actual

Quedó resuelto.

El usuario confirmó que todas las fotos cargadas son reales.

Además, la UI ya quedó actualizada para usar el set real categorizado en `site/src/assets/gallery/` en:
- galería principal
- hero home
- CTA final

Set real activo confirmado y ordenado por carpetas:
- `site/src/assets/gallery/rieles-dicroicas/`
- `site/src/assets/gallery/construccion-tradicional/`
- `site/src/assets/gallery/construccion-seco/`
- `site/src/assets/gallery/tableros/`
- `site/src/assets/gallery/exteriores-y-complementos/`

Se renombraron los archivos usados con nombres descriptivos para dejar trazabilidad tecnica y facilitar futuras curadurias.

### Archivos que hoy tienen impacto directo en la UI

- Hero home:
  - `construccion-seco/construccion-seco-vista-general.jpeg`
  - fallback: `construccion-tradicional/obra-tradicional-cableado-de-losa.jpeg`
  - fallback: `rieles-dicroicas/local-comercial-colgantes-y-rieles.jpg`

- CTA final:
  - `rieles-dicroicas/local-comercial-colgantes-y-rieles.jpg`
  - fallback: `rieles-dicroicas/iluminacion-lineal-curva-frontal.jpg`
  - fallback: `construccion-seco/construccion-seco-aberturas-y-canalizacion.jpeg`

- Páginas de servicio:
  - tableros: `tableros/tablero-sectorizado-con-protecciones.jpeg`
  - instalaciones domiciliarias: `construccion-tradicional/obra-tradicional-ambiente-con-dicroicas.jpeg`
  - urgencias: `construccion-tradicional/obra-tradicional-apertura-de-caja-en-muro.jpeg`
  - obras y refacciones: `construccion-seco/construccion-seco-vista-general.jpeg`

- Galería principal:
  - `rieles-dicroicas`: rieles, dicroicas y luz lineal
  - `construccion-tradicional`: obra humeda, losa, cajas y canalizaciones
  - `construccion-seco`: steel frame y recorridos sobre estructura
  - `tableros-sectorizacion`: tablero real, cajas y preparacion por sectores
  - `exteriores-complementos`: luminarias, equipos y puntos especiales

No requiere acción adicional inmediata.

## 2. Contacto y redes finales

### Valores actualmente asumidos

Tomados de `site/.env.example`:
- `PUBLIC_BUSINESS_NAME=JM Soluciones Electricas`
- `PUBLIC_WHATSAPP=5492613465718`
- `PUBLIC_PHONE_LABEL=+54 9 2613 46-5718`
- `PUBLIC_LOCATION_LABEL=Cobertura en Gran Mendoza`
- `PUBLIC_ADDRESS_REFERENCE=Gran Mendoza, Mendoza.`

### Qué hace falta

- `PUBLIC_WHATSAPP`: confirmado por el usuario
- `PUBLIC_INSTAGRAM_URL`: desactivado por decisión hasta que exista contenido publicado
- `PUBLIC_ADDRESS_REFERENCE`: pendiente de confirmación final

## 3. Dominio final

### Estado actual

- `PUBLIC_SITE_URL=http://localhost:4321`

### Qué hace falta

- definir dominio final
- actualizar `PUBLIC_SITE_URL`
- volver a validar canonical, sitemap y robots sobre la URL real

## 4. Estado del preflight

### Cerrado técnicamente

Se ejecutó `preflight_release.sh` con éxito en `STAGING_PORT=8088`.

Observación operativa:
- el script fue corregido para no bajar el servicio `web` de desarrollo al limpiar `web_staging`

Archivo corregido:
- `scripts/preflight_release.sh`

### Lo único que falta para el cierre final de release

- rerun de preflight contra la configuración final cuando existan:
  - dirección/referencia final
  - dominio real
