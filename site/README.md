# jm-soluciones - Frontend Base (Astro)

Base tecnica del proyecto, orientada a landing de conversion con contenido centralizado y trabajo 100% en contenedores.

## Regla operativa

- No ejecutar Node/NPM en host.
- Todo se corre con `docker compose` o `docker run`.

## Estructura

```text
site/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   └── ui/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── Dockerfile
└── package.json
```

## Comandos (contenedores)

Desde la raiz del repo:

```bash
# levantar entorno de desarrollo
docker compose up --build

# parar entorno
docker compose down

# build de produccion
docker compose run --rm web npm run build

# chequeo de tipos Astro
docker compose run --rm web npm run check

# previsualizacion tipo staging (Nginx sirviendo dist)
docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging

# apagar staging
docker compose -f compose.yaml -f compose.staging.yaml down

# preflight de release (desde raiz del repo)
./scripts/preflight_release.sh
```

Landing local:

- `http://localhost:4321`
- `http://localhost:8080` (staging, por defecto)
- `http://localhost:8088` (si `8080` esta ocupado)

## Notas

- El contenido principal se define en `src/content/landing.ts`.
- El enlace de WhatsApp se genera desde `src/utils/whatsapp.ts`.
- SEO y schema local se generan desde `src/utils/seo.ts`.
- Copiar `.env.example` a `.env` para setear `PUBLIC_SITE_URL` en despliegue.
- `robots.txt` se sirve desde `public/robots.txt`.
- El sitemap se genera con `@astrojs/sitemap`.
