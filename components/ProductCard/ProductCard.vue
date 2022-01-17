<template>
  <NuxtLink v-if="product" :to="productPath">
    <ProductImage
      :alt="product.handle"
      :height="height"
      :lazy="index > lazyLoadingThreshold"
      :sizes="sizes"
      :srcset="srcset"
      :width="width"
      class=""
    />
    <ProductTitle tag="div" :title="product.title" variant="card" />
    <ProductPrice
      :priceRange="product.priceRange"
      :compareAtPriceRange="product.compareAtPriceRange"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { getSrcset } from "~/utils/images";

const props = defineProps<{
  product: ProductCard;
  index?: number;
}>();

const productPath = `/products/${props.product.handle}`;

const lazyLoadingThreshold = 7;
const src = props.product?.images?.edges[0]?.node?.url ?? "";
const width = props.product?.images?.edges[0]?.node?.width ?? "";
const height = props.product?.images?.edges[0]?.node?.height ?? "";
const sizes = `(max-width: ${breakpointsTailwind.md}px) 45vw, 20vw`;
const srcset = getSrcset(src);
</script>
