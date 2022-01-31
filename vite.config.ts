import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS({
      config: {
        theme: {
          screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
          }
        }
      }
    })
  ],
  resolve: {
    alias: [
      {
        find: '~',
        replacement: '/src'
      }
    ]
  },
  server: {
    fs: {
      allow: ['..'],
      strict: false
    }
  }
})
