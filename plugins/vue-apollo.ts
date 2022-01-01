import { defineNuxtPlugin } from "#app";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    credentials: "omit",
    uri: nuxtApp.payload.config.SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        nuxtApp.payload.config.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
    cache: new InMemoryCache(),
  });
  provideApolloClient(apolloClient);
});
