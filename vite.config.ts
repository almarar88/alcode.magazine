import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { VitePWA } from 'vite-plugin-pwa';
// Served at the site root (blog.alcode.ae)
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  plugins: [react(), tailwindcss(), VitePWA({
    registerType: 'autoUpdate', injectRegister: 'script-defer', includeAssets: ['favicon.svg', 'brand/apple-touch-icon.png'],
    manifest: { name: 'متجر الكود للكتب', short_name: 'متجر الكود', description: 'متجر كتب مؤسسة الكود لنشر الكتب.', lang: 'ar', dir: 'rtl',
      start_url: '/', scope: '/', display: 'standalone', background_color: '#f6efe1', theme_color: '#1b1712',
      icons: [{ src: '/brand/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/brand/icon-512.png', sizes: '512x512', type: 'image/png' }, { src: '/brand/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }] },
    workbox: {
      globPatterns: ['_app/**/*.{js,css}', 'fonts/**/*.woff2', 'favicon.svg', 'brand/*.svg'], maximumFileSizeToCacheInBytes: 4_000_000,
      navigateFallback: null, cleanupOutdatedCaches: true,
      navigationPreload: false,
      runtimeCaching: [
        { urlPattern: ({ request }) => request.mode === 'navigate', handler: 'NetworkFirst', options: { cacheName: 'pages', networkTimeoutSeconds: 4, expiration: { maxEntries: 80 } } },
        { urlPattern: ({ url }) => /\/(books|brand)\//.test(url.pathname), handler: 'CacheFirst', options: { cacheName: 'images', expiration: { maxEntries: 300, maxAgeSeconds: 60 * 60 * 24 * 60 } } },
        { urlPattern: ({ url }) => /\.(xml|json)$/.test(url.pathname), handler: 'StaleWhileRevalidate', options: { cacheName: 'data' } },
      ],
    },
  })],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  build: { outDir: 'dist', emptyOutDir: true, assetsDir: '_app', chunkSizeWarningLimit: 900 },
});
