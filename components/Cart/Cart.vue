<template>
  <section
    v-if="cartStore.cartOpen"
    ref="cart"
    class="fixed top-20 bottom-0 right-0 w-80 bg-slate-400 p-4"
  >
    <header class="mb-4 pb-4 border-black border-b-2">Cart</header>
    <div
      v-for="item in lineItems"
      :key="item.node.id"
      class="mb-4 pb-4 border-black border-b-2"
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
