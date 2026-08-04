#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
GALLERY_DIR="$ROOT_DIR/site/src/assets/gallery"
ALLOW_MISSING=0

if [[ "${1:-}" == "--allow-missing" ]]; then
  ALLOW_MISSING=1
fi

required_categories=(
  "rieles-dicroicas"
  "construccion-tradicional"
  "construccion-seco"
  "tableros"
  "exteriores-y-complementos"
)

content_files=(
  "$ROOT_DIR/site/src/content/landing.ts"
  "$ROOT_DIR/site/src/pages/index.astro"
)

missing=0

echo "Directorio de galeria: $GALLERY_DIR"
echo

echo "== Categorias por tipologia =="
for category in "${required_categories[@]}"; do
  dir="$GALLERY_DIR/$category"
  if [[ ! -d "$dir" ]]; then
    echo "MISS $category/ (carpeta inexistente)"
    missing=1
  elif [[ -z "$(find "$dir" -maxdepth 1 -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \))" ]]; then
    echo "MISS $category/ (carpeta sin imagenes)"
    missing=1
  else
    count="$(find "$dir" -maxdepth 1 -type f \( -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' -o -name '*.webp' \) | wc -l)"
    echo "OK   $category/ ($count imagenes)"
  fi
done

echo
echo "== Imagenes referenciadas en la UI =="
referenced="$(
  grep -ohE '[a-z0-9][a-z0-9-]*\.(jpe?g|png|webp)' "${content_files[@]}" 2>/dev/null \
    | sort -u
)"

if [[ -z "$referenced" ]]; then
  echo "ERROR: no se pudieron extraer referencias de imagenes desde los archivos de contenido."
  echo "Archivos escaneados:"
  for file in "${content_files[@]}"; do
    echo "  - $file"
  done
  exit 1
fi

for filename in $referenced; do
  if [[ -n "$(find "$GALLERY_DIR" -type f -name "$filename")" ]]; then
    echo "OK   $filename"
  else
    echo "MISS $filename"
    missing=1
  fi
done

if [[ "$missing" -eq 1 ]]; then
  echo
  echo "Faltan fotos o carpetas de galeria. El sitio usa fallback automatico a placeholder."
  if [[ "$ALLOW_MISSING" -eq 1 ]]; then
    echo "Modo allow-missing activo: no se bloquea el flujo."
    exit 0
  fi
  exit 1
fi

echo
echo "Galeria completa."
