<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 bg-black bg-opacity-20"
    @click="closeCart"
    @keyup.enter="closeCart"
  >
    &nbsp;
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const closeCart = () => cartStore.toggleCart(false);
</script>
