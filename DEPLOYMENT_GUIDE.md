# 🛠️ DEPLOYMENT TROUBLESHOOTING GUIDE

## 🚀 Quick Deployment (TL;DR)

### Option 1: Automatic Deployment (Recommended)
```bash
# This will auto-detect your setup and deploy
./deploy.sh
```

### Option 2: Manual GitHub Pages Setup
1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: GitHub Actions
   - Save

2. **Deploy:**
   ```bash
   # Commit and push to trigger auto-deployment
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

3. **Check deployment:**
   - Visit: https://github.com/VasanthMuthupandiyan/portfolio/actions
   - Your site: https://vasanthmuthupandiyan.github.io/portfolio/

---

## 🔍 Common Issues & Solutions

### ❌ Issue 1: Blank/White Page on GitHub Pages

**Symptoms:** 
- Local site works fine
- GitHub Pages shows blank page
- Console errors about missing files

**Cause:** Incorrect base URL configuration

**Solution:**
```bash
# Force rebuild with correct base URL
npm run clean
npm run build:github-pages
git add .
git commit -m \"Fix: Rebuild for GitHub Pages with correct base URL\"
git push origin main
```

### ❌ Issue 2: GitHub Pages Not Updating

**Symptoms:**
- Push to main but site doesn't update
- Old content still showing

**Solutions:**

**A. Check GitHub Actions:**
```bash
# Check if Actions are running
echo \"Visit: https://github.com/VasanthMuthupandiyan/portfolio/actions\"
```

**B. Force rebuild:**
```bash
# Clean build and redeploy
npm run clean
./deploy.sh
```

**C. Check GitHub Pages settings:**
1. Go to repository Settings → Pages
2. Ensure source is set to \"GitHub Actions\"
3. Save settings

### ❌ Issue 3: 404 Errors on Sub-pages

**Symptoms:**
- Home page loads but other routes show 404
- Direct URL access fails

**Solution:**
This is a SPA routing issue. Add to your `.github/workflows/deploy.yml`:
```yaml
      - name: Add 404 redirect for SPA
        run: |
          cp dist/index.html dist/404.html
```

### ❌ Issue 4: Images Not Loading

**Symptoms:**
- Broken image icons
- Console errors about image paths

**Solution:**
```bash
# Check image paths in build
npm run build
ls -la dist/assets/
ls -la dist/images/

# If images are missing, check vite.config.ts
```

---

## 🎯 Deployment Methods

### Method 1: GitHub Actions (Recommended)
- ✅ Automatic on push to main
- ✅ Consistent builds
- ✅ No local dependencies

**Setup:**
```bash
# Already configured! Just push:
git push origin main
```

### Method 2: Manual Deployment Script
```bash
# For GitHub Pages
./deploy.sh github-pages

# For custom domain
./deploy.sh custom-domain

# For local development
./deploy.sh local
```

### Method 3: npm Scripts
```bash
# Build for GitHub Pages
npm run build:github-pages

# Build for custom domain  
npm run build:custom-domain

# Deploy (auto-detect)
npm run deploy
```

---

## 🔧 Configuration Guide

### Environment Variables (`.env`)
```bash
# Local development
VITE_BASE_URL=/

# Production override (auto-detected in CI/CD)
VITE_PRODUCTION_BASE_URL=/portfolio/
```

### Custom Domain Setup
1. **Add CNAME file** (already exists):
   ```
   physiotheraphyandrehabilitation.com
   ```

2. **Update DNS** (with your domain provider):
   ```
   Type: CNAME
   Name: @ (or www)
   Value: vasanthmuthupandiyan.github.io
   ```

3. **Build for custom domain:**
   ```bash
   npm run build:custom-domain
   ```

---

## 🚨 Emergency Reset

If everything is broken:

```bash
# 1. Reset to clean state
git checkout main
git pull origin main

# 2. Clean everything
npm run clean
rm -rf node_modules
rm package-lock.json

# 3. Fresh install
npm install

# 4. Test locally
npm run dev

# 5. If local works, deploy
./deploy.sh
```

---

## 📊 Debugging Commands

### Check Current Configuration
```bash
# Check git status
git status
git remote -v

# Check environment
npm run troubleshoot

# Check build output
npm run build
ls -la dist/
cat dist/index.html | grep -E '(href|src)='
```

### Live Debugging
```bash
# Local development server
npm run dev

# Preview production build locally
npm run build && npm run preview
```

---

## 📞 Support

### Self-Diagnosis Checklist
- [ ] GitHub Actions enabled in repository settings
- [ ] Latest commit pushed to main branch
- [ ] No build errors in Actions tab
- [ ] Correct base URL in built files
- [ ] CNAME file exists for custom domain

### Quick Tests
```bash
# Test 1: Can you build locally?
npm run build

# Test 2: Does preview work?
npm run preview

# Test 3: Are GitHub Actions running?
# Check: https://github.com/VasanthMuthupandiyan/portfolio/actions

# Test 4: Is your domain pointing correctly?
# Check: https://dnschecker.org/#CNAME/physiotheraphyandrehabilitation.com
```

---

## 🎉 Success Indicators

### ✅ Successful Deployment
- GitHub Actions show green checkmarks
- Build artifacts uploaded successfully
- Site accessible at both:
  - https://vasanthmuthupandiyan.github.io/portfolio/
  - https://physiotheraphyandrehabilitation.com

### ✅ Correct Build Output
```bash
dist/
├── index.html           # Entry point
├── assets/             # CSS, JS, and other assets
│   ├── index-[hash].css
│   ├── index-[hash].js
│   └── vendor-[hash].js
└── images/             # Static images
```

### ✅ Working Features
- [ ] Home page loads
- [ ] All images display
- [ ] Contact form works
- [ ] Responsive design
- [ ] Fast loading times

---

**🏥 Your PHYSIO REHAB CLINIC website should now be fully functional!**