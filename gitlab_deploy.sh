#!/usr/bin/env bash
set -euo pipefail

# gitlab_deploy.sh
# Build the project and deploy the `dist/` output to the `pages` branch on the current repository.
# NOTE: This script expects you have push access to the remote. In CI, provide credentials (SSH key or
# set a HTTPS remote that embeds a token). For GitLab CI you can use $CI_JOB_TOKEN or a personal access
# token and set GITLAB_TOKEN below or in CI variables.

cd "$(dirname "$0")"

echo "Installing dependencies and building production bundle..."
if [ -f package-lock.json ]; then
  npm ci --prefer-offline --no-audit --no-fund
else
  npm install
fi
npm run build

REPO_URL=$(git config --get remote.origin.url || true)
if [ -z "$REPO_URL" ]; then
  echo "Error: could not determine remote origin URL. Aborting." >&2
  exit 1
fi

TMPDIR=$(mktemp -d)
echo "Cloning repository to temporary directory: $TMPDIR"
git clone "$REPO_URL" "$TMPDIR"
pushd "$TMPDIR" >/dev/null

# Try to checkout pages branch; if it doesn't exist, create orphan branch
if git rev-parse --verify pages >/dev/null 2>&1; then
  git checkout pages
else
  git checkout --orphan pages
fi

echo "Clearing old files..."
git rm -rf . >/dev/null 2>&1 || true
rm -rf ./* ./.??* || true

echo "Copying new site files from project dist/..."
cp -r "../dist/." . || true

# Ensure GitLab Pages won't run Jekyll
touch .nojekyll

git add -A
if git commit -m "Deploy site: $(date -u +"%Y-%m-%d %H:%M:%S UTC")"; then
  echo "Committed deployment files. Pushing to origin/pages..."
  git push origin pages --force
else
  echo "No changes to deploy." 
fi

popd >/dev/null
rm -rf "$TMPDIR"

echo "Deployment to 'pages' branch completed (if push succeeded)."

echo "Notes:"
echo " - This script will use whichever git remote URL is configured for origin. If you're running in CI"
echo "   and need to authenticate via token, set remote to include the token or use SSH keys."
echo " - On GitLab you can serve Pages from the 'pages' branch or configure the Pages settings in your project."
