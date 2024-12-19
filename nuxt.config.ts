// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt'],
  app: {
    head: {
      title: 'Chiclelandia',
      htmlAttrs: {
        lang: 'es'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Comunidad de videojuegos en español. Entra para jugar en nuestros servidores o conocer a otras personas que aman los juegos tanto como tú.' },
        { name: 'robots', content: 'index, follow' },
        { name: 'og:title', content: 'Chiclelandia' },
        { name: 'og:url', content: 'https://chiclelandia.com/' },
        { name: 'og:description', content: 'Comunidad de videojuegos en español. Entra para jugar en nuestros servidores o conocer a otras personas que aman los juegos tanto como tú.' },
        { name: 'og:image', content: '~/assets/images/logo.png' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Chiclelandia',
      short_name: 'Chiclelandia',
      description: 'Comunidad de videojuegos en español. Entra para jugar en nuestros servidores o conocer a otras personas que aman los juegos tanto como tú.',
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,jpg,svg}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn.discordapp.com\/.*/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'discord-images',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 7 * 24 * 60 * 60, // 1 week
            },
          },
        },
      ],
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: [
    '~/assets/styles/main.scss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
