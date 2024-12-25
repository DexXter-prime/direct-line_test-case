export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
      '@nuxt/image',
      '@nuxt/eslint',
      '@pinia/nuxt',
      'nuxt-icons',
    ],
    eslint: {
      config: {
        stylistic: true,
      }
    },
    css: [
        '~/assets/scss/globals.scss',
        '~/assets/scss/fonts.scss',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
            @import "@/assets/scss/shared/_variables.scss";
            @import "@/assets/scss/shared/_mixins.scss";
          `
                },
            },
        },
    },
})