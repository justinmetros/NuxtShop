import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { shopQuery } from "~~/apollo/queries/shop";

export const useShopStore = defineStore("shop", {
  state: () => {
    return {
      description: "",
      loading: false,
      localization: {
        country: {
          currency: {
            isoCode: "USD",
          },
        },
      },
      menuOpen: false,
      moneyFormat: "$",
    };
  },
  actions: {
    async getShopGlobals() {
      try {
        this.loading = true;
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.query({
          query: shopQuery,
        });

        if (!data.shop) {
          throw "getShopData: no response";
        }

        this.description = data?.shop?.description ?? "";
        this.moneyFormat = data?.shop?.moneyFormat ?? "$";
        this.localization = data?.localization ?? {};
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    toggleMenu(state?: boolean) {
      if (typeof state === "boolean") {
        this.menuOpen = state;
      } else {
        this.menuOpen = !this.menuOpen;
      }
    },
  },
});
