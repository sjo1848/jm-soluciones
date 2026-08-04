# Plan Maestro UI/UX v1

Fecha: 2026-03-16
Versión: v1
Estado del proyecto: desarrollo interno, pre-QA

## Objetivo maestro

Evolucionar la web de `JM Soluciones` desde una landing sólida y generalista hacia una landing:
- más precisa
- más confiable
- más alineada con obras y refacciones
- más efectiva para captar trabajos de mayor ticket

## Principios de ejecución

- No rehacer por rehacer.
- Mantener la base técnica actual.
- Mejorar donde haya impacto real en percepción y conversión.
- Hacer primero ajustes de coherencia, después refinamiento visual.
- Validar todo dentro de `docker compose`.

## Fase 0. Alineación de fuente de verdad

### Objetivo

Corregir el desajuste entre producto actual, documentación y scripts.

### Trabajo

- actualizar `docs/HOJA_DE_RUTA.md`
- ajustar scripts que todavía exigen `tel:`
- revisar documentación de métricas según estado real del sitio
- consolidar documentación UI/UX versionada

### Resultado esperado

- documentación confiable
- validaciones coherentes con el producto real
- menor fricción operativa

### Prioridad

Crítica

## Fase 1. Reposicionamiento del mensaje principal

### Objetivo

Hacer que el sitio se entienda rápidamente como una empresa profesional para obras y refacciones.

### Trabajo

- ajustar H1, subtítulo y checks del hero
- revisar descriptor de marca
- alinear servicio principal y prueba rápida de confianza
- limpiar mensajes todavía demasiado generalistas

### Archivos foco

- `site/src/content/landing.ts`
- `site/src/components/sections/Hero.astro`

### Resultado esperado

- mayor claridad en 3 a 5 segundos
- mejor percepción de especialización
- mejor filtro de leads

## Fase 2. Reescritura del cierre comercial

### Objetivo

Alinear el CTA final con el negocio que se quiere captar.

### Trabajo

- reescribir título, subtítulo y apoyo contextual del `FinalCta`
- dejar de cerrar desde “falla urgente”
- cerrar desde “presupuesto”, “obra”, “refacción”, “instalación” o “trabajo técnico”

### Archivos foco

- `site/src/components/sections/FinalCta.astro`
- `site/src/content/landing.ts`

### Resultado esperado

- narrativa más coherente
- mayor afinidad con trabajos grandes

## Fase 3. Endurecimiento de confianza

### Objetivo

Subir la percepción de empresa seria sin recargar la UI.

### Trabajo

- mejorar `TrustBar`
- mejorar `WhyChooseUs`
- hacer testimonios más específicos
- reforzar señales de trabajo real

### Archivos foco

- `site/src/components/sections/TrustBar.astro`
- `site/src/components/sections/WhyChooseUs.astro`
- `site/src/components/sections/Testimonials.astro`
- `site/src/content/landing.ts`

### Resultado esperado

- más credibilidad
- menos sensación genérica
- más respaldo para ticket alto

## Fase 4. Optimización CRO sin sobre diseño

### Objetivo

Subir claridad de acción sin ensuciar la experiencia.

### Trabajo

- revisar textos de CTA
- ajustar microcopy
- revisar orden y peso relativo de bloques
- reforzar continuidad entre hero, servicios y CTA final

### Archivos foco

- `site/src/components/sections/Hero.astro`
- `site/src/components/sections/Services.astro`
- `site/src/components/sections/FinalCta.astro`
- `site/src/content/landing.ts`

### Resultado esperado

- menos fricción
- más lectura lineal
- mayor intención de contacto

## Fase 5. Métricas MVP realistas

### Objetivo

Tener trazabilidad útil sin montar infraestructura innecesaria.

### Trabajo

- alinear taxonomía documental de `origen_cta`
- decidir si la atribución seguirá manual o visible en el mensaje de WhatsApp
- preparar un flujo mínimo de lectura semanal

### Archivos foco

- `docs/operacion/metricas/README.md`
- `docs/operacion/metricas/plantilla_consultas_jm.csv`
- `site/src/utils/whatsapp.ts`

### Resultado esperado

- sistema de métricas usable
- sin complejidad excesiva

## Fase 6. Validación integral

### Objetivo

Cerrar cada iteración con evidencia, no con percepción.

### Trabajo

- `docker compose exec -T web npm run check`
- `docker compose exec -T web npm run build`
- revisar scripts de smoke e integridad
- validar responsive, contraste y temas

### Resultado esperado

- cambios estables
- trazabilidad técnica real

## Orden recomendado de ejecución

1. Fase 0
2. Fase 1
3. Fase 2
4. Fase 3
5. Fase 4
6. Fase 5
7. Fase 6

## Qué no se hace en esta versión

- no rediseño total
- no backend de leads
- no analytics complejos
- no dashboarding
- no producción
- no cambios cosméticos sin impacto funcional

## Criterio de avance

Una fase se considera cerrada cuando cumple:
- coherencia con el negocio actual
- mejora perceptible de claridad o confianza
- validación técnica en contenedor
- documentación actualizada

## Próximo paso recomendado

Ejecutar primero la `Fase 0` y la `Fase 1`.

Son las que más orden generan con menor costo:
- limpian la fuente de verdad
- corrigen incoherencias
- mejoran el posicionamiento principal sin abrir un rediseño completo
