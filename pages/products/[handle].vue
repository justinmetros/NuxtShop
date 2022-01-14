<template>
  <div>
    <LoaderPage v-if="loading" />
    <div v-else-if="error">Error</div>
    <div v-else>
      <Html>
        <Head v-if="product?.title && product.description">
          <Title>{{ product.title }}</Title>
          <Meta name="description" :content="product.description" />
        </Head>
      </Html>
      <img
        :src="product.images.edges[0].node.transformedSrc"
        :alt="product.handle"
      />
      <ProductTitle tag="h1" :title="product.title" variant="product" />
      <ProductPrice
        :priceRange="product.priceRange"
        :compareAtPriceRange="product.compareAtPriceRange"
      />
      <ProductVendor :vendor="product.vendor" />
      <ProductVariants
        label="Select Size & Color"
        :variants="product.variants.edges"
      />
      <ProductDescription :description="product.descriptionHtml" />
      <div v-if="hasSelectedVariantId">has variant</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { useProductStore } from "~/stores/product";
import { productByHandle } from "~/apollo/queries/productByHandle";

const productStore = useProductStore();
const route = useRoute();
const handle = route.params.handle;

const { result, loading, error } = useQuery(productByHandle, {
  handle,
});
const product = useResult(result, null, (data) => data.productByHandle);

const hasSelectedVariantId = computed(() => productStore.selectedVariantId);
</script>
