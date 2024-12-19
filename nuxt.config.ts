// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
