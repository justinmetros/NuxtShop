<template>
  <div v-if="product">
    {{ props.product.title }}
  </div>
</template>

<script setup lang="ts">
interface ProductCard {
  title: string;
}

const props = defineProps<{
  product: ProductCard;
}>();
</script>
