// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  googleFonts: {
    families: {
      'Roboto Slab': {
        wght: [300, 500, 600]
      },
      Inter: [400, 700],
      'Josefin+Sans': true,
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  }

})