<template>
  <section v-if="cartStore.cartOpen" ref="cart">
    <div
      class="fixed top-0 bottom-0 right-0 z-10 px-4 pb-4 bg-white border-l-2 border-black w-[90vw] md:w-[400px]"
    >
      <CartHeader />
      <div v-if="lineItems.length">
        <CartItem
          v-for="item in lineItems"
          :key="item?.node?.id"
          class="pb-4 mb-4 border-b-2 border-black"
          :item="item?.node ?? {}"
        />
        <CartSummary />
        <CartCheckout />
      </div>
      <div v-else>
        <CartEmpty />
      </div>
    </div>
    <CartBackdrop />
  </section>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();

const lineItems = computed(() => cartStore.lineItems);

const cart = ref(null);
const closeCart = () => cartStore.toggleCart(false);
onClickOutside(cart, () => closeCart);
</script>
