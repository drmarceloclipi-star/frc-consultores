# ============================================
# Stage 1: Build the Rust binary
# ============================================
ARG RUST_VERSION=1.94
FROM rust:${RUST_VERSION}-slim AS builder

WORKDIR /app

# Cache dependencies: copy manifests and build a stub first.
COPY Cargo.toml Cargo.lock ./
RUN mkdir src && echo "fn main() {}" > src/main.rs \
    && cargo build --release \
    && rm -rf src

# Build the real binary. static/styles.css is committed and embedded at compile time.
COPY . .
RUN touch src/main.rs && cargo build --release

# ============================================
# Stage 2: Minimal runtime image
# ============================================
FROM debian:bookworm-slim AS runner

WORKDIR /app

RUN useradd --create-home --uid 10001 appuser
USER appuser

COPY --from=builder /app/target/release/frc-consultores /usr/local/bin/frc-consultores

ENV PORT=3000
EXPOSE 3000

CMD ["frc-consultores"]
