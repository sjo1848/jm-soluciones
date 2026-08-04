#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STAGING_PORT="${STAGING_PORT:-8080}"
BASE_URL="${1:-http://localhost:${STAGING_PORT}}"
OUTPUT_DIR="$ROOT_DIR/output/visual-snapshots"
PLAYWRIGHT_VERSION="${PLAYWRIGHT_VERSION:-1.54.2}"
PLAYWRIGHT_IMAGE="mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble"

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
      echo "OK   staging disponible para capturas (HTTP 200) intento $i/$attempts"
      return 0
    fi
    sleep "$wait_seconds"
  done

  echo "FAIL staging no disponible para capturas tras $attempts intentos"
  return 1
}

rm -rf "$OUTPUT_DIR"
mkdir -p "$OUTPUT_DIR"

docker compose -f "$ROOT_DIR/compose.yaml" -f "$ROOT_DIR/compose.staging.yaml" up -d --build web_staging
wait_http_200 "$BASE_URL/"

docker run --rm \
  --network host \
  -e BASE_URL="$BASE_URL" \
  -e OUTPUT_DIR=/output \
  -v "$ROOT_DIR":/workspace:ro \
  -v "$OUTPUT_DIR":/output \
  "$PLAYWRIGHT_IMAGE" \
  bash -lc "
    mkdir -p /tmp/visual-qa &&
    cd /tmp/visual-qa &&
    npm init -y >/dev/null 2>&1 &&
    npm install --no-audit --no-fund --silent playwright@${PLAYWRIGHT_VERSION} &&
    cp /workspace/scripts/visual_snapshots.mjs /tmp/visual-qa/visual_snapshots.mjs &&
    node /tmp/visual-qa/visual_snapshots.mjs
  "

for snapshot in \
  home-mobile-390.png \
  home-tablet-768.png \
  home-desktop-1440.png \
  service-desktop-1440.png; do
  test -s "$OUTPUT_DIR/$snapshot"
  echo "OK   captura generada: $snapshot"
done
