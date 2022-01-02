import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";
import { defineNuxtPlugin, NuxtApp } from "#app";

export default defineNuxtPlugin((nuxt: NuxtApp) => {
  const httpLink = createHttpLink({
    credentials: "omit",
    uri: nuxt.payload.config.SHOPIFY_STOREFRONT_ENDPOINT,
    headers: {
      "X-Shopify-Storefront-Access-Token":
        nuxt.payload.config.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
    },
  });

  const cache = new InMemoryCache();

  let apolloClient: ApolloClient<any>;

  if (process.server) {
    apolloClient = new ApolloClient({
      ssrMode: true,
      link: httpLink,
      cache: new InMemoryCache(),
    });
    nuxt.hook("app:rendered", () => {
      nuxt.payload.data["apollo"] = apolloClient.extract();
    });
  } else {
    cache.restore(nuxt.payload.data["apollo"]);
    apolloClient = new ApolloClient({
      link: httpLink,
      cache: cache,
    });
  }

  provideApolloClient(apolloClient);
  nuxt.provide("apollo", { apolloClient });
});
