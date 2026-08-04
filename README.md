# JM Soluciones Eléctricas

Landing comercial orientada a obras, ampliaciones, refacciones e instalaciones eléctricas en Gran Mendoza.

## Estado actual

El producto se encuentra técnicamente preparado para una validación final de release:

- UI/UX y contenido comercial consolidados.
- Galería con fotografías reales organizadas por tipología.
- SEO local con páginas por zona y datos estructurados JSON-LD.
- Atribución de consultas mediante enlaces de WhatsApp.
- Tests unitarios con Vitest.
- Quality gate automatizado en GitHub Actions.
- Build estático servido con Nginx para staging.

El despliegue productivo continúa pendiente hasta confirmar:

1. Dominio final y `PUBLIC_SITE_URL`.
2. Referencia o dirección comercial definitiva.
3. Ejecución del preflight con los datos productivos.

## Stack

- Astro 5
- Tailwind CSS 4
- TypeScript
- Vitest
- Docker Compose
- Nginx
- GitHub Actions

## Requisitos

- Docker
- Docker Compose plugin
- Puertos `4321` para desarrollo y `8080` para staging, o puertos alternativos configurados mediante variables de entorno.

## Estructura principal

```text
jm-soluciones/
├── .github/workflows/ci.yml
├── AGENTS.md
├── Makefile
├── compose.yaml
├── compose.staging.yaml
├── docs/
├── scripts/
│   ├── preflight_release.sh
│   ├── check_dist_integrity.sh
│   ├── check_gallery_assets.sh
│   ├── smoke_http_check.sh
│   └── ci_smoke_staging.sh
└── site/
    ├── Dockerfile
    ├── astro.config.mjs
    ├── package.json
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        ├── content/
        ├── layouts/
        ├── pages/
        ├── styles/
        └── utils/
```

## Documentación

- `AGENTS.md`: contexto operativo para continuar el proyecto.
- `docs/README.md`: índice general de documentación.
- `docs/HOJA_DE_RUTA.md`: decisiones, estado vigente y pendientes.
- `docs/ui-ux/`: relevamientos, planes y seguimiento de UI/UX y conversión.
- `docs/operacion/README.md`: operación comercial y métricas.
- `docs/deploy/README.md`: despliegue y demo pública.
- `docs/deploy/evidencia/`: registros históricos de preflight.

## Desarrollo local

Desde la raíz del repositorio:

```bash
docker compose up --build
```

O mediante Make:

```bash
make dev
```

Aplicación:

```text
http://localhost:4321
```

Detener:

```bash
docker compose down
```

O:

```bash
make down
```

## Quality gate local

El comando instala dependencias mediante `npm ci` y ejecuta typecheck, tests y build dentro de un contenedor efímero:

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

El script `release:preflight` ejecuta:

```bash
npm run check
npm run test
npm run build
```

## Staging local

Levantar el build productivo con Nginx:

```bash
make staging
```

O:

```bash
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging
```

URL predeterminada:

```text
http://localhost:8080
```

Puerto alternativo:

```bash
STAGING_PORT=8088 docker compose \
  -f compose.yaml \
  -f compose.staging.yaml \
  up --build -d web_staging
```

Detener staging:

```bash
make staging-down
```

## Preflight de release

Ejecutar antes de publicar:

```bash
make preflight
```

O:

```bash
./scripts/preflight_release.sh
```

El preflight realiza:

1. `npm ci` en un contenedor limpio.
2. Typecheck con Astro.
3. Tests unitarios con Vitest.
4. Build estático.
5. Validación de integridad de `dist`.
6. Validación de activos de galería.
7. Levantado de staging con Nginx.
8. Smoke tests HTTP sobre página principal, robots y sitemap.
9. Registro de evidencia en `docs/deploy/evidencia/`.

Modo estricto de galería:

```bash
ALLOW_MISSING_GALLERY=0 ./scripts/preflight_release.sh
```

Puerto alternativo para staging durante el preflight:

```bash
STAGING_PORT=8088 ./scripts/preflight_release.sh
```

## CI

El workflow `.github/workflows/ci.yml` se ejecuta en pushes a `main`, ramas `ticket/**`, ramas `agent/**` y pull requests hacia `main`.

Quality gate:

- `npm ci`
- `npm run check`
- `npm run test`
- `npm run build`
- integridad del directorio `dist`
- validación de galería
- smoke tests de staging

## Variables de entorno

Usar `site/.env.example` como referencia. No commitear archivos `.env` reales.

### Identidad y contenido

- `PUBLIC_BUSINESS_NAME`
- `PUBLIC_BUSINESS_H1`
- `PUBLIC_BUSINESS_DESCRIPTOR`
- `PUBLIC_BUSINESS_SUBTITLE`
- `PUBLIC_BUSINESS_LABEL`

### Contacto y conversión

- `PUBLIC_WHATSAPP`
- `PUBLIC_PHONE_LABEL`
- `PUBLIC_WHATSAPP_MESSAGE`
- `PUBLIC_INSTAGRAM_URL`, opcional y actualmente desactivada en la interfaz.

### Ubicación y cobertura

- `PUBLIC_LOCATION_LABEL`
- `PUBLIC_COVERAGE_LABEL`
- `PUBLIC_ADDRESS_REFERENCE`
- `PUBLIC_ADDRESS_LOCALITY`
- `PUBLIC_ADDRESS_COUNTRY`

### URL y SEO

- `PUBLIC_SITE_URL`
- `PUBLIC_SEO_TITLE`
- `PUBLIC_SEO_DESCRIPTION`
- `PUBLIC_SEO_KEYWORDS`

Ejemplo mínimo para producción:

```env
PUBLIC_SITE_URL=https://tu-dominio.com
PUBLIC_BUSINESS_NAME=JM Soluciones Electricas
PUBLIC_WHATSAPP=5492613465718
PUBLIC_PHONE_LABEL=+54 9 2613 46-5718
PUBLIC_LOCATION_LABEL=Cobertura en Gran Mendoza
PUBLIC_ADDRESS_REFERENCE=Gran Mendoza, Mendoza
PUBLIC_ADDRESS_LOCALITY=Mendoza
PUBLIC_ADDRESS_COUNTRY=AR
```

## Puntos técnicos clave

- Contenido principal: `site/src/content/landing.ts`
- Tipos de contenido: `site/src/content/types.ts`
- Páginas: `site/src/pages/`
- Generación de URLs de WhatsApp: `site/src/utils/whatsapp.ts`
- Schemas SEO y JSON-LD: `site/src/utils/seo.ts`
- Tests: `site/src/utils/*.test.ts`
- Configuración Vitest: `site/vitest.config.mts`
- Configuración Astro: `site/astro.config.mjs`
- Robots: `site/public/robots.txt`
- Sitemap: `@astrojs/sitemap`

## Convenciones

- No hardcodear contenido comercial en componentes; centralizarlo en `landing.ts`.
- Todo CTA nuevo de WhatsApp debe usar un origen tipado.
- Al agregar un origen, actualizar también el generador y la documentación de métricas.
- Registrar cambios relevantes en `docs/HOJA_DE_RUTA.md`.
- Mantener `astro check`, Vitest y build en verde.
- Trabajar mediante issue, rama y pull request; evitar cambios directos sobre `main`.

## Troubleshooting

### Dependencias inconsistentes

```bash
docker compose down -v
docker compose up --build
```

### Puerto ocupado

Cambiar los puertos en `compose.yaml`, `compose.staging.yaml` o mediante `STAGING_PORT`.

### Falla el preflight por datos productivos

Confirmar las variables de `site/.env.example`, especialmente `PUBLIC_SITE_URL` y `PUBLIC_ADDRESS_REFERENCE`, y volver a ejecutar el preflight.
