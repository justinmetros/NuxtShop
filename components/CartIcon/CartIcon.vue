<template>
  <button
    class="flex justify-end items-center"
    aria-label="Cart"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <ShoppingCartIcon class="w-6" aria-hidden />
  </button>
</template>

<script setup lang="ts">
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
function handleClick() {
  cartStore.toggleCart();
}
</script>
