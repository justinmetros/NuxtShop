<template>
  <div class="collection">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else>
      <!-- Msg: {{ data }} -->
      <header class="mb-4 text-center">
        <p v-if="collection.title">{{ collection.title }}</p>
        <div v-if="collection.descriptionHtml">
          {{ collection.descriptionHtml }}
        </div>
      </header>

      <section
        class="grid grid-cols-2 gap-4 mx-4 md:mx-auto md:max-w-6xl md:grid-cols-4"
      >
        <ProductCard
          v-for="product in collection.products.edges"
          :key="product.node.id"
          :product="product.node"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~~/apollo/queries/collectionByHandle";

const route = useRoute();
const handle = route.params.handle;

// Use useQuery composable
const { result, loading, error } = useQuery(collectionByHandle, { handle });
const collection = useResult(result, null, (data) => data.collectionByHandle);

// Use Api route
// const {
//   data: collection,
//   pending: loading,
//   error,
// } = await useLazyFetch("/api/collection", {
//   params: { handle },
// });

// const { data, pending, error } = await useAsyncData(handle, () => {
//   return collectionStore.getCollectionByHandle(handle);
// });
</script>
