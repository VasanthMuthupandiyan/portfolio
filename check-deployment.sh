#!/usr/bin/env bash
# Quick verification script to check deployment status

echo "🔍 PHYSIO REHAB CLINIC - Deployment Status Check"
echo "=================================================="
echo ""

# Check Git status
echo "📊 Git Status:"
git status --short
echo ""

# Check last commit
echo "📝 Last Commit:"
git log --oneline -1
echo ""

# Check remote
echo "🌐 Remote Repository:"
git remote -v | grep origin | head -1
echo ""

# Check if workflow file exists
echo "✅ GitHub Actions Workflow:"
if [[ -f ".github/workflows/deploy.yml" ]]; then
  echo "   ✓ Workflow file exists"
else
  echo "   ✗ Workflow file missing!"
fi
echo ""

# Check if build exists
echo "📦 Build Status:"
if [[ -d "dist" ]] && [[ -f "dist/index.html" ]]; then
  echo "   ✓ Build directory exists"
  echo "   Files: $(ls dist/ | wc -l) items"
else
  echo "   ✗ No build found - run: npm run build:github-pages"
fi
echo ""

# Extract repository info
REPO_URL=$(git config --get remote.origin.url)
REPO_NAME=$(basename "$REPO_URL" .git)
REPO_OWNER=$(echo "$REPO_URL" | sed 's/.*github.com[:/]//' | sed 's/.git$//' | cut -d'/' -f1)

echo "🎯 Deployment URLs:"
echo "   GitHub Actions: https://github.com/$REPO_OWNER/$REPO_NAME/actions"
echo "   Settings:       https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
echo "   Live Site:      https://$REPO_OWNER.github.io/$REPO_NAME/"
echo "   Custom Domain:  https://physiotheraphyandrehabilitation.com"
echo ""

echo "📋 Next Steps:"
echo "   1. Visit GitHub Actions URL above to see deployment status"
echo "   2. Go to Settings → Pages and ensure:"
echo "      • Source: GitHub Actions"
echo "      • Custom domain: physiotheraphyandrehabilitation.com (optional)"
echo "   3. Wait 2-3 minutes for first deployment"
echo "   4. Check your live site!"
echo ""
