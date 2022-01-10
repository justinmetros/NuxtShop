<template>
  <component v-if="vendor" :is="element">
    {{ vendor }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  vendor: string;
}>();

const { tag, vendor } = toRefs(props);
const element = tag.value || "div";
</script>
