<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import "~/assets/css/tailwind.css";
// import { useShopStore } from "~/stores/shop";

// // Global Store Actions
// const { pending, error } = await useAsyncData("shop", () => {
//   const shopStore = useShopStore();
//   return shopStore.getShopGlobals();
// });

// Another way to get initial globals
// Global Composable
// useShopData();
</script>
