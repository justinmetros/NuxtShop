import { defineStore } from "pinia";
import { useApolloClient } from "@vue/apollo-composable";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";

export const useCollectionStore = defineStore("collection", {
  state: () => {
    return {
      cursor: "",
      description: "",
      loading: false,
      pageInfo: {},
      products: [],
      title: "",
    };
  },
  actions: {
    async getCollectionByHandle(
      handle: string | string[],
      sortKey: string | null = null,
      reverse: boolean = false
    ) {
      this.loading = true;
      try {
        const { resolveClient } = useApolloClient();
        const apolloClient = resolveClient();
        const { data } = await apolloClient.query({
          query: collectionByHandle,
          variables: {
            handle,
            sortKey,
            reverse,
          },
        });
        if (!data.collectionByHandle) {
          throw new Error("fetchCollectionByHandle: collection not found");
        }
        this.title = data.collectionByHandle.title;
        this.description = data.collectionByHandle.description;
        this.products = data.collectionByHandle.products.edges;
        return data;
      } catch (e) {
        return e;
      } finally {
        this.loading = false;
      }
    },
  },
});
