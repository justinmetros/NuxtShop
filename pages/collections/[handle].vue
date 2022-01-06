<template>
  <div>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else>
      <header class="mb-4 text-center">
        Collection: {{ $route.params.handle }}
        <p v-if="title">{{ title }}</p>
        <div v-if="description" v-html="description"></div>
      </header>
      <section
        class="grid grid-cols-2 gap-4 mx-4 md:mx-auto md:max-w-6xl md:grid-cols-4"
      >
        <ProductCard
          v-for="product in products"
          :key="product.node.id"
          :product="product.node"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCollectionStore } from "~/stores/collection";

const collectionStore = useCollectionStore();
const { title, description, products } = storeToRefs(collectionStore);

const { pending, error } = await useAsyncData("collection", () => {
  const route = useRoute();
  const handle = route.params.handle;
  return collectionStore.getCollectionByHandle(handle);
});
</script>
