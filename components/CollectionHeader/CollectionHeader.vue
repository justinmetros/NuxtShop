<template>
  <header
    class="flex flex-col justify-center items-center p-4 min-h-[10rem] md:min-h-[20rem]"
  >
    <h1 class="mb-2 text-2xl font-bold">{{ title }}</h1>
    <div v-html="description" class="text-sm"></div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>
