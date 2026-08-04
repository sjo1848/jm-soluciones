#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
INPUT_CSV="${1:-$ROOT_DIR/docs/operacion/metricas/plantilla_consultas_jm.csv}"
DATE_FROM="${2:-}"
DATE_TO="${3:-}"
OUTPUT_FILE="${4:-}"

if [[ ! -f "$INPUT_CSV" ]]; then
  echo "FAIL CSV no encontrado: $INPUT_CSV" >&2
  exit 1
fi

if [[ -z "$DATE_FROM" || -z "$DATE_TO" ]]; then
  echo "Uso: $0 <csv> <fecha_desde YYYY-MM-DD> <fecha_hasta YYYY-MM-DD> [archivo_salida]" >&2
  exit 1
fi

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

filtered_csv="$tmp_dir/filtered.csv"

awk -F, -v start="$DATE_FROM" -v end="$DATE_TO" '
  NR == 1 { print; next }
  {
    row_date = substr($1, 1, 10)
    if (row_date >= start && row_date <= end) {
      print
    }
  }
' "$INPUT_CSV" > "$filtered_csv"

count_rows() {
  local condition="$1"
  awk -F, -v expr="$condition" '
    NR == 1 { next }
    {
      if (expr == "all") total++
      else if (expr == "alta" && $7 == "alta") total++
      else if (expr == "cerrada" && $8 == "si") total++
    }
    END { print total + 0 }
  ' "$filtered_csv"
}

count_value_in_column() {
  local column="$1"
  local value="$2"
  awk -F, -v target_col="$column" -v target_value="$value" '
    NR == 1 { next }
    $target_col == target_value { total++ }
    END { print total + 0 }
  ' "$filtered_csv"
}

top_values() {
  local column="$1"
  local limit="$2"
  awk -F, -v target_col="$column" '
    NR == 1 { next }
    $target_col != "" { count[$target_col]++ }
    END {
      for (key in count) {
        print count[key] "|" key
      }
    }
  ' "$filtered_csv" | sort -t'|' -k1,1nr -k2,2 | head -n "$limit"
}

render_ranked_block() {
  local title="$1"
  local column="$2"
  local limit="$3"
  local lines
  local output=""
  lines="$(top_values "$column" "$limit")"

  if [[ -z "$lines" ]]; then
    for i in $(seq 1 "$limit"); do
      output+="${i}. Sin datos\n"
    done
    printf "%b" "$output"
    return
  fi

  local index=1
  while IFS='|' read -r count label; do
    [[ -z "$label" ]] && continue
    output+="${index}. ${label} (${count})\n"
    index=$((index + 1))
  done <<< "$lines"

  while [[ "$index" -le "$limit" ]]; do
    output+="${index}. Sin datos\n"
    index=$((index + 1))
  done

  printf "%b" "$output"
}

total_consultas="$(count_rows all)"
consultas_altas="$(count_rows alta)"
consultas_cerradas="$(count_rows cerrada)"

if [[ "$total_consultas" -gt 0 ]]; then
  tasa_cierre="$(awk -v closed="$consultas_cerradas" -v total="$total_consultas" 'BEGIN { printf "%.1f", (closed / total) * 100 }')"
else
  tasa_cierre="0.0"
fi

hero_count="$(count_value_in_column 3 hero)"
services_count="$(count_value_in_column 3 servicios)"
service_detail_count="$(count_value_in_column 3 servicio-detalle)"
final_count="$(count_value_in_column 3 final)"
floating_count="$(count_value_in_column 3 flotante)"
error_404_count="$(count_value_in_column 3 404)"
zona_count="$(count_value_in_column 3 zona)"
sin_dato_count="$(count_value_in_column 3 sin_dato)"
top_services_block="$(render_ranked_block "Servicios mas pedidos" 5 3)"
top_zones_block="$(render_ranked_block "Zonas con mas demanda" 4 3)"

summary_content="$(cat <<EOF
# Resumen semanal de consultas (JM)

Semana: [$DATE_FROM a $DATE_TO]

## Volumen

- Consultas totales: $total_consultas
- Consultas de alta calidad: $consultas_altas
- Consultas cerradas: $consultas_cerradas
- Tasa de cierre (%): $tasa_cierre

## Origen de conversion (CTA)

- Hero: $hero_count
- Servicios: $services_count
- Servicio detalle: $service_detail_count
- Final: $final_count
- Flotante: $floating_count
- 404: $error_404_count
- Zonas locales: $zona_count
- Sin dato: $sin_dato_count

## Servicios mas pedidos

${top_services_block}

## Zonas con mas demanda

${top_zones_block}

## Objeciones repetidas

Completar manualmente leyendo \`observaciones\` y conversaciones reales.

1.
2.

## Ajustes recomendados

Completar manualmente luego de revisar volumen, calidad y objeciones.

1.
2.
3.
EOF
)"

if [[ -n "$OUTPUT_FILE" ]]; then
  printf '%s\n' "$summary_content" > "$OUTPUT_FILE"
  echo "OK   resumen generado en $OUTPUT_FILE"
else
  printf '%s\n' "$summary_content"
fi
