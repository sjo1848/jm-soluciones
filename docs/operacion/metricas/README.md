# Sistema de Metricas

## Objetivo

Registrar consultas reales para medir impacto de la landing y tomar decisiones comerciales.

Estado actual:

- La web adjunta `Origen web: ...` al mensaje de WhatsApp cuando el CTA sale desde una página o bloque instrumentado.
- El registro en CSV sigue siendo manual, pero ahora la atribucion tiene una referencia visible en la conversación.

## Archivos base

- `plantilla_consultas_jm.csv`: registro diario de consultas.
- `resumen_semanal_template.md`: cierre semanal de lectura comercial.
- `scripts/generate_weekly_metrics.sh`: resumen semanal base a partir del CSV.

## Flujo de uso

1. Registrar cada consulta recibida por WhatsApp.
2. Copiar `origen_cta` desde la línea `Origen web: ...` del mensaje cuando exista.
2. Actualizar estado de cierre (si termino en trabajo o no).
3. Completar resumen semanal.
4. Definir ajustes de copy, CTA y fotos.

## Resumen semanal automatico

Comando:

```bash
./scripts/generate_weekly_metrics.sh docs/operacion/metricas/plantilla_consultas_jm.csv 2026-03-01 2026-03-07
```

Con salida a archivo:

```bash
./scripts/generate_weekly_metrics.sh \
  docs/operacion/metricas/plantilla_consultas_jm.csv \
  2026-03-01 \
  2026-03-07 \
  docs/operacion/metricas/resumen_2026-03-01_2026-03-07.md
```

Notas:

- El script calcula volumen, origen de CTA, top servicios y top zonas.
- `Objeciones repetidas` y `Ajustes recomendados` siguen requiriendo lectura manual.

## Campos obligatorios por consulta

- `fecha_hora`
- `canal`
- `origen_cta`
- `zona`
- `servicio`
- `tipo_cliente`
- `calidad_consulta`
- `cerrada`
- `ticket_promedio_ars`
- `observaciones`

## Reglas de calidad de datos

- No dejar filas vacias intermedias.
- No usar abreviaturas ambiguas en `servicio`.
- Cargar `cerrada` solo con `si` o `no`.
- Si no hay monto, dejar `0`.
- Evitar comas en campos libres como `observaciones`; usar punto y coma si hace falta separar ideas.
- `origen_cta` debe usar valores: `hero`, `servicios`, `servicio-detalle`, `final`, `flotante`, `404`, `zona`, `sin_dato`.
