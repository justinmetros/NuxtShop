<template>
  <header
    class="my-8 flex flex-col justify-center items-center p-4 min-h-[8rem] border-black border-2 md:min-h-[12rem]"
  >
    <h1 class="mb-2 text-2xl font-bold">{{ title }}</h1>
    <div v-html="description" class="text-sm text-center"></div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  description: string;
}>();
</script>
