<template>
  <section
    v-if="cartStore.cartOpen"
    ref="cart"
    class="fixed bottom-0 right-0 p-4 top-20 w-80 bg-slate-400"
  >
    <header class="pb-4 mb-4 border-b-2 border-black">Cart</header>
    <div
      v-for="item in lineItems"
      :key="item.node.id"
      class="pb-4 mb-4 border-b-2 border-black"
    >
      <div>{{ item.node.merchandise.product.title }}</div>
      <div>qty: {{ item.node.quantity }}</div>
      <div>{{ item.node.estimatedCost.totalAmount.amount }}</div>
    </div>
    <a :href="cartStore.cart.checkoutUrl">Checkout</a>
  </section>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const lineItems = computed(() => cartStore.lineItems);

const cart = ref(null);
onClickOutside(cart, () => cartStore.toggleCart(false));
</script>
