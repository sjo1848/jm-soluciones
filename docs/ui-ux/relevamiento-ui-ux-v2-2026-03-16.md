# Relevamiento UI/UX v2

Fecha: 2026-03-16
Versión: v2
Estado del proyecto: desarrollo interno, pre-QA
Versión anterior de referencia: `relevamiento-ui-ux-v1-2026-03-16.md`

## Alcance

Relevamiento post-`v1` para detectar los huecos reales que quedaron después del reposicionamiento inicial del sitio.

Esta versión audita especialmente:
- continuidad del mensaje comercial
- consistencia entre home y páginas de servicio
- claridad del recorrido desde consulta hasta presupuesto
- capacidad del sitio para vender obras y refacciones sin volver a un tono generalista

## Base metodológica

Documento rector:
- `docs/operacion/prompt-product-design-ui-ux-cro-jm-soluciones.md`

Versiones anteriores:
- `docs/ui-ux/relevamiento-ui-ux-v1-2026-03-16.md`
- `docs/ui-ux/plan-maestro-ui-ux-v1-2026-03-16.md`
- `docs/ui-ux/seguimiento-plan-maestro-v1-2026-03-16.md`

Validación técnica de base considerada:
- `docker compose exec -T web npm run check`
- `docker compose exec -T web npm run build`
- `./scripts/check_dist_integrity.sh`
- `./scripts/smoke_http_check.sh http://localhost:4321`

## Resumen ejecutivo

La `v1` resolvió el problema más grande del proyecto:
la home ya no comunica una empresa eléctrica genérica, sino una propuesta mucho más alineada con obras y refacciones.

El problema dominante en `v2` ya no está en el bloque principal de la home.
Ahora el desajuste aparece en las capas medias del recorrido:
- proceso
- preguntas frecuentes
- páginas de servicio

Hoy el usuario entra a una home mejor posicionada, pero después sigue encontrando partes del sitio que todavía hablan como si el foco principal fueran fallas, urgencias o asistencia técnica general.

## Qué quedó bien resuelto desde v1

- Hero con mejor foco comercial.
- CTA principal por WhatsApp ya alineado con presupuesto y coordinación.
- Cierre comercial mucho más coherente.
- Señales de confianza y diferenciales más específicas.
- Métricas MVP y validación técnica ya integradas.
- Base visual, responsive y de temas estable.

## Qué sigue flojo

- `ProcessFlow` todavía describe una lógica de falla y reparación.
- `FAQ` sigue contestando desde una mentalidad de urgencia o prediagnóstico.
- Las páginas de servicio todavía se leen más como ficha técnica genérica que como landing comercial de alcance concreto.
- Parte del lenguaje visible sigue girando alrededor de “problema”, “falla” y “reparación” incluso cuando el servicio apunta a obra, ampliación o refacción.

## Problemas detectados

### Prioridad alta

#### 1. El proceso todavía representa una secuencia de diagnóstico de falla

Situación:
- El bloque `ProcessFlow` habla de “detalle de la falla”, “origen del problema” y “reparación”.
- Ese lenguaje contradice el reposicionamiento hacia obra, ampliación y trabajo planificado.

Impacto:
- baja coherencia entre hero y desarrollo de la home
- menor percepción de empresa ordenada para trabajos grandes
- refuerza un perfil más reactivo que planificado

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/components/sections/ProcessFlow.astro`

#### 2. El FAQ no acompaña el nuevo foco comercial

Situación:
- Las preguntas actuales priorizan urgencias y fallas.
- Faltan respuestas sobre alcance, etapas, materiales, coordinación y trabajo con obra en curso.

Impacto:
- no responde las dudas reales del lead que evalúa una obra o refacción
- desperdicia una zona fuerte para bajar fricción antes del contacto

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Faq.astro`

#### 3. Las páginas de servicio todavía se abren con un tono demasiado genérico

Situación:
- El encabezado usa rótulos como `Servicio técnico especializado`.
- El cuerpo principal prioriza una estructura correcta, pero todavía poco comercial.

Impacto:
- menor continuidad entre home y páginas internas
- menor capacidad de cerrar presupuestos desde páginas de servicio

Archivos relacionados:
- `site/src/pages/servicios/[slug].astro`

### Prioridad media

#### 4. La terminología técnica todavía no está del todo normalizada

Situación:
- Conviven lenguaje de obra/refacción con lenguaje de urgencia.
- El sitio todavía puede sonar a empresa “que hace de todo” más que a empresa que coordina trabajos eléctricos con criterio.

Impacto:
- menor percepción de foco
- menos filtro de consultas

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/pages/servicios/[slug].astro`

## Conclusión de esta versión

La `v2` no necesita un rediseño visual grande.
Necesita extender el reposicionamiento comercial que ya se logró en la home hacia el resto del recorrido.

El criterio para esta iteración queda definido así:
- menos relato de falla y reparación
- más relato de relevamiento, alcance, etapas y ejecución
- más continuidad entre home, FAQ y páginas de servicio

Este documento queda como línea base de la `v2`.
