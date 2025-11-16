# 🏥 PHYSIO REHAB CLINIC - Portfolio Website

Professional portfolio website for **Dr. K. Swetha (PT)** - BPT, MPT NEURO

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
# For GitHub Pages
npm run build:github-pages

# For Custom Domain
npm run build:custom-domain
```

### Deploy
```bash
# Automatic deployment (recommended)
./deploy.sh

# Or manually push to trigger GitHub Actions
git push origin main
```

## 📊 Check Deployment Status

```bash
./check-deployment.sh
```

## 🌐 Live URLs

- **GitHub Pages**: https://vasanthmuthupandiyan.github.io/portfolio/
- **Custom Domain**: https://physiotheraphyandrehabilitation.com
- **Actions**: https://github.com/VasanthMuthupandiyan/portfolio/actions

## 🛠️ Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: GitHub Pages (Automated via GitHub Actions)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── config/         # Configuration files
│   ├── assets/         # Images and static assets
│   └── App.tsx         # Main application
├── .github/
│   └── workflows/      # GitHub Actions CI/CD
├── public/             # Public static files
├── dist/               # Build output (auto-generated)
└── deploy.sh           # Smart deployment script
```

## 🔧 Configuration Files

- **`.env`** - Environment variables (local development)
- **`.deploy.config`** - Deployment settings (soft-coded)
- **`vite.config.ts`** - Build configuration with intelligent base URL detection

## 📖 Documentation

- **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - Complete deployment troubleshooting guide
- **[WHITE_SCREEN_FIX_SUMMARY.md](./WHITE_SCREEN_FIX_SUMMARY.md)** - Image loading fixes

## 🎯 Deployment Methods

### Method 1: Automatic (GitHub Actions) ⭐ Recommended
Push to main branch triggers automatic deployment:
```bash
git add .
git commit -m "Your changes"
git push origin main
```

### Method 2: Deployment Script
```bash
./deploy.sh              # Auto-detect
./deploy.sh pages        # GitHub Pages
./deploy.sh root         # Custom domain
./deploy.sh local        # Local dev server
```

### Method 3: npm Scripts
```bash
npm run deploy           # Auto-detect
npm run deploy:pages     # GitHub Pages
npm run deploy:root      # Custom domain
```

## 🔍 Troubleshooting

### Blank Page on GitHub Pages?
1. Check GitHub Actions status
2. Verify base URL in build:
   ```bash
   npm run build:github-pages
   grep -r "src=" dist/index.html
   ```
3. Ensure it shows `/portfolio/` prefix

### Local Development Not Working?
```bash
npm run clean
npm install
npm run dev
```

### Images Not Loading?
Check `src/config/medicalImages.ts` - all images must exist in `src/assets/`

## 📞 Contact

- **Doctor**: Dr. K. Swetha (PT)
- **Qualification**: BPT, MPT NEURO
- **Phone**: 97905 45684
- **WhatsApp**: 9790545684
- **Email**: swethakumar611@gmail.com
- **Location**: All over Chennai

## 📝 License

Private - © 2024 PHYSIO REHAB CLINIC

---

**Built with ❤️ for helping people move better and live pain-free**