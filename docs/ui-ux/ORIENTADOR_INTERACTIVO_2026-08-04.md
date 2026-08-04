# Orientador interactivo de servicios

Fecha: 2026-08-04
Issue: #5
Rama: `feat/interactive-service-guide`

## Objetivo

Ayudar al visitante a identificar un servicio inicial y generar una consulta de WhatsApp con necesidad, zona y estado del trabajo ordenados.

## Decisiones de UX

- Flujo limitado a tres pasos.
- Una sola dimension por paso.
- Opcion de volver y reiniciar.
- Consulta directa por WhatsApp disponible como alternativa.
- Sin captura ni almacenamiento de datos personales.
- Recomendacion presentada como orientacion inicial, no como diagnostico tecnico.
- Estados de foco, seleccion y progreso visibles.
- Transiciones desactivadas cuando el usuario solicita movimiento reducido.

## Arquitectura

- Astro y TypeScript sin framework cliente adicional.
- Contenido centralizado en `src/content/service-guide.ts`.
- Logica pura y testeable en `src/utils/service-guide.ts`.
- Componente progresivo en `src/components/sections/ServiceGuide.astro`.
- Origen de conversion `orientador` agregado a WhatsApp.

## QA

- Pruebas de recomendacion, mensaje y atribucion.
- Captura inicial de la home en mobile, tablet y desktop.
- Captura especifica del resultado del orientador en 390 px y 1440 px.
- Validacion mediante Astro check, Vitest, build, integridad, galeria y smoke HTTP.

## Seguridad de despliegue

- La rama genera vista previa, no produccion.
- `main` no se modifica durante la implementacion.
- El merge queda bloqueado hasta revisar CI, artefactos visuales y preview de Cloudflare.
