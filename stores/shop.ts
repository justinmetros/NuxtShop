import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { shopQuery } from "~~/apollo/queries/shop";

export const useShopStore = defineStore("shop", {
  state: () => {
    return {
      moneyFormat: "$",
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
        const { data } = await apolloClient.query({
          query: shopQuery,
        });
        if (!data.shop) {
          throw "getShopData: no response";
        }
        this.setMoneyFormat(data.shop?.moneyFormat ?? "$");
        this.setShopDescription(data.shop?.description ?? "");
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    setMoneyFormat(value: string) {
      this.moneyFormat = value;
    },
    setShopDescription(value: string) {
      this.description = value;
    },
  },
});
