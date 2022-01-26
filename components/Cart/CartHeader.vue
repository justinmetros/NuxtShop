<template>
  <div class="flex items-center h-12 mb-4 border-b-2 border-black md:h-16">
    <button @click="closeCart" @keyup.enter="closeCart" closeCart class="mr-6">
      <CloseIcon class="inline w-5" />
    </button>
    <div>Cart</div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "~/stores/cart";
import CloseIcon from "@heroicons/vue/solid/XIcon.js";

const cartStore = useCartStore();

const closeCart = () => cartStore.toggleCart(false);
</script>
