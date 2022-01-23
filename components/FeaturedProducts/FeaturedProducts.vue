<template>
  <LoaderPage v-if="loading" />
  <div v-else-if="error">Error</div>
  <ProductGrid v-else>
    <div v-if="title" class="col-span-2 font-bold border-b-2 md:col-span-4">
      {{ title }}
    </div>
    <ProductCard
      v-for="(product, index) in collection.products.edges"
      :index="index"
      :key="product.node.id"
      :product="product.node"
    />
  </ProductGrid>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~~/apollo/queries/collectionByHandle";

const props = defineProps<{
  collectionHandle: string;
  numberProducts?: number;
  title?: string;
}>();

const handle = props.collectionHandle;
const numProducts = props.numberProducts || 4;
const { result, loading, error } = useQuery(collectionByHandle, {
  handle,
  numProducts,
});
const collection = useResult(result, null, (data) => data.collectionByHandle);
</script>
