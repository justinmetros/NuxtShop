<template>
  <button @click="addToCart" @keyup.enter="addToCart">
    <span v-if="!selectedVariantId">{{ labelDisabled }}</span>
    <span v-else>{{ labelActive }}</span>
  </button>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/product";
import { useCartStore } from "~/stores/cart";

const productStore = useProductStore();
const cartStore = useCartStore();

const labelActive = "Add to Cart";
const labelDisabled = "Select Variant";
const selectedVariantId = computed(() => productStore.selectedVariantId);

const addToCart = () => {
  if (!selectedVariantId.value) {
    // TO-DO: Handle unselected variant
    return;
  }
  cartStore.cartLinesAdd(selectedVariantId.value);
};
</script>
