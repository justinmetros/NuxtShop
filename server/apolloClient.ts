import { InMemoryCache, ApolloClient } from "@apollo/client/core/core.cjs";
import { createHttpLink } from "@apollo/client/link/http/http.cjs";

const httpLink = createHttpLink({
  credentials: "omit",
  uri: process.env.SHOPIFY_STOREFRONT_ENDPOINT,
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
});

export const apolloClient = new ApolloClient({
  ssrMode: true,
  link: httpLink,
  cache: new InMemoryCache(),
});
