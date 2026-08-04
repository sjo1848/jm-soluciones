# Hoja de Ruta y Decisiones - jm-soluciones

## Objetivo

Mantener una referencia unica de contexto para producto, contenido y despliegue.

## Estado actual (2026-03-04)

- Marca principal: `jm-soluciones`.
- Landing orientada a servicio tecnico electrico en Gran Mendoza.
- Fase actual: desarrollo interno (pre-QA), sin salida productiva.
- Deploy productivo: pendiente (sin dominio por ahora).
- Demo externa: disponible por Cloudflare Tunnel temporal.

## Decisiones tomadas

### 2026-03-04

- Se elimino documentacion heredada que mezclaba otra marca/proyecto.
- Se unifico documentacion activa en `docs/README.md`.
- Se establecio `jm-soluciones` como default en contenido y variables de entorno.
- Se mantuvo WhatsApp con color verde clasico para CTA.
- Se dejo opcion de demo publica gratis via Cloudflare Tunnel.
- Se cargaron imagenes temporales de demo en galeria y OG hasta recibir fotos finales del cliente.

### 2026-03-14

- Se restauraron `trabajo-01.jpg` a `trabajo-04.jpg` usando imagenes disponibles del set temporal para asegurar build y preflight.
- Se habilito barra de acciones en mobile (`MobileActionBar`) con CTA de WhatsApp y llamada.
- Se oculto el flotante de redes en mobile para evitar superposicion con la barra inferior.

### 2026-03-16

- Se documentó la infraestructura operativa real basada en `docker compose`.
- Se creó una línea documental versionada para UI/UX y CRO en `docs/ui-ux/`.
- Se registró un relevamiento integral `v1` del estado actual del sitio.
- Se definió un plan maestro `v1` para evolución de UI/UX, confianza y conversión.
- Se consolidó WhatsApp como único CTA activo; la llamada quedó como dato de referencia no clickeable.
- Se inició la `Fase 0` del plan maestro para alinear scripts, métricas y documentación con el producto actual.
- Se cerró la `Fase 0` del plan maestro con validación en contenedor y scripts de smoke/integridad alineados a la estrategia actual.
- Se cerró la `Fase 1` del plan maestro reposicionando el mensaje principal hacia obras y refacciones.
- Se cerró la `Fase 2` del plan maestro reescribiendo el cierre comercial desde presupuesto técnico y coordinación de visita.
- Se cerró la `Fase 3` del plan maestro endureciendo señales de confianza, diferenciales y testimonios.
- Se cerró la `Fase 4` del plan maestro optimizando microcopy y continuidad de conversión entre hero, servicios, detalle y CTA final.
- Se cerró la `Fase 5` del plan maestro dejando una atribución mínima real en WhatsApp y un resumen semanal base a partir del CSV.
- Se cerró la `Fase 6` del plan maestro con validación integral, override de tema para QA y snapshots de evidencia en `output/qa-snapshots/`.
- Se cerró el ciclo `v1` de UI/UX y CRO y se abrió una nueva iteración documentada `v2`.
- Se creó un nuevo relevamiento `v2`, un nuevo plan maestro `v2` y una nueva bitácora de seguimiento en `docs/ui-ux/`.
- Se inició la `Fase 1` de `v2` para reencuadrar proceso, FAQ y páginas de servicio desde una lógica de relevamiento y presupuesto.
- Se cerró la `Fase 1` de `v2` con validación en contenedor, integridad de `dist` y smoke HTTP en desarrollo.
- Se cerró la `Fase 2` de `v2` profundizando comercialmente las páginas de servicio con contenido estructurado por alcance, highlights y trabajos frecuentes.
- Se habilitó `server.allowedHosts` en Astro dev para soportar demos externas temporales vía Cloudflare Tunnel sin bloqueo de host.
- Se cerró la `Fase 3` de `v2` unificando categorías, especialidades y lenguaje técnico con foco en obras, tableros, instalaciones y puesta en seguridad.
- Se cerró la `Fase 4` de `v2` con validación integral y evidencia visual en `output/playwright/v2-validation/`.
- Se ejecutó `preflight_release.sh` con éxito en `STAGING_PORT=8088` y se dejó nueva evidencia en `docs/deploy/evidencia/`.
- Se corrigió `scripts/preflight_release.sh` para que la limpieza de `web_staging` no baje el servicio `web` de desarrollo.
- Se documentaron los insumos finales pendientes de negocio y activos en `docs/deploy/insumos-finales-pendientes-2026-03-16.md`.
- Se integró el nuevo set de fotos reales ubicado en `site/src/assets/gallery/fotos/` para la galería principal y fondos visibles de la home.
- Se confirmó que el material fotográfico cargado actualmente es real; quedó cerrado el pendiente de reemplazo de galería.
- Se reorganizó `site/src/assets/gallery/` por tipologias reales de trabajo (`rieles-dicroicas`, `construccion-tradicional`, `construccion-seco`, `tableros`, `exteriores-y-complementos`) y se renombraron los archivos usados con nombres descriptivos.
- Se reemplazó la galería plana por una galería curada con filtros por tipo de instalacion para reducir repeticion visual y mejorar lectura comercial.
- Se incorporó una foto real de tablero como referencia principal de la categoria de tableros y del servicio asociado.
- Se desactivó Instagram de la UI y del `sameAs` por decisión de producto, dejando puntos de reactivación comentados en código.
- Se confirmó `PUBLIC_WHATSAPP` como dato válido actual; dirección final y dominio siguen pendientes.

### 2026-08-04

- Se corrigió `scripts/check_gallery_assets.sh` para la estructura actual de galería: ahora valida categorías por tipología (carpetas no vacías) y la existencia de los archivos realmente referenciados en `landing.ts` e `index.astro`, eliminando falsos positivos de CI que buscaban archivos legacy (`trabajo-01.jpg`).
- Se implementó SEO local: 7 páginas por zona (`/zona/{slug}`) para Capital, Godoy Cruz, Guaymallén, Luján de Cuyo, Las Heras, Chacras de Coria y Ciudad, con contenido único por localidad.
- Se agregó schema JSON-LD por zona (`LocalBusiness` + `Service` + `BreadcrumbList`) en `buildLocalZonePageSchema`.
- Se enlazaron las zonas de la home hacia las nuevas páginas locales (internal linking para indexación).
- Se sumó el origen `zona` a la atribución de WhatsApp.
- Se alineó el origen `zona` en el sistema de métricas: valores permitidos en `docs/operacion/metricas/README.md` y conteo en `scripts/generate_weekly_metrics.sh`.
- Se incorporó Vitest como framework de tests unitarios (`site/vitest.config.mts`) con script `npm run test`.
- Se agregaron 13 tests unitarios para `whatsapp.ts` (construcción de URL, limpieza de teléfono, orígenes) y `seo.ts` (schemas de servicio, landing y zona). Validación: `check` sin errores, tests 13/13, build 13 páginas.

## Pendientes priorizados

1. Confirmar referencia final de direccion para produccion.
2. Definir dominio final y setear `PUBLIC_SITE_URL` productivo.
3. Ejecutar preflight final y registrar evidencia de release con esos datos definitivos.

## Regla de continuidad

- Cada cambio relevante debe registrarse en este archivo con fecha.
- Si cambia una decision, no borrar historia: agregar una nueva entrada.
- Si hay conflicto entre documentos, prevalece:
  1. Este archivo (`docs/HOJA_DE_RUTA.md`)
  2. `docs/deploy/README.md`
  3. `README.md`

## Checklist rapido por iteracion

1. Actualizar contenido/estilos.
2. Ejecutar `npm run check` y `npm run build` en contenedor.
3. Verificar `check_dist_integrity.sh`.
4. Registrar resultado en esta hoja.

## Traspaso a nuevo chat (2026-03-05)

Nota: este bloque es historico y refleja el estado del proyecto al 2026-03-05. El estado vigente es el documentado mas arriba en `Decisiones tomadas` y `Pendientes priorizados`.

- Estado: limpio de referencias AMR/Refrigeracion.
- Marca default aplicada: `jm-soluciones`.
- Galeria actual: imagenes temporales de demo (pendiente reemplazo por fotos reales).
- Validaciones: `check`, `build`, `check_dist_integrity` en OK.
- Demo publica temporal: tunnel Cloudflare activo al momento del cierre (URL cambia por sesion).

Pendientes activos:
1. Reemplazar fotos temporales por fotos reales.
2. Confirmar datos finales de contacto/redes.
3. Definir dominio y `PUBLIC_SITE_URL` final.
4. Ejecutar preflight final y evidencia de release.
