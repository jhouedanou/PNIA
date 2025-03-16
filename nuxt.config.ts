// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
  ],

  app: {
    head: {
      title: 'Prix National d\'Excellence 2025',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Prix National d\'Excellence 2025 - Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://prixnational.ci/' },
        { property: 'og:title', content: 'Prix National d\'Excellence 2025' },
        { property: 'og:description', content: 'Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        { property: 'og:image', content: 'https://prixnational.ci/images/og-image.jpg' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://prixnational.ci/' },
        { name: 'twitter:title', content: 'Prix National d\'Excellence 2025' },
        { name: 'twitter:description', content: 'Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        { name: 'twitter:image', content: 'https://prixnational.ci/images/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css' }
      ],
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.bundle.min.js', body: true }
      ]
    }
  },

  compatibilityDate: '2025-03-16'
})