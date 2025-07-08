// vite.config.ts — конфиг для сборщика Vite
// Здесь можно настраивать плагины, алиасы, сервер и прочее для разработки

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
