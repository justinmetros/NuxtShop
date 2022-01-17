<template>
  <button
    class="flex items-center"
    aria-label="Menu"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <MenuIcon class="w-6" aria-hidden />
  </button>
</template>

<script setup lang="ts">
import MenuIcon from "@heroicons/vue/outline/esm/MenuIcon.js";
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();

function handleClick() {
  shopStore.toggleMenu();
}
</script>
