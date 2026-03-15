import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ssr: false,

  css: ['~/assets/css/main.css'],
  modules: [
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    '@peterbud/nuxt-query',
  ],
  image: {
    format: ["jpg", "png"],
    quality: 80,
  },
  nuxtQuery: {
    autoImports: true,
    queryClientOptions: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retryDelay: (attemptIndex: number) => Math.min(1000 * 2 ** attemptIndex, 30000),
        }
      }
    }
  },

  imports: {
    dirs: ['api/**', 'errors/**']
  },

  icon: {
    serverBundle: {
      collections: ['lucide']
    },
    mode: 'css',
    cssLayer: 'base',
  },

  vite: {
    plugins: [tailwindcss() as any],
  },

  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },
})