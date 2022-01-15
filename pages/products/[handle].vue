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
      <ProductImage
        :alt="product.handle"
        :sizes="sizes"
        :srcset="srcset"
        :width="product.images?.edges[0]?.node?.width ?? ''"
        :height="product.images?.edges[0]?.node?.height ?? ''"
        class=""
      />
      <ProductTitle tag="h1" :title="product.title" variant="product" />
      <ProductPrice
        :priceRange="product.priceRange"
        :compareAtPriceRange="product.compareAtPriceRange"
      />
      <ProductVariants
        label="Select Size & Color"
        :variants="product.variants.edges"
      />
      <ProductAddToCart />
      <ProductDescription :description="product.descriptionHtml" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { breakpointsTailwind } from "@vueuse/core";
import { getSrcset } from "~/utils/images";
import { productByHandle } from "~/apollo/queries/productByHandle";

const route = useRoute();
const handle = route.params.handle;

const { result, loading, error } = useQuery(productByHandle, {
  handle,
});
const product: any = useResult(result, null, (data) => data.productByHandle);

// Product Image
const src = computed(() => product.value.images?.edges[0]?.node?.url ?? "");
const sizes = `(max-width: ${breakpointsTailwind.md}px) 95vw, 40vw`;
const srcset = computed(() => getSrcset(src.value || ""));
</script>
