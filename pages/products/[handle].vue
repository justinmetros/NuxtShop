<template>
  <div>
    <!-- <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else-if="data && product">
      <ProductTitle tag="h1" :title="product.title" variant="product" />
      <ProductPrice
        :priceRange="product.priceRange"
        :compareAtPriceRange="product.compareAtPriceRange"
      />
      <ProductVendor :vendor="product.vendor" />
      <ProductDescription :description="product.descriptionHtml" />
      <img
        :src="product.images.edges[0].node.transformedSrc"
        :alt="product.handle"
      />
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useProductStore } from "~/stores/product";

const productStore = useProductStore();
const { product } = storeToRefs(productStore);

const route = useRoute();
const handle = route.params.handle.toString();

const { data, pending, error } = await useAsyncData(handle, () => {
  // return productStore.getProductByHandle(handle);
  const data = $fetch("/api/product");
  return data;
});

useMeta({
  meta: [{ description: product.value.description }],
  title: product.value.title,
});
</script>
