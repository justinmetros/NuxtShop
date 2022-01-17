<template>
  <button
    class="flex items-center justify-end"
    aria-label="Cart"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <ShoppingCartIcon class="w-6" aria-hidden />
  </button>
</template>

<script setup lang="ts">
import ShoppingCartIcon from "@heroicons/vue/solid/esm/ShoppingCartIcon.js";
import { useShopStore } from "~/stores/shop";
import { useCartStore } from "~/stores/cart";

const shopStore = useShopStore();
const cartStore = useCartStore();

function handleClick() {
  cartStore.toggleCart();
  shopStore.toggleMenu(false);
}
</script>
