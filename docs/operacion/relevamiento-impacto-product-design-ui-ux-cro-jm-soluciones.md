# Relevamiento De Impacto

Fecha: 2026-03-16

Referencia base:
- `docs/operacion/prompt-product-design-ui-ux-cro-jm-soluciones.md`

Alcance:
- Home principal
- Sistema de CTA
- Jerarquía de contenido
- Prueba de confianza
- Coherencia con foco comercial actual: `Electricidad para Obras y Refacciones`

Limitación:
- La validación visual automatizada con Playwright no pudo ejecutarse desde el host por una configuración incompleta de Node/Volta. El relevamiento se hizo sobre estructura real, contenido y componentes del proyecto.

## A. Diagnóstico

Estado actual:
- La web ya está claramente por encima de una landing amateur.
- Tiene una estructura ordenada, CTA visible, consistencia visual y un camino de contacto simple.
- El mayor problema ya no es de UI base, sino de posicionamiento y coherencia comercial.

Diagnóstico general:
- La web transmite profesionalismo moderado-alto.
- La conversión por WhatsApp está bien resuelta.
- La comunicación principal todavía no refleja del todo el negocio que hoy se quiere priorizar: obras y refacciones.

Lectura ejecutiva:
- Base visual: buena.
- Base UX: buena.
- Claridad estratégica: incompleta.
- Prueba de confianza: correcta pero todavía genérica.
- Riesgo principal: que el usuario entienda "electricista general" antes que "proveedor serio para trabajos grandes".

## B. Problemas Detectados

### Criticidad alta

1. El hero sigue siendo demasiado genérico para el objetivo comercial actual.
- Hoy el usuario ve una empresa eléctrica amplia, pero no una especialista fuerte en obras y refacciones.
- Eso debilita la percepción de ticket alto y baja diferenciación.

Impacto:
- Menor claridad en los primeros 5 segundos.
- Menor calificación de leads para trabajos grandes.

Archivos impactados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Hero.astro`

2. El cierre comercial sigue hablando como si el negocio principal fueran fallas urgentes.
- El bloque final usa la lógica de "resolver una falla hoy", que empuja urgencia y no planificación, obra o ejecución técnica.
- Eso contradice la estrategia actual.

Impacto:
- Mensaje final inconsistente.
- Reduce alineación con clientes de obra, ampliación y refacción.

Archivos impactados:
- `site/src/components/sections/FinalCta.astro`
- `site/src/content/landing.ts`

### Criticidad media

3. La prueba social es funcional, pero todavía débil para vender una empresa seria.
- Los testimonios son correctos, pero se perciben genéricos.
- Faltan más señales concretas de trabajos reales, tipo de cliente, alcance o resultado.

Impacto:
- La web se ve prolija, pero no termina de cerrar como empresa muy confiable para trabajos grandes.

Archivos impactados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Testimonials.astro`

4. Hay buena estructura, pero todavía no una narrativa comercial enfocada.
- Existen servicios, diferenciales, credenciales y proceso, pero el relato global todavía no está completamente centrado en:
  - obras
  - refacciones
  - tableros
  - distribución de cargas
  - trabajos de mayor complejidad

Impacto:
- La web puede atraer demanda generalista en lugar de priorizar el tipo de cliente que conviene.

Archivos impactados:
- `site/src/content/landing.ts`
- `site/src/components/sections/Services.astro`
- `site/src/components/sections/WhyChooseUs.astro`

### Criticidad baja

5. El contacto está bien resuelto para la estrategia actual, pero diverge del prompt base.
- El prompt propone WhatsApp + llamada + formulario opcional.
- El proyecto actual decidió centralizar casi todo en WhatsApp.
- Eso no es un error si es una decisión de negocio, pero hay que asumirlo como estrategia y no como omisión.

Impacto:
- Mejora foco de conversión.
- Reduce alternativas de contacto.

Archivos impactados:
- `site/src/components/sections/Hero.astro`
- `site/src/components/sections/MobileActionBar.astro`
- `site/src/components/sections/Footer.astro`

## C. Estrategia De Mejora

La mejora no requiere rehacer la web. Requiere afinarla.

### Eje 1. Reposicionar el mensaje principal
- Pasar de "servicio técnico eléctrico general" a "empresa eléctrica profesional para obras, refacciones y trabajos de mayor complejidad".
- El hero debe vender especialización y solidez, no solo disponibilidad.

### Eje 2. Endurecer la confianza
- Menos claims genéricos.
- Más evidencia concreta:
  - tipo de trabajos
  - años
  - cobertura
  - trabajos reales
  - testimonios más específicos

### Eje 3. Ordenar la narrativa comercial
- Hero: posicionamiento
- Servicios: oferta clara
- Credenciales: respaldo
- Diferenciales: por qué elegirlos
- Testimonios / trabajos reales: prueba
- CTA final: cierre coherente con el servicio principal

## D. Estructura Propuesta

La arquitectura general puede mantenerse, con ajustes de enfoque.

### Estructura recomendada
1. Hero
- foco en obras y refacciones
- cobertura
- WhatsApp inmediato
- prueba rápida de confianza

2. Servicios
- servicio principal destacado
- secundarios ordenados
- lenguaje más orientado a resultado

3. Credenciales
- años
- cobertura
- canal principal
- condiciones claras

4. Proceso
- simple
- técnico
- profesional

5. Especialidades
- tableros
- trifásica
- cableado
- potencia
- distribución

6. Diferenciales
- rapidez
- criterio técnico
- cumplimiento
- orden de trabajo
- claridad comercial

7. Testimonios / trabajos reales
- reforzar con evidencia más específica

8. FAQ
- objeciones reales

9. CTA final
- orientado a presupuesto de obra o refacción

## E. Implementación

Impacto técnico estimado: medio.

No hace falta rehacer sistema visual ni layout base. El mayor impacto está en contenido, jerarquía y copy.

### Archivos más afectados
- `site/src/content/landing.ts`
  - reposicionamiento de H1, subtítulos, checks, CTA final, testimonios y diferenciales
- `site/src/components/sections/Hero.astro`
  - ajuste de mensaje y estructura de evidencia principal
- `site/src/components/sections/Services.astro`
  - copy más orientado a beneficio y ticket alto
- `site/src/components/sections/WhyChooseUs.astro`
  - diferenciales menos genéricos
- `site/src/components/sections/Testimonials.astro`
  - mejor calidad de prueba social
- `site/src/components/sections/FinalCta.astro`
  - cierre alineado con obras y refacciones

### Impacto por área
- UI: bajo
- UX: medio
- Copy: alto
- CRO: alto
- SEO: medio

## F. Validación

Esta línea de trabajo mejoraría la web porque:

### Es más clara
- comunica mejor qué hace JM Soluciones
- deja más claro a quién le habla
- reduce ambigüedad de servicio generalista

### Se ve más profesional
- una empresa seria no solo se ve ordenada: también suena específica
- el problema actual no es visual fuerte, sino de foco estratégico

### Genera más confianza
- una propuesta concreta transmite más solvencia que una propuesta amplia
- más evidencia específica reduce sensación de plantilla genérica

### Convierte mejor
- alinear hero, servicios y CTA final con obras y refacciones mejora la calidad del lead
- menos dispersión de mensaje implica más intención comercial clara

## Conclusión Ejecutiva

El prompt encaja bien con el proyecto y no obliga a empezar de cero.

Impacto real sobre este sitio:
- alto en estrategia de contenido
- medio en UX/CRO
- bajo en sistema visual

La web actual ya tiene una base sólida.
Lo que falta no es "hacerla más linda".
Lo que falta es hacerla más precisa, más creíble para trabajos grandes y más coherente con el negocio que se quiere captar.
