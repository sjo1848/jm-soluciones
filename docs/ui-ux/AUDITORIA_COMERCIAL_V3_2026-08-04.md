# Auditoría UX/UI comercial v3

Fecha: 2026-08-04

## Objetivo del producto

La landing debe presentar a JM Soluciones Eléctricas como un proveedor profesional, ordenado y confiable, y convertir visitas en consultas calificadas por WhatsApp.

La prioridad no es exhibir todos los elementos disponibles, sino ayudar al visitante a responder rápidamente:

1. ¿Qué servicio ofrece?
2. ¿Trabaja en mi zona y en un proyecto como el mío?
3. ¿Parece una opción seria y confiable?
4. ¿Cómo solicito presupuesto?

## Diagnóstico resumido

### 1. Navegación mobile duplicada

La versión anterior mostraba una fila permanente de enlaces rápidos y, además, un menú lateral. Esto aumentaba la altura del encabezado, ocupaba el primer viewport y duplicaba decisiones.

Decisión: conservar un único menú lateral en mobile y mantener la barra inferior de WhatsApp como acción principal.

### 2. Orden comercial débil

La galería aparecía inmediatamente después del hero. Las fotografías aportan prueba, pero antes el usuario necesita entender servicios, forma de trabajo y señales de confianza.

Decisión: adoptar el siguiente recorrido:

1. Hero y propuesta de valor.
2. Confianza y credenciales.
3. Servicios.
4. Proceso de trabajo.
5. Alcance técnico.
6. Trabajos reales.
7. Diferenciales y testimonios.
8. Cobertura, preguntas y cierre comercial.

### 3. Hero con demasiada competencia visual

El hero anterior combinaba badge de servicio, descriptor, título, ubicación, tres tarjetas de checks, CTA y una tarjeta lateral con información repetida. La información era válida, pero no tenía una prioridad inequívoca.

Decisión:

- un solo mensaje principal;
- CTA primario a WhatsApp;
- CTA secundario a trabajos realizados;
- checks visualmente livianos;
- tarjeta lateral dedicada a explicar cómo iniciar una consulta;
- cobertura y respuesta presentadas como datos breves.

### 4. Percepción visual excesivamente técnica

La tipografía condensada y los efectos eléctricos reforzaban el rubro, pero podían acercar la percepción a una interfaz tecnológica o temática en lugar de un servicio profesional.

Decisión:

- usar una pila tipográfica de sistema más neutral y legible;
- reducir overlays decorativos;
- conservar el carácter técnico mediante fotografías, contraste y detalles de color;
- priorizar espacios, jerarquía y lectura.

### 5. CTA ausente en el encabezado desktop

El encabezado ofrecía navegación y selector de tema, pero no la acción comercial principal.

Decisión: incorporar “Pedir presupuesto” como CTA persistente en desktop y dentro del menú mobile.

### 6. Galería demasiado extensa

La revisión mediante capturas full-page mostró que la galería ocupaba una proporción excesiva del recorrido y desplazaba testimonios, cobertura, FAQ y cierre comercial.

Decisión:

- mostrar una selección general inicial de nueve trabajos;
- limitar cada categoría a seis elementos antes de expandir;
- conservar filtros y lightbox;
- permitir ampliar o contraer la galería voluntariamente.

## Cambios de esta iteración

- navegación mobile simplificada;
- encabezado más compacto;
- CTA comercial en header;
- hero reorganizado y con CTA secundario;
- nueva tarjeta de orientación inicial;
- home reordenada según intención comercial;
- capa visual `professional.css` con tipografía neutral y menos ruido decorativo;
- compatibilidad del header con home y páginas internas;
- galería progresiva con selección inicial;
- capturas visuales responsive como artefacto de CI.

## Validación ejecutada

- Astro check: sin errores ni advertencias.
- Vitest: 13/13 tests.
- Build: 13 páginas estáticas.
- Integridad de `dist`: correcta.
- Validación de galería: correcta.
- Smoke HTTP de staging: correcto.
- Capturas revisadas en 390 px, 768 px y 1440 px.
- Página de servicio revisada en 1440 px.

## Resultado visual

La versión final presenta:

- propuesta de valor legible desde el primer viewport;
- CTA de WhatsApp visible en header y hero;
- recorrido comercial coherente;
- navegación mobile sin duplicación;
- galería acotada que funciona como prueba y no como catálogo dominante;
- consistencia visual entre home y páginas de servicio.

## Métricas recomendadas después del despliegue

- clics de WhatsApp desde hero;
- clics desde header;
- clics desde servicios;
- clics en “Ver trabajos realizados”;
- expansión de la galería;
- consultas que incluyen zona, tipo de trabajo y detalle;
- relación entre visitas y conversaciones iniciadas.

## Pendientes de una siguiente iteración

- curaduría de testimonios con identidad verificable;
- evaluación de eliminar el selector de tema si distrae del objetivo comercial;
- prueba de una variante de hero con fotografía de persona o equipo, si se dispone de material real;
- medición posdeploy de rendimiento y conversión.
