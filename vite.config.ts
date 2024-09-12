import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias:[{ find: "@", replacement: path.resolve(__dirname, "src")}]
  },
  assetsInclude: ['**/*.JPG', '**/*.PNG', '**/*.png','**/**/**/*.PNG','**/**/**/**/*.PNG'],
  base: "/Portfolio-v1.0/",
})