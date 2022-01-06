<template>
  <NuxtLink v-if="product" :to="productPath">
    <div class="aspect-[925/617]">
      <img
        :src="product.images.edges[0].node.transformedSrc"
        :alt="product.handle"
        class=""
      />
    </div>
    <div>{{ product.title }}</div>

    <ProductPrice
      :priceRange="product.priceRange"
      :compareAtPriceRange="product.compareAtPriceRange"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  product: ProductCard;
}>();

const productPath = `/products/${props.product.handle}`;
</script>
