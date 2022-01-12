<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error</div>
    <div v-else>
      <Html>
        <Head v-if="product?.title && product.description">
          <Title>{{ product.title }}</Title>
          <Meta name="description" :content="product.description" />
        </Head>
      </Html>
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
</script>
