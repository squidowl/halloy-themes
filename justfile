export COMPOSE_FILE := './docker/docker-compose.yaml'

[private]
default:
    @just --list -u

# Initialize repo, install deps
init: _install-deps
    pnpm i

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

migrate:
    npx drizzle-kit migrate

dev: up migrate
    #!/usr/bin/env bash
     
    trap 'kill 0' SIGINT

    cargo watch -w packages/theme/src/*.rs -s "wasm-pack build packages/theme" &
    cargo watch -w src -s "svelte-kit sync" &
    npx svelte-kit sync && npx vite dev
