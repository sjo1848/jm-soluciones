# AGENTS.md — Contexto para agentes de trabajo

Documento de traspaso para continuar el proyecto `jm-soluciones` desde un agente nuevo.
Leer junto con `README.md`, `docs/HOJA_DE_RUTA.md` y `docs/README.md`.

## Qué es el proyecto

Landing comercial de servicio técnico eléctrico en Gran Mendoza (`JM Soluciones Eléctricas`).

Stack principal:

- Astro 5
- Tailwind CSS 4
- TypeScript
- Vitest
- Docker Compose
- Nginx
- GitHub Actions

Estado: producto técnicamente preparado para validación final de release, pero todavía sin despliegue productivo. Faltan dominio y referencia o dirección final.

## Estructura relevante

- `site/src/content/landing.ts` — contenido del sitio: servicios, zonas, galería, FAQ y SEO.
- `site/src/content/types.ts` — tipos de contenido (`LandingContent`, `LocalZone`, `ServiceDetail`).
- `site/src/pages/` — home, servicios, zonas locales y 404.
- `site/src/components/sections/` — componentes de UI por sección.
- `site/src/utils/whatsapp.ts` — generación de URLs de WhatsApp con origen de conversión.
- `site/src/utils/seo.ts` — builders de schema JSON-LD.
- `site/src/utils/*.test.ts` — tests unitarios de WhatsApp y SEO.
- `site/src/assets/gallery/` — fotos reales organizadas por tipología.
- `scripts/` — preflight, integridad, galería, smoke HTTP y métricas.
- `docs/` — hoja de ruta, UI/UX, deploy, operación y métricas.
- `docs/deploy/evidencia/` — logs históricos de preflight.

## Comandos

Desarrollo:

```bash
docker compose up --build
```

Quality gate reproducible desde una clonación limpia:

```bash
make check
```

Comando equivalente:

```bash
docker run --rm \
  -v "$PWD/site":/app \
  -w /app \
  node:20-alpine \
  sh -lc "npm ci && npm run release:preflight"
```

Staging:

```bash
make staging
```

Preflight completo de release:

```bash
make preflight
```

## Quality gate obligatorio

La validación local, CI y preflight comparten el mismo núcleo:

1. `npm ci`
2. `npm run check`
3. `npm run test`
4. `npm run build`
5. `scripts/check_dist_integrity.sh`
6. `scripts/check_gallery_assets.sh`
7. smoke HTTP sobre staging

No declarar un cambio validado si alguno de estos pasos no se ejecutó o no está comprobado.

## Reglas y convenciones

1. **No romper `astro check`**: mantener componentes, utilidades y tests correctamente tipados.
2. **Tests obligatorios**: todo cambio en lógica de WhatsApp, SEO o transformaciones de contenido debe incluir o actualizar pruebas.
3. **Contenido centralizado**: no hardcodear texto comercial en componentes; usar `landing.ts`.
4. **Orígenes de WhatsApp**: nuevos CTA deben pasar un source válido a `buildWhatsAppUrl`.
5. Al agregar un source, actualizar también:
   - `scripts/generate_weekly_metrics.sh`
   - `docs/operacion/metricas/README.md`
6. **Documentación versionada**: registrar cada cambio relevante en `docs/HOJA_DE_RUTA.md` con fecha.
7. **Galería**: conservar la organización por tipología y nombres descriptivos.
8. **Variables públicas**: `.env.example` es la fuente de referencia. Nunca commitear `.env` real.
9. **SEO local**: las zonas se generan desde `localZones` en `landing.ts`; sus schemas se construyen en `seo.ts`.
10. **Flujo GitHub**: crear issue, rama y pull request. No trabajar directamente sobre `main`.

## Estado al 2026-08-04

Completado:

- ciclos UI/UX v1 y v2;
- galería real curada con filtros;
- SEO local con siete páginas por zona, JSON-LD e internal linking;
- tests unitarios con Vitest;
- CI con typecheck, tests, build, integridad, galería y smoke;
- preflight reproducible con instalación limpia de dependencias.

Pendientes de negocio:

1. Confirmar `PUBLIC_ADDRESS_REFERENCE`.
2. Definir dominio y configurar `PUBLIC_SITE_URL`.
3. Ejecutar `preflight_release.sh` con los datos definitivos.
4. Publicar y ejecutar validación posdeploy.

Ideas de mejora no iniciadas:

- páginas de servicio por zona;
- reactivar Instagram cuando el perfil tenga contenido;
- cargar métricas comerciales reales;
- medir rendimiento y conversión después del despliegue.
