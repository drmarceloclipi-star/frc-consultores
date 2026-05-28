#!/usr/bin/env bash
#
# build-css.sh — Regenerate the committed Tailwind stylesheet.
#
# static/styles.css is a build artifact embedded into the Rust binary at compile
# time (via include_str!). The Rust application has NO runtime Node dependency;
# this script only needs to be re-run when markup or assets/input.css change.
#
# It uses the standalone Tailwind CLI via `npx`, scanning src/**/*.rs for the
# utility classes used in the Maud markup.
#
# Usage:
#   bash scripts/build-css.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

npx --yes @tailwindcss/cli@4 \
  -i assets/input.css \
  -o static/styles.css \
  --minify

echo "Generated static/styles.css"
