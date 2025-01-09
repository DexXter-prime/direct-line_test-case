export default defineNuxtConfig({
    $development: undefined, $env: undefined, $meta: undefined, $production: undefined, $test: undefined,
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    ssr: false,
    modules: [
        '@nuxt/image',
        '@pinia/nuxt',
        '@nuxt/icon',
    ],
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