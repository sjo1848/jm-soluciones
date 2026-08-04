.PHONY: dev down check staging staging-down smoke preflight

# Inicia el entorno de desarrollo local con recarga en caliente (puerto 4321)
dev:
	docker compose up --build

# Detiene el entorno de desarrollo local
down:
	docker compose down

# Valida el codigo y construye la aplicacion para produccion en un contenedor efimero
check:
	docker run --rm -v "$$PWD/site":/app -w /app node:20-alpine sh -lc "npm run check && npm run build"

# Inicia el entorno de staging local simulando produccion (puerto 8080)
staging:
	docker compose -f compose.yaml -f compose.staging.yaml up --build -d web_staging

# Detiene el entorno de staging local
staging-down:
	docker compose -f compose.yaml -f compose.staging.yaml down

# Ejecuta un check rapido de HTTP contra staging
smoke:
	./scripts/smoke_http_check.sh http://localhost:8080

# Ejecuta el preflight completo antes de un release
preflight:
	./scripts/preflight_release.sh
