// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,200..900;1,200..900&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto+Slab:wght@100..900&display=swap" }
      ]
    }
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  // googleFonts: {
  //   families: {
  //     'Roboto Slab': {
  //       wght: [300, 400, 500, 600]
  //     },
  //     Inter: [400, 700],
  //     'Josefin+Sans': true,
  //     Raleway: {
  //       wght: [100, 400],
  //       ital: [100]
  //     },
  //     'Crimson Pro': {
  //       wght: '200..900',
  //       ital: '200..700',
  //     }
  //   },
  //   preload: true
  // }

})