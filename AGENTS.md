# AGENTS.md — Contexto para agentes de trabajo

Documento de traspaso para continuar el proyecto `jm-soluciones` desde un agente nuevo.
Leer junto con `README.md`, `docs/HOJA_DE_RUTA.md` y `docs/README.md`.

## Qué es el proyecto

Landing comercial de servicio tecnico electrico en Gran Mendoza (`JM Soluciones Electricas`).
Stack: **Astro 5 + Tailwind CSS 4 + TypeScript**, ejecucion 100% en contenedores (Docker Compose).
Stack de QA recientemente agregado: **Vitest** para tests unitarios.

Estado: desarrollo interno (pre-QA), sin salida productiva. Falta dominio y direccion final.

## Estructura relevante

- `site/src/content/landing.ts` — TODO el contenido del sitio (servicios, zonas, galeria, FAQ, SEO).
- `site/src/content/types.ts` — tipos de contenido (`LandingContent`, `LocalZone`, `ServiceDetail`).
- `site/src/pages/` — home (`index.astro`), servicios (`servicios/[slug].astro`), zonas locales (`zona/[slug].astro`), 404.
- `site/src/components/sections/` — componentes de UI por seccion (Hero, Services, Gallery, etc.).
- `site/src/utils/whatsapp.ts` — generacion de URLs de WhatsApp con origen de conversion.
- `site/src/utils/seo.ts` — builders de schema JSON-LD (LocalBusiness, Service, zona, FAQ, breadcrumb).
- `site/src/assets/gallery/` — fotos reales organizadas por tipologia (rieles, construccion, tableros, exteriores).
- `scripts/` — preflight, checks de integridad, smoke HTTP, metricas semanales, CI smoke.
- `docs/` — documentacion: hoja de ruta, UI/UX (v1/v2), deploy, operacion y metricas.
- `docs/deploy/evidencia/` — logs de preflight historicos.

## Comandos (siempre en contenedor)

```bash
docker compose up --build            # dev server en http://localhost:4321 (o make dev)
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging   # staging nginx :8080
```

Validacion completa (equivalente a CI):

```bash
docker compose exec -T web sh -lc "npm run check && npm run test && npm run build"
./scripts/check_dist_integrity.sh
./scripts/check_gallery_assets.sh
```

Detalle:
- `npm run check` — `astro check` (typecheck). Debe dar 0 errores.
- `npm run test` — Vitest (13 tests: `src/utils/whatsapp.test.ts`, `src/utils/seo.test.ts`).
- `npm run build` — build estatico de 13 paginas (home + 4 servicios + 7 zonas + 404).
- `./scripts/preflight_release.sh` — gate completo de release (usar antes de desplegar).

## Reglas y convenciones

1. **No romper `astro check`**: los `.test.ts` se comprueban con `astro check`, mantenerlos tipados.
2. **Contenido centralizado**: NO hardcodear texto comercial en componentes; todo va en `landing.ts`.
3. **Origenes WhatsApp**: nuevos CTAs deben pasar un source valido en `buildWhatsAppUrl` (tipos en `whatsapp.ts`). Al agregar un source, actualizar:
   - `scripts/generate_weekly_metrics.sh`
   - `docs/operacion/metricas/README.md` (lista de valores de `origen_cta`)
4. **Documentacion versionada**: cada cambio relevante se registra en `docs/HOJA_DE_RUTA.md` con fecha.
5. **Galeria**: fotos reales organizadas por carpeta de tipologia; los nombres deben ser descriptivos. `check_gallery_assets.sh` valida carpetas no vacias + archivos referenciados en `landing.ts`/`index.astro`.
6. **`.env.example` es la fuente de datos de contacto/SEO** (se leen via `import.meta.env.PUBLIC_*`). Nunca commitear `.env` real.
7. **SEO local**: las 7 zonas (`/zona/{slug}`) se generan desde `localZones` en `landing.ts`. Para agregar/editar una zona, editar ahi; el schema JSON-LD se genera en `seo.ts` (`buildLocalZonePageSchema`).

## Estado al 2026-08-04

Ciclos UI/UX v1 y v2 completos. Galeria real curada con filtros. SEO local implementado (7 paginas de zona + JSON-LD + internal linking). Tests Vitest en verde. CI configurado (check/build/integridad/galeria/smoke).

Pendientes de negocio (requieren insumos del cliente):
1. Confirmar direccion/referencia final (`PUBLIC_ADDRESS_REFERENCE`).
2. Definir dominio y setear `PUBLIC_SITE_URL` productivo.
3. Re-ejecutar `preflight_release.sh` con esos datos definitivos.

Ideas de mejora anotadas (sin hacer):
- Paginas de servicio por zona (combinar `servicios` + `zona`) si se quiere profundizar SEO.
- Reactivar Instagram en UI/`sameAs` cuando el perfil tenga contenido (puntos comentados en codigo).
- Cargar metricas reales en `docs/operacion/metricas/plantilla_consultas_jm.csv`.
