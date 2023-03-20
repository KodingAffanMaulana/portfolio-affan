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
        // { rel: 'icon', type: 'image/png', href: '~/affan.png' },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" },
        { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css' },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap", rel:"stylesheet"}
        // { rel: "stylesheet", href: "https://unpkg.com/aos@next/dist/aos.css"}
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  plugins: [
    { src: '~/plugins/aos', mode: 'client' },
  ],
});
