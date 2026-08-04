# Seguimiento del Plan Maestro UI/UX v2

Fecha de inicio: 2026-03-16
Versión base: `plan-maestro-ui-ux-v2-2026-03-16.md`
Estado general: ciclo `v2` cerrado

## Estado por fase

- `Fase 1. Reencuadre del recorrido de evaluación`: completada
- `Fase 2. Profundización comercial de páginas de servicio`: completada
- `Fase 3. Consistencia de especialidades y narrativa técnica`: completada
- `Fase 4. Validación integral v2`: completada

## Registro de ejecución

### 2026-03-16 - Inicio de v2

Objetivo operativo:

- abrir una nueva iteración versionada sin perder trazabilidad respecto de `v1`
- detectar qué partes del recorrido siguen hablando como servicio generalista

Hallazgos detectados:

- la home quedó mejor posicionada después de `v1`
- `ProcessFlow` seguía hablando de falla, problema y reparación
- `FAQ` seguía respondiendo desde dudas típicas de urgencia
- las páginas de servicio todavía abrían con un tono demasiado genérico

Acciones implementadas:

- se creó este seguimiento versionado
- se creó un nuevo relevamiento `v2`
- se creó un nuevo plan maestro `v2`
- se actualizó el índice documental de UI/UX para incluir la nueva iteración

Resultado:

- línea base `v2` registrada
- siguiente fase recomendada: `Fase 1. Reencuadre del recorrido de evaluación`

### 2026-03-16 - Cierre de Fase 1

Objetivo operativo:

- alinear proceso, preguntas frecuentes y apertura de servicios con una lógica de relevamiento, alcance y presupuesto

Acciones implementadas:

- se reescribió `ProcessFlow` con foco en relevamiento, visita técnica, presupuesto por etapa y entrega
- se reescribió el bloque `FAQ` para responder dudas reales de obras, refacciones, materiales, coordinación y presupuesto
- se ajustó la sección `FAQ` para que su título y descripción reflejen coordinación previa, no urgencia
- se reescribió la apertura de las páginas de servicio con un tono menos genérico y más comercial
- se cambió `¿Qué incluye nuestro servicio?` por `Alcance tecnico de este servicio`
- se agregó un bloque de `Trabajos frecuentes dentro de este alcance` cuando el servicio lo tiene documentado
- se reencuadró el caso real con etiquetas neutras: `Situacion`, `Intervencion` y `Resultado`
- se reforzó el apoyo al CTA con relevamiento y presupuesto por WhatsApp

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK

Resultado de fase:

- `Fase 1` cerrada
- siguiente fase recomendada: `Fase 2. Profundización comercial de páginas de servicio`

### 2026-03-16 - Cierre de Fase 2

Objetivo operativo:

- convertir las páginas de servicio en piezas comerciales más útiles para presupuestar

Acciones implementadas:

- se amplió el modelo de contenido de servicios con resumen comercial, highlights rápidos y badge operativo por servicio
- se cargaron `commonJobs` para las cuatro páginas de servicio, no solo para el servicio principal
- se reescribieron descripciones de servicio para que describan mejor el tipo de trabajo y no solo una categoría técnica
- se agregó un bloque visible `Este servicio suele pedirse para` en la apertura de cada página
- se sumó una grilla de highlights rápidos por servicio para lectura escaneable
- se dejó el badge secundario del caso real dependiente de cada servicio y no de una regla genérica

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK

Resultado de fase:

- `Fase 2` cerrada
- siguiente fase recomendada: `Fase 3. Consistencia de especialidades y narrativa técnica`

### 2026-03-16 - Cierre de Fase 3

Objetivo operativo:

- terminar de unificar categorias, especialidades y lenguaje tecnico para que el sitio no mezcle el foco principal con mensajes demasiado amplios

Acciones implementadas:

- se reordenaron y reescribieron `serviceCategories` para priorizar obras, tableros, instalaciones y diagnostico con una taxonomia mas precisa
- se eliminó el bloque demasiado difuso `General y Urgencias` y se reemplazó por `Diagnostico y puesta en seguridad`
- se reescribió `technicalScope` para salir del tono de “fallas de alta demanda” y hablar de alcances tecnicos concretos
- se ajustó la sección `TechnicalScope` con un titulo, descripcion y rótulo de card más coherentes con el posicionamiento actual
- se corrigió la grilla de `TechnicalScope` para acompañar mejor los cuatro bloques de alcance
- se alineó el nombre del `OfferCatalog` del schema con el foco comercial actual

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK

Resultado de fase:

- `Fase 3` cerrada
- siguiente fase recomendada: `Fase 4. Validación integral v2`

### 2026-03-16 - Cierre de Fase 4

Objetivo operativo:

- cerrar la iteración `v2` con evidencia técnica y visual suficiente

Acciones implementadas:

- se ejecutó validación completa de `check`, `build`, integridad de `dist` y smoke HTTP en el entorno contenedorizado
- se generó evidencia visual en desktop y mobile para home y página del servicio principal
- se dejó la evidencia en `output/playwright/v2-validation/`
- se intentó usar Playwright CLI según la convención del proyecto, pero el wrapper del host quedó bloqueado por `Volta` sin Node activo
- se cerró la evidencia visual con `Chrome headless`, que en este entorno ya es un fallback operativo válido

Validación:

- `docker compose exec -T web sh -lc 'npm run check && npm run build'`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- artefactos generados:
  - `output/playwright/v2-validation/home-desktop-dark.png`
  - `output/playwright/v2-validation/home-desktop-light.png`
  - `output/playwright/v2-validation/home-mobile-dark.png`
  - `output/playwright/v2-validation/service-obras-desktop-dark.png`
  - `output/playwright/v2-validation/service-obras-mobile-light.png`

Resultado de fase:

- `Fase 4` cerrada
- ciclo `v2` completado

### 2026-03-16 - Ajuste complementario de galeria real

Objetivo operativo:

- corregir la percepcion amateur que generaba una galeria mezclada, repetida y con nombres opacos de archivo

Acciones implementadas:

- se reorganizo `site/src/assets/gallery/` por tipologias reales de trabajo
- se renombraron los assets usados con nombres descriptivos y mantenibles
- se reemplazo la galeria plana por una galeria curada con filtros por tipo de instalacion
- se redujo la repeticion visual del set mostrado en home
- se reajustaron los fondos visibles de home para usar tomas mas limpias y coherentes con el nuevo criterio
- se incorporo una foto real de tablero como referencia principal del servicio de tableros y de la categoria asociada
- se agrego soporte de QA con `?gallery=` para abrir la home ya filtrada por categoria

Validación:

- `docker compose exec -T web npm run check`: OK
- `docker compose exec -T web npm run build`: OK
- `./scripts/check_dist_integrity.sh`: OK
- `./scripts/smoke_http_check.sh http://localhost:4321`: OK
- evidencia visual generada en `output/playwright/gallery-categorias-v1/`

Resultado:

- la galeria ahora comunica mejor el tipo de trabajo
- la seccion se entiende mas rapido en desktop y mobile
- queda mas preparada para sumar fotos nuevas sin perder orden
