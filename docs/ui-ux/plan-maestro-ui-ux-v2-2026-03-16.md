# Plan Maestro UI/UX v2

Fecha: 2026-03-16
Versión: v2
Estado del proyecto: desarrollo interno, pre-QA
Plan anterior de referencia: `plan-maestro-ui-ux-v1-2026-03-16.md`

## Objetivo maestro

Profundizar el reposicionamiento conseguido en `v1` para que todo el recorrido comercial de `JM Soluciones` hable como una empresa técnica para obras, ampliaciones y refacciones, no como un servicio eléctrico generalista centrado en fallas.

## Principios de ejecución

- Mantener la base visual estable de `v1`.
- No abrir rediseños innecesarios.
- Mejorar lenguaje, estructura y percepción comercial donde todavía hay desajustes.
- Validar todo dentro de `docker compose`.
- Documentar cada avance en archivos versionados y en la hoja de ruta general.

## Fase 1. Reencuadre del recorrido de evaluación

### Objetivo

Hacer que el usuario entienda que el trabajo se coordina con relevamiento, alcance y presupuesto, no desde una lógica improvisada de “falla y arreglo”.

### Trabajo

- reescribir `ProcessFlow`
- reescribir `FAQ`
- ajustar la apertura y los apoyos principales de las páginas de servicio

### Archivos foco

- `site/src/content/landing.ts`
- `site/src/components/sections/ProcessFlow.astro`
- `site/src/components/sections/Faq.astro`
- `site/src/pages/servicios/[slug].astro`

### Resultado esperado

- mayor coherencia entre hero y resto del recorrido
- menor tono reactivo
- más claridad sobre presupuesto, etapas y ejecución

## Fase 2. Profundización comercial de páginas de servicio

### Objetivo

Convertir las páginas de servicio en piezas comerciales más sólidas, no solo en descripciones técnicas ordenadas.

### Trabajo

- reforzar alcance visible por servicio
- mostrar mejor trabajos frecuentes o escenarios típicos
- revisar títulos, apoyos y casos reales por servicio

### Archivos foco

- `site/src/content/landing.ts`
- `site/src/pages/servicios/[slug].astro`

### Resultado esperado

- páginas más útiles para presupuestar
- mejor continuidad con el servicio principal
- más percepción de trabajo real y no de ficha genérica

## Fase 3. Consistencia de especialidades y narrativa técnica

### Objetivo

Terminar de unificar categorías, especialidades y lenguaje técnico para que el sitio no mezcle enfoque principal con mensajes demasiado amplios.

### Trabajo

- revisar `serviceCategories`
- revisar `technicalScope`
- depurar lenguaje que todavía suene a “servicio general”

### Archivos foco

- `site/src/content/landing.ts`
- `site/src/components/sections/TechnicalScope.astro`

### Resultado esperado

- mensaje más enfocado
- mejor filtro de lead
- menos ambigüedad comercial

## Fase 4. Validación integral v2

### Objetivo

Cerrar `v2` con evidencia técnica y visual suficiente.

### Trabajo

- `docker compose exec -T web npm run check`
- `docker compose exec -T web npm run build`
- `./scripts/check_dist_integrity.sh`
- `./scripts/smoke_http_check.sh http://localhost:4321`
- revisión visual puntual del recorrido ajustado

### Resultado esperado

- iteración estable
- trazabilidad documental completa

## Orden recomendado de ejecución

1. Fase 1
2. Fase 2
3. Fase 3
4. Fase 4

## Qué no se hace en esta versión

- no rediseño total
- no cambios cosméticos sin impacto comercial
- no analytics nuevos
- no backend de leads
- no despliegue productivo

## Criterio de avance

Una fase se considera cerrada cuando cumple:
- coherencia comercial mejorada
- cambio visible y defendible en la UI o el copy
- validación técnica en contenedor
- documentación actualizada
