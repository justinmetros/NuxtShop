<template>
  <nav class="text-center">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.label"
      :to="link.path"
      class="m-2"
    >
      {{ link.label }}
    </NuxtLink>
  </nav>
</template>

<script setup>
import { navLinks } from "~/constants";
</script>
