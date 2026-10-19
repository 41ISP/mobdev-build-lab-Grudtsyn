android/app/build/outputs/apk/debug/app-debug.apkimport react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mobdev-auth-lab-Grudtsyn/'
})
