/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'

import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/browser-extension-manager-ui/',
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    css: true,
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    include: [
      '**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}',
      '**/__tests__/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'
    ]
  },
  resolve: {
    alias: {
       '@': path.resolve(__dirname, './src'),
    }
  }
})