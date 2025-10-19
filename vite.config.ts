import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_STACK_PROJECT_ID': JSON.stringify('0958c3a7-e1ac-4e4a-946c-1b977e43a126'),
    'import.meta.env.VITE_STACK_PUBLISHABLE_CLIENT_KEY': JSON.stringify('pck_yak8mbrp4a16q78r088ksa4n2saz81rz7agb58r0rf02r'),
    'import.meta.env.NEXT_PUBLIC_STACK_PROJECT_ID': JSON.stringify('0958c3a7-e1ac-4e4a-946c-1b977e43a126'),
    'import.meta.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY': JSON.stringify('pck_yak8mbrp4a16q78r088ksa4n2saz81rz7agb58r0rf02r'),
  }
})
