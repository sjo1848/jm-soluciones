#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
EVIDENCE_DIR="$ROOT_DIR/docs/deploy/evidencia"
STAMP="$(date +%Y%m%d_%H%M%S)"
LOG_FILE="$EVIDENCE_DIR/preflight_${STAMP}.log"
ALLOW_MISSING_GALLERY="${ALLOW_MISSING_GALLERY:-1}"
STAGING_PORT="${STAGING_PORT:-8080}"
STAGING_URL="http://localhost:${STAGING_PORT}"
STAGING_UP=0

mkdir -p "$EVIDENCE_DIR"

cleanup_staging() {
  if [[ "$STAGING_UP" -eq 1 ]]; then
    docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" rm -sf web_staging >/dev/null 2>&1 || true
  fi
}
trap cleanup_staging EXIT

wait_http_200() {
  local url="$1"
  local label="$2"
  local attempts="${3:-30}"
  local wait_seconds="${4:-1}"
  local status
  local i

  for (( i=1; i<=attempts; i++ )); do
    status="$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" || true)"
    if [[ "$status" == "200" ]]; then
      echo "OK   $label listo (HTTP 200) intento $i/$attempts"
      return 0
    fi
    sleep "$wait_seconds"
  done

  echo "FAIL $label no respondio HTTP 200 tras $attempts intentos"
  return 1
}

{
  echo "== PRE-FLIGHT RELEASE =="
  echo "fecha: $(date -Iseconds)"
  echo "root: $ROOT_DIR"
  echo "allow_missing_gallery: $ALLOW_MISSING_GALLERY"
  echo
  echo "== CHECK + BUILD EN CONTENEDOR =="
  docker run --rm -v "$ROOT_DIR/site":/app -w /app node:20-alpine sh -lc "npm run release:preflight"
  echo
  echo "== INTEGRIDAD DE DIST =="
  "$ROOT_DIR/scripts/check_dist_integrity.sh"
  echo
  echo "== ESTADO DE GALERIA =="
  if [[ "$ALLOW_MISSING_GALLERY" == "1" ]]; then
    "$ROOT_DIR/scripts/check_gallery_assets.sh" --allow-missing
  else
    "$ROOT_DIR/scripts/check_gallery_assets.sh"
  fi
  echo
  echo "== STAGING NGINX UP =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
  STAGING_UP=1
  wait_http_200 "${STAGING_URL}/" "staging root"
  echo
  echo "== HTTP HEAD STAGING / =="
  curl -I --max-time 15 "${STAGING_URL}"
  echo
  echo "== HTTP HEAD STAGING /robots.txt =="
  curl -I --max-time 15 "${STAGING_URL}/robots.txt"
  echo
  echo "== HTTP HEAD STAGING /sitemap-index.xml =="
  curl -I --max-time 15 "${STAGING_URL}/sitemap-index.xml"
  echo
  echo "== SMOKE HTTP STAGING =="
  REQUIRE_SITEMAP=1 "$ROOT_DIR/scripts/smoke_http_check.sh" "${STAGING_URL}"
  echo
  echo "== STAGING DOWN =="
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" rm -sf web_staging
  STAGING_UP=0
  echo
  echo "resultado: OK"
} | tee "$LOG_FILE"

echo "Evidencia registrada: $LOG_FILE"
