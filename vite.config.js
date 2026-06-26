import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/FloraVelas/', // Altere para o nome do seu repositório no GitHub
  build: {
    outDir: 'docs',
  },
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '0.0.0.0',
    ],
  },
})
