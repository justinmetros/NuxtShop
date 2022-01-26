import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { cartCreate } from "~/apollo/mutations/cartCreate";
import { cartLinesAdd } from "~/apollo/mutations/cartLinesAdd";
import { cartLinesRemove } from "~/apollo/mutations/cartLinesRemove";
import { checkoutUrl } from "~/apollo/queries/checkoutUrl";

// TO-DO: provide apolloClient to pinia as plugin
// https://pinia.vuejs.org/core-concepts/plugins.html#introduction

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: {
        checkoutUrl: null,
        estimatedCost: {
          subtotalAmount: <Amount>{},
          totalAmount: <Amount>{},
          totalDutyAmount: <Amount>{},
          totalTaxAmount: <Amount>{},
        },
        id: null,
        lines: {
          edges: [],
        },
      },
      loading: false,
      cartOpen: false,
    };
  },
  actions: {
    toggleCart(state?: boolean) {
      if (typeof state === "boolean") {
        this.cartOpen = state;
      } else {
        this.cartOpen = !this.cartOpen;
      }
    },
    async cartCreate() {
      try {
        this.loading = true;
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.mutate({
          mutation: cartCreate,
        });
        if (!data.cartCreate.cart.id) {
          throw "cartCreate: error";
        }
        this.cart.id = data.cartCreate.cart.id;
        this.cart.checkoutUrl = data.cartCreate.cart.checkoutUrl;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    async getCheckoutUrl() {
      if (this.checkoutUrl) {
        return this.checkoutUrl;
      }
      if (!this.cart.id) {
        await this.cartCreate();
      }
      try {
        this.loading = true;
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.query({
          query: checkoutUrl,
          variables: {
            cartId: this.cart.id,
          },
        });
        if (!data.checkoutUrl.cart.checkoutUrl) {
          throw "checkoutUrl: error";
        }
        this.cart.checkoutUrl = data.checkoutUrl.cart.checkoutUrl;
        return this.cart.checkoutUrl;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    async cartLinesAdd(merchandiseId: string) {
      try {
        if (!this.cart.id) {
          await this.cartCreate();
        }
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.mutate({
          mutation: cartLinesAdd,
          variables: {
            lines: [
              {
                merchandiseId,
              },
            ],
            cartId: this.cart.id,
          },
        });
        if (!data.cartLinesAdd) {
          throw "cartAdd: error";
        }
        this.cart = data.cartLinesAdd.cart;
        this.cartOpen = true;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
    async cartLinesRemove(merchandiseId: string) {
      try {
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.mutate({
          mutation: cartLinesRemove,
          variables: {
            lineIds: [merchandiseId],
            cartId: this.cart.id,
          },
        });
        if (!data.cartLinesRemove) {
          throw "cartRemove: error";
        }
        this.cart = data.cartLinesRemove.cart;
        this.cartOpen = true;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {
    lineItems: (state) => state.cart.lines.edges,
  },
});
