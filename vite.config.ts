import { defineConfig, loadEnv, ConfigEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Intelligent base URL configuration for different environments:
// - Development: Uses '/' for clean localhost URLs
// - Production: Uses '/portfolio/' for GitHub Pages deployment
// - Override via VITE_BASE_URL environment variable
export default ({ mode }: ConfigEnv) => {
  // Load environment variables for the current mode
  const env = loadEnv(mode, process.cwd(), '');
  
  // Smart base URL detection:
  // 1. If VITE_BASE_URL is explicitly set, use it
  // 2. If in development mode, use '/' for clean localhost URLs  
  // 3. If in production mode, use '/portfolio/' for GitHub Pages
  const getBaseUrl = (): string => {
    if (env.VITE_BASE_URL) {
      console.log(`🔧 Using custom base URL: ${env.VITE_BASE_URL}`);
      return env.VITE_BASE_URL;
    }
    
    // Check if we're building for production
    const isProduction = mode === 'production' || process.env.NODE_ENV === 'production';
    const baseUrl = isProduction ? '/portfolio/' : '/';
    console.log(`🎯 Auto-detected base URL: ${baseUrl} (mode: ${mode}, NODE_ENV: ${process.env.NODE_ENV})`);
    return baseUrl;
  };
  
  const base = getBaseUrl();
  const appTitle = env.VITE_APP_TITLE || 'PHYSIO REHAB CLINIC';
  
  return defineConfig({
    plugins: [react()],
    
    // Base URL for assets - crucial for GitHub Pages deployment
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
            email: ['emailjs-com'],
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
