import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/happy-life-prototype/', // <-- viktigt för GitHub Pages under repo-namn
})
