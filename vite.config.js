import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/MiloMiso/', // Idagdag mo itong linya na ito bro (ito ang pangalan ng repository mo)
})
