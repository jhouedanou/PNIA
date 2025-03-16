// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  app: {
    head: {
      title: 'Prix Néerlandais de l\'Innovation Agricole',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Prix Néerlandais de l\'Innovation Agricole - Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://agripreneur.ci/' },
        { property: 'og:title', content: 'Prix Néerlandais de l\'Innovation Agricole' },
        { property: 'og:description', content: 'Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        { property: 'og:image', content: 'https://agripreneur.ci/images/og-image.jpg' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://agripreneur.ci/' },
        { name: 'twitter:title', content: 'Prix Néerlandais de l\'Innovation Agricole' },
        { name: 'twitter:description', content: 'Célébration de l\'innovation et l\'excellence dans le secteur agricole en Côte d\'Ivoire' },
        { name: 'twitter:image', content: 'https://agripreneur.ci/images/og-image.jpg' },
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