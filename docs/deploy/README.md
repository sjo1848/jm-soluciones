# Deploy y Publicacion

## Objetivo

Publicar una URL accesible y dejar evidencia tecnica de la release.

## Preflight obligatorio

Desde raiz del repo:

```bash
./scripts/preflight_release.sh
```

Opcional con puerto alternativo:

```bash
STAGING_PORT=8088 ./scripts/preflight_release.sh
```

Esto valida:
- `astro check`
- `astro build`
- arranque de staging Nginx (`:8080`)
- respuesta HTTP 200

La evidencia queda en:
- `docs/deploy/evidencia/`

## Opcion A: Staging local (Docker + Nginx)

Para pruebas locales:

```bash
docker compose -f compose.yaml -f compose.staging.yaml up -d --build web_staging
```

URL:
- `http://localhost:8080`

Si el puerto `8080` esta ocupado:

```bash
STAGING_PORT=8088 docker compose -f compose.yaml -f compose.staging.yaml up -d --build web_staging
```

Apagar:

```bash
docker compose -f compose.yaml -f compose.staging.yaml down
```

## Opcion B: Demo publica gratis (Cloudflare Tunnel)

Usar cuando necesites compartir la web sin abrir puertos ni contratar dominio.

Prerequisito:
- staging local corriendo en `http://localhost:8080` o `http://localhost:8088`

Comando:

```bash
docker run --rm --network host cloudflare/cloudflared:latest tunnel --url http://localhost:8088
```

Resultado esperado:
- Cloudflare devuelve una URL publica temporal `https://*.trycloudflare.com`.
- Esa URL la podes compartir para demo.

Notas:
- La URL cambia en cada ejecucion.
- Es para mostrar avances, no para produccion final.

## Opcion C: Hosting productivo (cuando tengas dominio)

Puede ser cualquier proveedor estatico compatible con `dist/`.

## Checklist de dominio

1. Apuntar DNS del dominio al proveedor elegido.
2. Confirmar SSL/TLS activo en el dominio final.
3. Ajustar `PUBLIC_SITE_URL` al dominio definitivo.
4. Rebuild + redeploy.
5. Validar canonical, sitemap y robots en la URL final.

Checklist completo:
- `docs/deploy/checklist_produccion.md`

## Evidencia minima de publicacion

Registrar:
- URL publicada.
- Fecha/hora.
- HTTP 200.
- Captura de homepage.
- Confirmacion de WhatsApp y datos de contacto.
