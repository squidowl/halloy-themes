# Build the theme package (Rust -> WebAssembly)
FROM rust:1.98-slim-bookworm AS wasm
RUN apt-get update \
  && apt-get install -y --no-install-recommends curl ca-certificates \
  && rm -rf /var/lib/apt/lists/*
RUN rustup target add wasm32-unknown-unknown \
  && cargo install wasm-pack --version 0.13.1 --locked
WORKDIR /src
COPY Cargo.toml Cargo.lock ./
COPY packages/theme/Cargo.toml packages/theme/Cargo.toml
COPY packages/theme/src packages/theme/src
RUN wasm-pack build packages/theme

# Build the SvelteKit app
FROM node:24-bookworm-slim AS app
RUN corepack enable
WORKDIR /src
COPY package.json pnpm-lock.yaml .npmrc ./
COPY --from=wasm /src/packages/theme/pkg packages/theme/pkg
RUN pnpm install --frozen-lockfile --ignore-scripts
COPY . .
RUN pnpm exec svelte-kit sync && pnpm exec vite build

# Runtime image: built app, production dependencies and migrations only
FROM node:24-bookworm-slim
RUN corepack enable
WORKDIR /app
ENV NODE_ENV=production \
    NODE_OPTIONS=--disable-warning=ExperimentalWarning \
    PORT=3000
COPY package.json pnpm-lock.yaml .npmrc ./
COPY --from=wasm /src/packages/theme/pkg packages/theme/pkg
RUN pnpm install --prod --frozen-lockfile --ignore-scripts \
  && pnpm store prune
COPY --from=app /src/build build
COPY migrations migrations
COPY scripts/migrate.js scripts/migrate.js
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000/healthz').then(r => process.exit(r.ok ? 0 : 1)).catch(() => process.exit(1))"
CMD ["node", "build"]
