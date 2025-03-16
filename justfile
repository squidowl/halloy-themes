export COMPOSE_FILE := './docker/docker-compose.yaml'

[private]
default:
    @just --list -u

# Initialize repo, install deps
init: _install-deps

_install-deps:
    @command -v wasm-pack > /dev/null || cargo install wasm-pack
    @command -v cargo-watch > /dev/null || cargo install cargo-watch

# Bring up docker deps
up *SERVICE:
    docker compose up -d {{SERVICE}}

# Bring down docker deps
down *SERVICE:
    docker compose down {{SERVICE}}

# Show logs of docker deps
logs *SERVICE:
    docker compose logs --follow {{SERVICE}}

watch:
    cargo watch -w packages/theme/src/*.rs -s "wasm-pack build packages/theme"

dev: up
     vite dev
