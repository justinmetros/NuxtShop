<template>
  <div>
    <Header />
    <main class="min-h-[80vh]">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "~/assets/css/tailwind.css";
import "~/assets/css/global.css";
import { useShopStore } from "~/stores/shop";

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});
</script>
