<template>
  <div>
    <Header />
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error :(</div>
    <main v-else>
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "~/assets/css/tailwind.css";
import { useShopStore } from "~/stores/shop";

// Global Store Actions
const { pending, error } = await useAsyncData("shop", () => {
  const shopStore = useShopStore();
  return shopStore.getShopGlobals();
});

// Another way to get initial globals
// Global Composable
// useShopData();
</script>
