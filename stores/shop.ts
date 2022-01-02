import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { shopQuery } from "~/apollo/queries/queryShop";

export const useShopStore = defineStore("shop", {
  state: () => {
    return {
      loading: false,
      description: "",
    };
  },
  actions: {
    async getShopGlobals() {
      this.loading = true;
      try {
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const response = await apolloClient.query({
          query: shopQuery,
        });
        if (!response) {
          throw "getShopData: no respone";
        }
        this.setShopDescription(response.data?.shop.description ?? "");
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    setShopDescription(value: string) {
      this.description = value;
    },
  },
});
