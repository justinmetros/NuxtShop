import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  publicRuntimeConfig: {
    SHOPIFY_STOREFRONT_ENDPOINT: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
    SHOPIFY_STOREFRONT_ACCESS_TOKEN:
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  buildModules: ["@pinia/nuxt", "@vueuse/nuxt"],
  build: {
    transpile: [
      "@apollo/client",
      "@vue/apollo-composable",
      "ts-invariant/process",
    ],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ["~/assets/css/fonts.css", "~/assets/css/global.css"],
});
