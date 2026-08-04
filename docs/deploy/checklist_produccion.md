# Checklist de Produccion

## 1) Datos reales del negocio

- [ ] `PUBLIC_BUSINESS_NAME` cargado con nombre final.
- [ ] `PUBLIC_WHATSAPP` cargado con numero final.
- [ ] `PUBLIC_PHONE_LABEL` validado.
- [ ] `PUBLIC_LOCATION_LABEL` validado.
- [ ] `PUBLIC_ADDRESS_REFERENCE` validado.
- [ ] `PUBLIC_INSTAGRAM_URL` (si aplica).

## 2) Imagenes reales de trabajos electricos

- [ ] Verificar que el set activo de `site/src/assets/gallery/` y `site/src/assets/gallery/fotos/` sea final.
- [ ] Verificar que no haya logos o datos de terceros.

## 3) SEO y dominio

- [ ] `PUBLIC_SITE_URL` con dominio final.
- [ ] `PUBLIC_SEO_TITLE`, `PUBLIC_SEO_DESCRIPTION`, `PUBLIC_SEO_KEYWORDS` revisados.
- [ ] Canonical correcto en homepage y servicios.
- [ ] Sitemap accesible en `/sitemap-index.xml`.

## 4) Validacion tecnica

- [ ] `docker compose run --rm web npm run check`.
- [ ] `docker compose run --rm web npm run build`.
- [ ] `./scripts/check_dist_integrity.sh`.
- [ ] `./scripts/check_gallery_assets.sh`.
- [ ] `./scripts/preflight_release.sh`.

## 5) Go-live

- [ ] Deploy a hosting.
- [ ] DNS apuntando al hosting.
- [ ] SSL activo.
- [ ] Prueba de CTA de WhatsApp y datos visibles de contacto.
- [ ] Verificacion movil y desktop.
