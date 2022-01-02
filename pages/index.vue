<template>
  <div>
    <div>Index</div>
    <div class="m-4 p-4 border-2 border-red-900">{{ description }}</div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);
</script>
