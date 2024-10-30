import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig((config) => {
  return {
    plugins: [react()],
    base: config.mode === 'production' ? '/techleaf' : undefined,
  }
})