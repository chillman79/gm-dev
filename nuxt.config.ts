// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    'nuxt-simple-robots'
  ],
  colorMode: {
    classSuffix: "",
  },
  css: ["~/assets/css/main.css", "~/assets/css/markdown.css"],
  content: {
   
  },
  googleFonts: {
    families: {
      Inconsolata: true,
    },
  },
});
