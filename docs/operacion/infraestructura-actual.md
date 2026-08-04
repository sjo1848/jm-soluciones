# Infraestructura Actual

Fecha: 2026-03-16

## Resumen

Este proyecto trabaja con `docker compose` como entorno operativo principal.

Regla de trabajo:
- el host orquesta Docker
- la aplicación corre dentro del contenedor `web`
- `npm`, `astro`, `check`, `build` y cualquier validación del proyecto deben ejecutarse dentro del servicio `web`

## Orquestación

Archivo principal:
- `compose.yaml`

Servicio activo:
- `web`

Características:
- build desde `./site`
- `target: dev`
- `working_dir: /app`
- puerto expuesto `4321:4321`
- bind mount `./site:/app`
- volumen persistente `jm_node_modules:/app/node_modules`

## Imagen y runtime

Archivo:
- `site/Dockerfile`

Stages:
- `base`: `node:20-alpine`
- `dev`: ejecuta `npm run dev:host`
- `build`: genera `dist/`
- `production`: `nginx:1.27-alpine`

Conclusión:
- desarrollo y validación viven en Node dentro del contenedor
- producción está pensada como estático servido por Nginx

## Scripts relevantes

Archivo:
- `site/package.json`

Scripts:
- `npm run dev:host`
- `npm run check`
- `npm run build`
- `npm run release:preflight`

## Convención correcta de trabajo

### Sí

```bash
docker compose up -d web
docker compose ps
docker compose logs -f web
docker compose exec -T web npm run check
docker compose exec -T web npm run build
docker compose exec -T web npm run release:preflight
```

### No

```bash
npm run check
npm run build
npx ...
node ...
```

Esos comandos en host no son la fuente de verdad del proyecto.

## Variables de entorno

Archivo base:
- `site/.env.example`

Las variables públicas de Astro viven del lado de la app:
- `PUBLIC_SITE_URL`
- `PUBLIC_INSTAGRAM_URL`
- `PUBLIC_BUSINESS_NAME`
- `PUBLIC_WHATSAPP`
- `PUBLIC_PHONE_LABEL`
- `PUBLIC_SEO_*`

## Publicación y staging

Documentación existente:
- `docs/deploy/README.md`
- `docs/deploy/checklist_produccion.md`

Notas:
- hay un flujo de `preflight` documentado
- hay staging con Docker + Nginx
- hay demo temporal con Cloudflare Tunnel
- el entorno `dev` de Astro permite `allowedHosts` para que los túneles temporales de demo no sean bloqueados por host desconocido

## Implicancia operativa para futuros cambios

Desde ahora, para este proyecto:
- no asumir Node funcional en host
- no asumir `npx` local como entorno válido
- usar Docker Compose como única base operativa
- validar siempre dentro de `web`

## Corrección de criterio

Error a evitar:
- intentar ejecutar utilidades del proyecto desde el host cuando el proyecto ya define un entorno contenedorizado

Criterio correcto:
- si una tarea requiere runtime del proyecto, primero buscar la forma de resolverla dentro de `docker compose exec web`
