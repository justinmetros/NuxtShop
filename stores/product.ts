import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { productByHandle } from "~~/apollo/queries/productByHandle";

export const useProductStore = defineStore("product", {
  state: () => {
    return {
      product: {
        availableForSale: false,
        compareAtPriceRange: <PriceRange>{},
        description: "",
        descriptionHtml: "",
        handle: "",
        id: "",
        images: <any>{},
        options: <any>{},
        priceRange: <PriceRange>{},
        productType: "",
        tags: [],
        title: "",
        variants: <any>{},
        vendor: "",
      },
    };
  },
  actions: {
    async getProductByHandle(handle: string | string[]) {
      this.loading = true;
      try {
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.query({
          query: productByHandle,
          variables: {
            handle,
          },
        });
        console.log(data.productByHandle);
        if (!data.productByHandle) {
          console.log("error");
          throw new Error("getProductByHandle: product not found");
        }
        this.product = data.productByHandle;
        return data.productByHandle;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
  },
  getters: {},
});
