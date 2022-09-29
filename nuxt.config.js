/**@type {import("@nuxt/types").NuxtConfig} */
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-planets",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
      extensions: ["vue"],
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
  ],

  i18n: {
    locales: [
      { code: "pt-br", iso: "pt-BR", file: "pt-BR.js" },
      { code: "en", iso: "en-US", file: "en-US.js" },
    ],
    defaultLocale: "pt-br",
    vueI18nLoader: true,
    strategy: "no_prefix",
    vueI18n: {
      fallbackLocale: "en",
      messages: {
        en: {
          mercury: "Mercury",
          venus: "Venus",
          earth: "Earth",
          mars: "Mars",
          jupiter: "Jupiter",
          saturn: "Saturn",
          uranus: "Uranus",
          neptune: "Neptune",
          brand: "Solar System",
          goBack: "Go back",
        },
        "pt-br": {
          mercury: "Mercúrio",
          venus: "Venus",
          earth: "Terra",
          mars: "Marte",
          jupiter: "Júpiter",
          saturn: "Saturno",
          uranus: "Urano",
          neptune: "Netupo",
          brand: "Sistema Solar",
          goBack: "Voltar",
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "https://api.nuxtjs.dev/planets",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
