import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
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
    }),
    VitePWA({
      mode: (process.env as ImportMetaEnv).VITE_PWA_MODE,
      base: (process.env as ImportMetaEnv).VITE_PWA_BASE,
      includeAssets: ['favicon.ico', 'robots.txt'],
      scope: '/',
      srcDir: './src',
      devOptions: {
        enabled: (process.env as ImportMetaEnv).VITE_PWA_ENABLE_DEV === 'true',
        /* when using generateSW the PWA plugin will switch to classic */
        type: 'module',
        navigateFallback: 'index.html'
      },
      manifest: {
        name: 'Lighthouse CI Practice',
        short_name: 'LHCI',
        description: 'Practicing to use Lighthouse CI',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
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
