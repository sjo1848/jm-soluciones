#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${1:-http://localhost:4321}"
TMP_HTML="$(mktemp)"
REQUIRE_SITEMAP="${REQUIRE_SITEMAP:-0}"

cleanup() {
  rm -f "$TMP_HTML"
}
trap cleanup EXIT

fail=0

count_matches() {
  local pattern="$1"
  local count
  count="$(grep -oE "$pattern" "$TMP_HTML" | wc -l | tr -d ' ' || true)"
  echo "${count:-0}"
}

assert_count_eq() {
  local label="$1"
  local value="$2"
  local expected="$3"
  if [[ "$value" -eq "$expected" ]]; then
    echo "OK   $label = $value"
  else
    echo "FAIL $label = $value (expected $expected)"
    fail=1
  fi
}

assert_count_ge() {
  local label="$1"
  local value="$2"
  local expected="$3"
  if [[ "$value" -ge "$expected" ]]; then
    echo "OK   $label = $value (>= $expected)"
  else
    echo "FAIL $label = $value (< $expected)"
    fail=1
  fi
}

assert_contains() {
  local label="$1"
  local pattern="$2"
  if grep -q "$pattern" "$TMP_HTML"; then
    echo "OK   $label"
  else
    echo "FAIL $label"
    fail=1
  fi
}

echo "Base URL: $BASE_URL"

status_root="$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/")"
status_robots="$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/robots.txt")"
status_sitemap="$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/sitemap-index.xml")"

assert_count_eq "status_root" "$status_root" 200
assert_count_eq "status_robots" "$status_robots" 200

if [[ "$REQUIRE_SITEMAP" -eq 1 ]]; then
  assert_count_eq "status_sitemap" "$status_sitemap" 200
else
  if [[ "$status_sitemap" -eq 200 || "$status_sitemap" -eq 404 ]]; then
    echo "OK   status_sitemap = $status_sitemap (modo dev)"
  else
    echo "FAIL status_sitemap = $status_sitemap (esperado 200 o 404 en modo dev)"
    fail=1
  fi
fi

curl -fsSL --max-time 15 "$BASE_URL/" > "$TMP_HTML"

h1_count="$(count_matches '<h1[^>]*>')"
wa_count="$(count_matches 'https://wa.me/[^"]*')"

assert_count_eq "h1_count" "$h1_count" 1
assert_count_ge "wa_link_count" "$wa_count" 5

for section in servicios proceso especialidades diferenciales cobertura faq testimonios; do
  assert_contains "section_$section" "id=\"$section\""
done

assert_contains "meta_description" "<meta name=\"description\""
assert_contains "schema_localbusiness" "\"@type\":\"LocalBusiness\""

echo
if [[ "$fail" -eq 0 ]]; then
  echo "Smoke HTTP check: OK"
else
  echo "Smoke HTTP check: FAIL"
fi

exit "$fail"
