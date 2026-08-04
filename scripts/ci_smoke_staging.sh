#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STAGING_PORT="${STAGING_PORT:-8080}"
BASE_URL="${1:-http://localhost:${STAGING_PORT}}"

cleanup() {
  docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" down >/dev/null 2>&1 || true
}
trap cleanup EXIT

wait_http_200() {
  local url="$1"
  local attempts="${2:-30}"
  local wait_seconds="${3:-1}"
  local status
  local i

  for (( i=1; i<=attempts; i++ )); do
    status="$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$url" || true)"
    if [[ "$status" == "200" ]]; then
      echo "OK   staging disponible (HTTP 200) intento $i/$attempts"
      return 0
    fi
    sleep "$wait_seconds"
  done

  echo "FAIL staging no disponible tras $attempts intentos"
  return 1
}

docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
wait_http_200 "$BASE_URL/"
REQUIRE_SITEMAP=1 "$ROOT_DIR/scripts/smoke_http_check.sh" "$BASE_URL"
