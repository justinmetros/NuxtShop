<template>
  <Header />
  <Cart />
  <main class="min-h-[75vh] px-4">
    <NuxtPage />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import "~/assets/css/tailwind.css";
import { useShopStore } from "~/stores/shop";

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});
</script>
