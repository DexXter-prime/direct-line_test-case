export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    nitro: {
        preset: 'static',
    },
    ssr: false,
    modules: [
        '@nuxt/image',
        '@nuxt/eslint',
        '@pinia/nuxt',
        '@nuxt/icon',
    ],
    eslint: {
      config: {
        stylistic: true,
      }
    },
    image: {
        screens: {
            'xs': 747,
        },
    },
    icon: {
        customCollections: [
            {
                prefix: 'icon',
                dir: './assets/icons'
            },
        ],
    },
    css: [
        '~/assets/scss/globals.scss',
        '~/assets/scss/fonts.scss',
    ],
    routeRules: {
        '/': { redirect: '/stock' },
    },
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