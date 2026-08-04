# Relevamiento UI/UX v1

Fecha: 2026-03-16
Versión: v1
Estado del proyecto: desarrollo interno, pre-QA

## Alcance

Relevamiento integral del sitio actual de `JM Soluciones` considerando:
- estructura UX
- claridad comercial
- percepción de confianza
- consistencia visual
- lógica de conversión
- coherencia entre producto, documentación y flujo operativo

## Base metodológica

Documento rector:
- `docs/operacion/prompt-product-design-ui-ux-cro-jm-soluciones.md`

Infraestructura y operación consideradas:
- `compose.yaml`
- `site/Dockerfile`
- `site/package.json`
- `docs/operacion/infraestructura-actual.md`

Validación técnica de base:
- `docker compose exec -T web npm run check`
- `docker compose exec -T web npm run build`

Resultado al momento de este relevamiento:
- `0 errors`
- `0 warnings`
- `0 hints`
- `build OK`

## Resumen ejecutivo

La web ya no está en etapa de base desordenada.
Tiene una arquitectura sólida, una UI consistente y un flujo de contacto simple.

El principal problema actual no es técnico ni puramente visual.
El problema principal es de posicionamiento y coherencia comercial.

Hoy el sitio todavía comunica una empresa eléctrica generalista con componentes de urgencia, cuando el foco de negocio que se quiere priorizar es:
- obras
- refacciones
- trabajos de mayor complejidad
- ticket más alto

## Diagnóstico general

### Lo que ya está bien resuelto

- Arquitectura simple y clara de landing.
- CTA principal por WhatsApp visible y repetido en puntos lógicos.
- Servicios centralizados en contenido.
- Home, páginas de servicio y SEO estructurado funcionando.
- Tema visual consistente entre dark y light.
- Base responsive estable.
- Infraestructura contenedorizada y reproducible.

### Lo que todavía está flojo

- Hero todavía demasiado generalista.
- Cierre comercial todavía sesgado a urgencias/fallas.
- Prueba social correcta, pero no suficientemente fuerte para vender trabajos grandes.
- Parte de la documentación y los scripts siguen reflejando decisiones antiguas.
- La narrativa completa todavía no posiciona a `JM Soluciones` como proveedor fuerte para obras y refacciones.

## Problemas detectados

### Prioridad alta

#### 1. El hero no posiciona con suficiente fuerza el servicio principal actual

Situación:
- La home ya destaca `Electricidad para Obras y Refacciones` en varias partes.
- Pero el hero sigue hablando desde una lógica más amplia que especializada.

Impacto:
- menor claridad en los primeros segundos
- menor percepción de empresa enfocada en trabajos grandes
- menor filtro de leads

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Hero.astro`

#### 2. El CTA final todavía cierra desde una lógica de falla/urgencia

Situación:
- El bloque final sigue preguntando por “resolver una falla eléctrica hoy”.
- Eso contradice el foco comercial actual.

Impacto:
- cierre menos alineado con obras y refacciones
- pérdida de coherencia narrativa

Archivos relacionados:
- `site/src/components/sections/FinalCta.astro`
- `site/src/content/landing.ts`

#### 3. Parte de la capa documental y de scripts quedó desfasada respecto del producto actual

Situación:
- La hoja de ruta todavía registra que la barra mobile tenía llamada.
- Los scripts de smoke e integridad siguen exigiendo links `tel:`.
- El producto actual ya no depende de ese canal como CTA principal.

Impacto:
- fricción operativa
- validaciones que fallan por criterio viejo, no por bug
- pérdida de confianza en la documentación

Archivos relacionados:
- `docs/HOJA_DE_RUTA.md`
- `scripts/check_dist_integrity.sh`
- `scripts/smoke_http_check.sh`

### Prioridad media

#### 4. La prueba social todavía se percibe genérica

Situación:
- Hay testimonios, pero todavía no construyen suficiente peso para trabajos grandes.

Impacto:
- buena prolijidad, pero menor credibilidad comercial

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Testimonials.astro`

#### 5. Los diferenciales todavía pueden ser más específicos

Situación:
- `WhyChooseUs` y parte de `TrustBar` están correctos, pero todavía son relativamente amplios.

Impacto:
- menor diferenciación real
- más sensación de “empresa prolija” que de “empresa técnicamente sólida”

Archivos relacionados:
- `site/src/content/landing.ts`
- `site/src/components/sections/WhyChooseUs.astro`
- `site/src/components/sections/TrustBar.astro`

### Prioridad baja

#### 6. La documentación de métricas existe, pero su implementación real todavía es parcial

Situación:
- Se documenta `origen_cta`.
- La utilidad de WhatsApp acepta `_source`, pero hoy no lo persiste ni lo expone.
- La taxonomía documental tampoco coincide 100% con la web actual.

Impacto:
- baja trazabilidad real de conversión
- sistema útil solo de forma manual

Archivos relacionados:
- `docs/operacion/metricas/README.md`
- `site/src/utils/whatsapp.ts`

## Estado de coherencia del proyecto

### Coherencia alta

- infraestructura de desarrollo
- build y tipado
- estructura de contenido
- diseño base
- uso de Docker Compose

### Coherencia media

- narrativa comercial de home
- alineación entre hero, servicios y cierre
- fuerza de prueba social

### Coherencia baja

- scripts de release frente al criterio actual de contacto
- parte de la trazabilidad documental histórica

## Conclusión de esta versión

La base del proyecto es sólida.
No hace falta rehacer la web.

Lo que sigue ahora es:
- alinear el mensaje principal
- reforzar confianza real
- limpiar documentación y validaciones desfasadas
- consolidar una narrativa de empresa seria para obras y refacciones

Este relevamiento queda como línea base para futuras iteraciones.
