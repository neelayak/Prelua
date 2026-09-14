import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))

// Multi-page build (NOT a single-page app).
//
// Why: this site is hosted on GitHub Pages, which has no server and therefore
// no SPA rewrite rule. A client-side router would 404 on a hard load of
// /privacy — which is exactly what an App Store reviewer or Googlebot does.
// Emitting a real index.html per route makes every compliance URL a real file.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        home: resolve(root, 'index.html'),
        privacy: resolve(root, 'privacy/index.html'),
        terms: resolve(root, 'terms/index.html'),
        support: resolve(root, 'support/index.html'),
        deleteAccount: resolve(root, 'delete-account/index.html'),
      },
    },
  },
})
