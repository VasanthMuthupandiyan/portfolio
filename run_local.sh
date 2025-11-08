#!/usr/bin/env bash
set -euo pipefail

# run_local.sh
# Simple helper to install dependencies (using npm ci when available) and start the Vite dev server.
# Usage: ./run_local.sh

cd "$(dirname "$0")"

echo "Checking for package-lock.json..."
if [ -f package-lock.json ]; then
  echo "Installing dependencies with npm ci (faster, reproducible)..."
  npm ci --prefer-offline --no-audit --no-fund
else
  echo "No package-lock.json found — running npm install"
  npm install
fi

echo "Starting dev server (npm run dev)..."
exec npm run dev
