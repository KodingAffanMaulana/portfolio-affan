// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@gits-id/ui-nuxt', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false,
  },
  app: {
    head: {
      title: 'Portfolio Affan',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { hid: 'description', name: 'description', content: 'portofolio nuxt' }
      ],
      link: [ 
        { rel: 'icon', type: 'image/png', href: '/affan.png' }
      ]
    },
    pageTransition: { name: 'page', mode: 'in-out' }
  }
});
