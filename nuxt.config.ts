// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@element-plus/nuxt', 
    '@pinia/nuxt',
    '@unocss/nuxt'
  ], 
})
