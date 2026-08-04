# Seguimiento del Plan Maestro UI/UX v1

Fecha de inicio: 2026-03-16
Versión base: `plan-maestro-ui-ux-v1-2026-03-16.md`
Estado general: ciclo `v1` cerrado

## Estado por fase

- `Fase 0. Alineación de fuente de verdad`: completada
- `Fase 1. Reposicionamiento del mensaje principal`: completada
- `Fase 2. Reescritura del cierre comercial`: completada
- `Fase 3. Endurecimiento de confianza`: completada
- `Fase 4. Optimización CRO sin sobre diseño`: completada
- `Fase 5. Métricas MVP realistas`: completada
- `Fase 6. Validación integral`: completada

## Registro de ejecución

### 2026-03-16 - Inicio de Fase 0

Objetivo operativo:

- alinear scripts, documentación y taxonomía de métricas con el producto actual

Hallazgos detectados:

- `scripts/check_dist_integrity.sh` exigía links `tel:` aunque la estrategia actual es WhatsApp-first
- `scripts/smoke_http_check.sh` exigía links `tel:` bajo la misma suposición
- `docs/operacion/metricas/README.md` mantenía una taxonomía vieja de `origen_cta` con `header`
- `docs/operacion/metricas/resumen_semanal_template.md` seguía contemplando `Header` y no contemplaba `servicio-detalle` ni `404`
- `docs/deploy/checklist_produccion.md` seguía pidiendo prueba de WhatsApp y llamada
- `site/src/utils/whatsapp.ts` todavía aceptaba `header` como fuente y mantenía un helper de llamada que ya no se usa

Acciones implementadas:

- se robustecieron los scripts de smoke e integridad para que no fallen por ausencia de patrones opcionales
- se eliminó la exigencia de `tel:` en validaciones automáticas
- se alineó la taxonomía de `origen_cta` en documentación y código
- se actualizó la hoja de ruta para reflejar la estrategia actual de contacto
- se creó esta bitácora para seguir cada fase del plan maestro sin perder trazabilidad

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK

Resultado de fase:

- `Fase 0` cerrada
- siguiente fase recomendada: `Fase 1. Reposicionamiento del mensaje principal`

### 2026-03-16 - Cierre de Fase 1

Objetivo operativo:

- hacer que la propuesta principal se entienda como electricidad para obras y refacciones

Acciones implementadas:

- se reposicionó el `H1`, descriptor y subtítulo del hero hacia obras, ampliaciones y refacciones
- se reescribió el mensaje de WhatsApp principal para consultas de obra, refacción o instalación
- se ajustaron `heroChecks` y `commercialNotice` para salir del tono generalista y de urgencia
- se alinearon `seoTitle`, `seoDescription`, `PUBLIC_BUSINESS_LABEL` y `.env.example` con el nuevo foco comercial
- se corrigió el texto secundario del header para que no siga diciendo `Servicio tecnico electrico en Mendoza`
- se actualizó la tarjeta lateral del hero para pedir zona, tipo de trabajo y etapa actual

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- verificación de HTML renderizado en `site/dist/index.html`: OK

Limitación registrada:

- no se pudo correr Playwright desde host porque `npx` quedó bloqueado por Volta sin una versión activa de Node en ese entorno
- la validación visual fina de esta fase queda pendiente para una próxima iteración dentro de infraestructura compatible

Resultado de fase:

- `Fase 1` cerrada
- siguiente fase recomendada: `Fase 2. Reescritura del cierre comercial`

### 2026-03-16 - Cierre de Fase 2

Objetivo operativo:

- cerrar la home desde presupuesto, obra y refacción, no desde falla urgente

Acciones implementadas:

- se reescribió el bloque `FinalCta` hacia presupuesto técnico y coordinación de visita
- se cambió la semántica interna de `legal.urgency` a `legal.availability`
- se reemplazaron chips genéricos por `Obras`, `Refacciones` e `Instalaciones`
- se ajustó el mensaje secundario del cierre para reforzar alcance, zona y tiempos
- se mantuvo WhatsApp como único CTA principal del bloque

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- verificación de HTML renderizado en `site/dist/index.html`: OK

Resultado de fase:

- `Fase 2` cerrada
- siguiente fase recomendada: `Fase 3. Endurecimiento de confianza`

### 2026-03-16 - Cierre de Fase 3

Objetivo operativo:

- subir la percepción de empresa seria con señales concretas de orden, experiencia y coordinación

Acciones implementadas:

- se reescribieron `trustPoints` con compromisos operativos más específicos
- se reforzaron `proofMetrics` para que expresen experiencia, foco y cobertura con más claridad
- `TrustBar` ahora muestra también el detalle de cada métrica en la UI
- se reescribieron `whyChoosePoints` con argumentos de obra, tableros, cargas y trabajo por etapas
- se limpió `WhyChooseUs.astro` para quitar el rótulo genérico `Valor 01`, `Valor 02`, etc.
- se reescribieron testimonios para que hablen de ampliaciones, refacciones y distribución real, no de elogios vagos
- se actualizaron los títulos y descripciones de secciones de diferenciales y testimonios para evitar tono plantilla

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- verificación de HTML renderizado en `site/dist/index.html`: OK

Limitación registrada:

- la validación visual con Playwright sigue pendiente por la misma restricción del entorno host con Volta

Resultado de fase:

- `Fase 3` cerrada
- siguiente fase recomendada: `Fase 4. Optimización CRO sin sobre diseño`

### 2026-03-16 - Cierre de Fase 4

Objetivo operativo:

- reducir fricción de contacto y hacer más lineal la conversión entre hero, servicios y cierre

Acciones implementadas:

- se redefinieron labels de CTA para que cada bloque tenga un rol claro:
  - hero: `Coordinar presupuesto por WhatsApp`
  - servicios: `No se que servicio elegir`
  - detalle: `Coordinar visita y presupuesto`
  - cierre: `Coordinar visita por WhatsApp`
  - mobile: `Coordinar presupuesto`
- en `Services.astro` el servicio destacado ahora prioriza WhatsApp sobre lectura de detalle
- se reescribió el mensaje general de WhatsApp de servicios para orientar usuarios que todavía no saben qué servicio corresponde
- se sumó microcopy de apoyo en la sección de servicios para bajar la fricción cuando el alcance aún no está definido
- se simplificaron CTAs secundarios a `Pedir presupuesto` y `Ver alcance`
- se alinearon el CTA de páginas de servicio y la barra mobile con el mismo criterio de conversión
- se ajustó el copy del overlay en páginas de servicio a `Coordinacion y presupuesto por WhatsApp`

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- verificación de HTML renderizado en `site/dist/index.html`, `site/dist/404.html` y páginas de servicio: OK

Limitación registrada:

- la validación visual con Playwright sigue pendiente por la misma restricción del entorno host con Volta

Resultado de fase:

- `Fase 4` cerrada
- siguiente fase recomendada: `Fase 5. Métricas MVP realistas`

### 2026-03-16 - Cierre de Fase 5

Objetivo operativo:

- dejar un sistema de métricas usable sin backend ni analytics complejos

Acciones implementadas:

- `buildWhatsAppUrl()` ahora adjunta `Origen web: ...` al mensaje cuando el CTA tiene fuente instrumentada
- se documentó el nuevo flujo operativo para copiar `origen_cta` desde la conversación de WhatsApp al CSV
- se agregó `scripts/generate_weekly_metrics.sh` para generar un resumen semanal base a partir del CSV
- se actualizó la documentación de métricas con comandos de uso y reglas de carga
- se aclaró que `objeciones` y `ajustes recomendados` siguen siendo lectura manual
- se enlazó el script desde la documentación operativa

Validación:

- `./scripts/generate_weekly_metrics.sh docs/operacion/metricas/plantilla_consultas_jm.csv 2026-03-03 2026-03-03`: OK
- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- verificación de HTML renderizado: los links WhatsApp incluyen `Origen web: hero|servicios|servicio-detalle|final|flotante|404`

Resultado de fase:

- `Fase 5` cerrada
- siguiente fase recomendada: `Fase 6. Validación integral`

### 2026-03-16 - Cierre de Fase 6

Objetivo operativo:

- cerrar la iteración con evidencia técnica y visual, no solo con revisión de código

Acciones implementadas:

- se agregó un override de QA por query param: `?theme=light` y `?theme=dark`
- se validó que el HTML renderizado respete ese override de tema
- se ejecutó nuevamente `check`, `build`, `check_dist_integrity.sh` y `smoke_http_check.sh`
- se generaron snapshots de QA con Chrome headless para desktop y mobile
- se dejó evidencia visual en `output/qa-snapshots/`

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- `google-chrome --headless --dump-dom 'http://localhost:4321/?theme=light|dark'`: OK
- artefactos generados:
  - `home-desktop-light.png`
  - `home-desktop-dark.png`
  - `home-mobile-light.png`
  - `home-mobile-dark.png`
  - `service-featured-desktop-dark.png`
  - `service-featured-mobile-light.png`

Resultado de fase:

- `Fase 6` cerrada
- ciclo `v1` del plan maestro completado
