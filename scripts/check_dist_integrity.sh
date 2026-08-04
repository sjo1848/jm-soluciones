#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DIST_DIR="$ROOT_DIR/site/dist"
INDEX_FILE="$DIST_DIR/index.html"

fail=0

count_matches_in_file() {
  local pattern="$1"
  local file="$2"
  local count
  count="$(grep -oE "$pattern" "$file" | wc -l | tr -d ' ' || true)"
  echo "${count:-0}"
}

assert_file() {
  local file="$1"
  if [[ -f "$file" ]]; then
    echo "OK   file $(realpath --relative-to="$ROOT_DIR" "$file")"
  else
    echo "FAIL file $(realpath --relative-to="$ROOT_DIR" "$file")"
    fail=1
  fi
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
  local min="$3"
  if [[ "$value" -ge "$min" ]]; then
    echo "OK   $label = $value (>= $min)"
  else
    echo "FAIL $label = $value (< $min)"
    fail=1
  fi
}

assert_contains() {
  local label="$1"
  local pattern="$2"
  local file="$3"
  if grep -q "$pattern" "$file"; then
    echo "OK   $label"
  else
    echo "FAIL $label"
    fail=1
  fi
}

assert_file "$INDEX_FILE"
assert_file "$DIST_DIR/robots.txt"
assert_file "$DIST_DIR/sitemap-index.xml"

if [[ -f "$INDEX_FILE" ]]; then
  h1_count="$(count_matches_in_file '<h1[^>]*>' "$INDEX_FILE")"
  h2_count="$(count_matches_in_file '<h2[^>]*>' "$INDEX_FILE")"
  wa_count="$(count_matches_in_file 'https://wa.me/[^"]*' "$INDEX_FILE")"

  assert_count_eq "h1_count" "$h1_count" 1
  assert_count_ge "h2_count" "$h2_count" 5
  assert_count_ge "wa_link_count" "$wa_count" 5

  for section in servicios proceso especialidades diferenciales cobertura faq testimonios; do
    assert_contains "section_$section" "id=\"$section\"" "$INDEX_FILE"
  done

  assert_contains "meta_description" "<meta name=\"description\"" "$INDEX_FILE"
  assert_contains "meta_robots" "<meta name=\"robots\"" "$INDEX_FILE"
  assert_contains "canonical" "<link rel=\"canonical\"" "$INDEX_FILE"
  assert_contains "schema_localbusiness" "\"@type\":\"LocalBusiness\"" "$INDEX_FILE"
  assert_contains "schema_offercatalog" "\"@type\":\"OfferCatalog\"" "$INDEX_FILE"
fi

echo
if [[ "$fail" -eq 0 ]]; then
  echo "Integridad de dist: OK"
else
  echo "Integridad de dist: FAIL"
fi

exit "$fail"
