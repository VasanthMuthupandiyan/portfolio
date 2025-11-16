#!/usr/bin/env bash
set -euo pipefail

# gitlab_deploy.sh
# Build the project and deploy the `dist/` output to the `pages` branch on the current repository.

cd "$(dirname "$0")"

echo "Installing dependencies and building production bundle..."
if [ -f package-lock.json ]; then
  npm ci --prefer-offline --no-audit --no-fund
else
  npm install
fi

# Set production base URL for GitHub Pages
export VITE_BASE_URL=/portfolio/
echo "🎯 Building with VITE_BASE_URL=/portfolio/ for GitHub Pages"

npm run build

# Check if dist folder exists
if [ ! -d "dist" ]; then
  echo "Error: dist folder not found. Build may have failed." >&2
  exit 1
fi

# Store the absolute path to the project directory
PROJECT_DIR="$(pwd)"
echo "Project directory: $PROJECT_DIR"

# Get repository information from the original project directory
REPO_URL=$(git config --get remote.origin.url || true)
if [ -z "$REPO_URL" ]; then
  echo "Error: could not determine remote origin URL. Aborting." >&2
  exit 1
fi

# Get current user info for commits
GIT_USER_NAME=$(git config user.name || echo "GitHub Pages Deploy")
GIT_USER_EMAIL=$(git config user.email || echo "deploy@github.com")

TMPDIR=$(mktemp -d)
echo "Cloning repository to temporary directory: $TMPDIR"
git clone "$REPO_URL" "$TMPDIR"

# Now work in the temporary directory
cd "$TMPDIR"

# Configure git user in the temporary repo
git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"

# Try to checkout pages branch; if it doesn't exist, create orphan branch
if git rev-parse --verify origin/pages >/dev/null 2>&1; then
  git checkout -b pages origin/pages
else
  git checkout --orphan pages
fi

echo "Clearing old files..."
git rm -rf . >/dev/null 2>&1 || true
find . -maxdepth 1 -name ".*" ! -name ".git" -exec rm -rf {} + 2>/dev/null || true
find . -maxdepth 1 ! -name ".git" ! -name "." -exec rm -rf {} + 2>/dev/null || true

echo "Copying new site files from $PROJECT_DIR/dist/..."
if [ -d "$PROJECT_DIR/dist" ]; then
  cp -r "$PROJECT_DIR"/dist/* . 2>/dev/null || {
    echo "Error: Failed to copy files from $PROJECT_DIR/dist/" >&2
    cd "$PROJECT_DIR"
    rm -rf "$TMPDIR"
    exit 1
  }
  
  # Copy any hidden files from dist if they exist
  if ls "$PROJECT_DIR"/dist/.* >/dev/null 2>&1; then
    cp -r "$PROJECT_DIR"/dist/.* . 2>/dev/null || true
  fi
else
  echo "Error: $PROJECT_DIR/dist directory not found" >&2
  cd "$PROJECT_DIR"
  rm -rf "$TMPDIR"
  exit 1
fi

# Ensure GitHub Pages won't run Jekyll
touch .nojekyll

# Create a simple README for the pages branch
cat > README.md << EOF
# GitHub Pages Deployment

This branch contains the built assets for GitHub Pages deployment.

**Live Site**: https://vasanthmuthupandiyan.github.io/portfolio/

**Source**: This is automatically deployed from the main branch.

## Deployment Info
- Built: $(date -u +"%Y-%m-%d %H:%M:%S UTC")
- Base URL: /portfolio/
- Build Tool: Vite

Do not edit files in this branch directly. All changes should be made in the main branch.
EOF

echo "Files copied successfully:"
ls -la

# Add all files to git
git add -A

# Check if there are changes to commit
if git diff --staged --quiet; then
  echo "No changes to deploy."
else
  echo "Committing deployment files..."
  git commit -m "🚀 Deploy site: $(date -u +"%Y-%m-%d %H:%M:%S UTC")

- Built with Vite
- Base URL: /portfolio/
- Source: main branch"

  echo "Pushing to origin/pages..."
  if git push origin pages --force; then
    echo ""
    echo "✅ Deployment to 'pages' branch completed successfully!"
    echo "🌐 Your site should be available at: https://vasanthmuthupandiyan.github.io/portfolio/"
    echo ""
    echo "📝 GitHub Pages Configuration:"
    echo " - Repository: $(basename "$REPO_URL" .git)"
    echo " - Branch: pages"
    echo " - Path: / (root)"
    echo ""
    echo "🔗 Quick Links:"
    echo " - Repository: $REPO_URL"
    echo " - Settings: ${REPO_URL%.git}/settings/pages"
    echo " - Actions: ${REPO_URL%.git}/actions"
  else
    echo "❌ Failed to push to GitHub. Check your permissions and try again."
    cd "$PROJECT_DIR"
    rm -rf "$TMPDIR"
    exit 1
  fi
fi

# Return to original directory and cleanup
cd "$PROJECT_DIR"
rm -rf "$TMPDIR"

echo ""
echo "🎉 Deployment Summary:"
echo " - Built with VITE_BASE_URL=/portfolio/ for GitHub Pages"
echo " - Deployed to 'pages' branch with git history"
echo " - Added .nojekyll to prevent Jekyll processing"
echo " - Created README.md with deployment info"
echo ""
echo "⏰ The site should be live in 2-3 minutes at:"
echo "   https://vasanthmuthupandiyan.github.io/portfolio/"
