<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else>
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { productByHandle } from "~/apollo/queries/productByHandle";

const route = useRoute();
const handle = route.params.handle;

// Use useQuery composable
const { result, loading, error } = useQuery(productByHandle, {
  handle,
});
const product = useResult(result, null, (data) => data.productByHandle);

// Use api route
// const {
//   data: product,
//   pending: loading,
//   error,
// } = await useLazyFetch("/api/product", {
//   params: { handle },
// });

// useMeta({
//   meta: [{ description: product.value.description }],
//   title: product.value.title,
// });
</script>
