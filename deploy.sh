#!/usr/bin/env bash
set -euo pipefail

# 🚀 Intelligent Deployment Script for PHYSIO REHAB CLINIC
# Supports multiple deployment targets with soft-coded configuration

cd "$(dirname "$0")"

echo "🏥 PHYSIO REHAB CLINIC - Deployment Script"
echo "=========================================="

# Function to detect deployment target
detect_deployment_target() {
  if [[ "${1:-}" == "pages" ]] || [[ "${1:-}" == "github-pages" ]]; then
    echo "github-pages"
  elif [[ "${1:-}" == "root" ]] || [[ "${1:-}" == "custom-domain" ]]; then
    echo "root"
  elif [[ "${1:-}" == "local" ]] || [[ "${1:-}" == "dev" ]]; then
    echo "local"
  else
    # Auto-detect based on repository
    if [[ -f "CNAME" ]]; then
      echo "root"  # Custom domain detected
    else
      echo "github-pages"  # Default to GitHub Pages
    fi
  fi
}

# Function to build for specific target
build_for_target() {
  local target="$1"
  
  echo "🔧 Installing dependencies..."
  if [[ -f package-lock.json ]]; then
    npm ci --prefer-offline --no-audit --no-fund
  else
    npm install
  fi

  case "$target" in
    "github-pages")
      echo "🎯 Building for GitHub Pages (/portfolio/)"
      export VITE_BASE_URL="/portfolio/"
      export NODE_ENV="production"
      ;;
    "root")
      echo "🌐 Building for custom domain or root deployment (/)"
      export VITE_BASE_URL="/"
      export NODE_ENV="production"
      ;;
    "local")
      echo "🏠 Starting local development server"
      npm run dev
      return 0
      ;;
  esac

  echo "🏗️  Building application..."
  npm run build

  echo "✅ Build completed successfully!"
  echo "📁 Build output in: ./dist/"
  ls -la dist/
}

# Function to deploy to GitHub
deploy_to_github() {
  local target="$1"
  
  echo "📤 Deploying to GitHub..."
  
  # Commit any pending changes first
  if ! git diff --quiet || ! git diff --cached --quiet; then
    echo "💾 Committing local changes..."
    git add .
    git commit -m "Deploy: Update source files before deployment"
  fi

  # Push to main branch
  echo "⬆️  Pushing to main branch..."
  git push origin main
  
  echo "🎉 Deployment initiated!"
  echo "📊 Check GitHub Actions: https://github.com/$(git config --get remote.origin.url | sed 's/.*github.com[:/]//' | sed 's/.git$//')/actions"
  echo "🌐 Your site will be available at: https://$(git config --get remote.origin.url | sed 's/.*github.com[:/]//' | sed 's/.git$//' | tr '/' '.').github.io/$(basename $(git rev-parse --show-toplevel))/"
}

# Main deployment logic
main() {
  local target_arg="${1:-auto}"
  local target=$(detect_deployment_target "$target_arg")
  
  echo "🎯 Deployment target: $target"
  echo ""
  
  case "$target" in
    "local")
      build_for_target "$target"
      ;;
    *)
      build_for_target "$target"
      deploy_to_github "$target"
      ;;
  esac
}

# Help function
show_help() {
  cat << EOF
🏥 PHYSIO REHAB CLINIC - Deployment Script

Usage: $0 [target]

Targets:
  pages, github-pages    Build and deploy for GitHub Pages (/portfolio/)
  root, custom-domain    Build and deploy for custom domain (/)
  local, dev            Start local development server
  auto                  Auto-detect based on CNAME file (default)

Examples:
  $0                    # Auto-detect and deploy
  $0 pages              # Deploy to GitHub Pages
  $0 root               # Deploy for custom domain
  $0 local              # Start local development

Environment Variables:
  VITE_BASE_URL         Override base URL
  NODE_ENV              Set environment (development/production)

EOF
}

# Parse arguments
case "${1:-}" in
  -h|--help|help)
    show_help
    exit 0
    ;;
  *)
    main "${1:-auto}"
    ;;
esac