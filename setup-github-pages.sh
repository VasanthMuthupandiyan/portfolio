#!/usr/bin/env bash
# Setup script to ensure GitHub Pages configuration is correct

echo "🔧 GitHub Pages Setup Helper"
echo "=============================="
echo ""

REPO_OWNER="VasanthMuthupandiyan"
REPO_NAME="portfolio"

echo "📋 REQUIRED GITHUB SETTINGS:"
echo ""
echo "1️⃣  Enable GitHub Pages:"
echo "   → Go to: https://github.com/$REPO_OWNER/$REPO_NAME/settings/pages"
echo "   → Source: Select 'GitHub Actions'"
echo "   → Click 'Save'"
echo ""

echo "2️⃣  Optional - Custom Domain:"
echo "   → Custom domain: physiotheraphyandrehabilitation.com"
echo "   → Enforce HTTPS: ✓ (checked)"
echo ""

echo "3️⃣  Verify Workflow Permissions:"
echo "   → Go to: https://github.com/$REPO_OWNER/$REPO_NAME/settings/actions"
echo "   → Workflow permissions: Read and write permissions"
echo "   → Allow GitHub Actions to create and approve pull requests: ✓"
echo ""

echo "4️⃣  Check Actions Tab:"
echo "   → Visit: https://github.com/$REPO_OWNER/$REPO_NAME/actions"
echo "   → You should see 'Deploy to GitHub Pages' workflow running"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✅ VERIFICATION CHECKLIST:"
echo ""

# Check if we have uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet || [[ -n $(git ls-files --others --exclude-standard) ]]; then
  echo "⚠️  You have uncommitted changes!"
  echo "   Run: git add . && git commit -m 'Update' && git push"
  echo ""
else
  echo "✓ No uncommitted changes"
  echo ""
fi

# Check if workflow exists
if [[ -f ".github/workflows/deploy.yml" ]]; then
  echo "✓ GitHub Actions workflow file exists"
else
  echo "✗ Missing workflow file!"
fi

# Check if we're on main branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" == "main" ]]; then
  echo "✓ On main branch"
else
  echo "⚠️  Not on main branch (current: $CURRENT_BRANCH)"
  echo "   Switch with: git checkout main"
fi

# Check if we're up to date
git fetch origin main &>/dev/null
LOCAL=$(git rev-parse main)
REMOTE=$(git rev-parse origin/main)

if [[ "$LOCAL" == "$REMOTE" ]]; then
  echo "✓ Local and remote are in sync"
else
  echo "⚠️  Local and remote are out of sync"
  echo "   Push: git push origin main"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🎯 EXPECTED OUTCOMES:"
echo ""
echo "After completing the above steps:"
echo "  • GitHub Actions will run automatically"
echo "  • Build takes ~2-3 minutes"
echo "  • Site will be live at:"
echo "    https://$REPO_OWNER.github.io/$REPO_NAME/"
echo ""
echo "If using custom domain (after DNS setup):"
echo "    https://physiotheraphyandrehabilitation.com"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

read -p "Have you completed the GitHub settings above? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo ""
  echo "🚀 Great! Your site should deploy automatically."
  echo ""
  echo "Monitor deployment:"
  echo "  → https://github.com/$REPO_OWNER/$REPO_NAME/actions"
  echo ""
  echo "Check your live site in 2-3 minutes:"
  echo "  → https://$REPO_OWNER.github.io/$REPO_NAME/"
  echo ""
else
  echo ""
  echo "⏸️  Please complete the GitHub settings first, then re-run this script."
  echo ""
fi
