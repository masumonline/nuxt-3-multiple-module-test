// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxt/image',
    "@nuxtjs/cloudinary",
    'nuxt-swiper',
    '@nuxtjs/sitemap',
    '@nuxtjs/turnstile',
    '@tresjs/nuxt',
  ],
  i18n: {
    vueI18n: './i18n.config.ts',
    baseUrl: 'http://localhost:3300',
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    locales: [
      { code: 'en', iso: 'en-US' },
      { code: 'bn', iso: 'bn-BD' },
    ],
  },
  image: {
    format: ['webp'],
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/unitas/image/upload/v1682010450/'
    },
    unsplash: {
      baseURL: 'https://images.unsplash.com'
    },
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  },
  site: {
    name: 'Awesome Site',
    description: 'Welcome to my awesome site!',
    indexable: false,
    debug: true
  },
  seo: {
    redirectToCanonicalSiteUrl: true
  },
  sitemap: {
    exclude: ['/mock'],
  },
  robots: {
    disallow: ['/mock'],
    allow: '/builder'
  },
  turnstile: {
    siteKey: '0x4AAAAAAATFhmzvzGdacrV4',
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})