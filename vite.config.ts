import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Intelligent base URL configuration for different environments:
// - Development: Uses '/' for clean localhost URLs
// - Production: Configurable for GitHub Pages or custom domain
// - Override via VITE_BASE_URL or VITE_PRODUCTION_BASE_URL environment variable
export default ({ mode }: ConfigEnv) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');

  // Smart base URL detection:
  const getBaseUrl = (): string => {
    // 1. If VITE_BASE_URL is explicitly set, use it
    if (env.VITE_BASE_URL) {
      console.log(`🔧 Using VITE_BASE_URL: ${env.VITE_BASE_URL}`);
      return env.VITE_BASE_URL;
    }

    // 2. Check for production-specific override
    const isProduction = mode === 'production' || process.env.NODE_ENV === 'production';
    if (isProduction && env.VITE_PRODUCTION_BASE_URL) {
      console.log(`🎯 Using VITE_PRODUCTION_BASE_URL: ${env.VITE_PRODUCTION_BASE_URL}`);
      return env.VITE_PRODUCTION_BASE_URL;
    }

    // 3. Check if we're in CI/CD environment (GitHub Actions)
    if (process.env.CI || process.env.GITHUB_ACTIONS) {
      const hasCname = fs.existsSync('CNAME');
      if (hasCname) {
        console.log('🤖 CI detected with CNAME file -> using root base /');
        return '/';
      }
      const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';
      const ciBaseUrl = `/${repoName}/`;
      console.log(`🤖 CI detected, using: ${ciBaseUrl}`);
      return ciBaseUrl;
    }

    // 4. Smart default based on environment
    if (isProduction) {
      // For production builds without CI, check if we have a custom domain (CNAME file exists)
      const hasCustomDomain = fs.existsSync('CNAME') || env.VITE_CUSTOM_DOMAIN === 'true';
      const prodBaseUrl = hasCustomDomain ? '/' : '/portfolio/';
      console.log(`🌐 Production build, using: ${prodBaseUrl} (custom domain: ${hasCustomDomain})`);
      return prodBaseUrl;
    }
    
    // Development default
    const devBaseUrl = '/';
    console.log(`🔧 Development mode, using: ${devBaseUrl}`);
    return devBaseUrl;
  };

  const base = getBaseUrl();
  const appTitle = env.VITE_APP_TITLE || 'PHYSIO REHAB CLINIC';

  console.log(`🌐 Final base URL: ${base}`);

  return defineConfig({
    plugins: [react()],

    // Base URL for assets - crucial for deployment
    base,

    // Development server configuration
    server: {
      port: parseInt(env.VITE_DEV_PORT || '5173'),
      host: env.VITE_DEV_HOST === 'true',
      open: env.VITE_DEV_OPEN === 'true',
    },

    // Build optimizations
    build: {
      outDir: env.VITE_BUILD_DIR || 'dist',
      sourcemap: env.VITE_SOURCE_MAP === 'true' || mode === 'development',
      minify: mode === 'production' ? 'esbuild' : false,
      rollupOptions: {
        output: {
          // Optimize chunk splitting for better caching
          manualChunks: {
            vendor: ['react', 'react-dom'],
            animations: ['framer-motion'],
            icons: ['lucide-react'],
            email: ['@emailjs/browser'],
          },
        },
      },
    },

    // Dependency optimization
    optimizeDeps: {
      exclude: ['lucide-react'],
      include: ['react', 'react-dom', 'framer-motion'],
    },

    // Define global constants available in the app
    define: {
      __APP_TITLE__: JSON.stringify(appTitle),
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '1.0.0'),
      __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },

    // Environment variable prefixes to expose to client
    envPrefix: ['VITE_'],
  });
};
