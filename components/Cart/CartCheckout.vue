<template>
  <a
    v-if="checkoutUrl"
    :href="checkoutUrl"
    class="block py-4 font-bold text-center text-white bg-black"
    >Checkout</a
  >
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const checkoutUrl = cartStore?.cart?.checkoutUrl;
</script>
