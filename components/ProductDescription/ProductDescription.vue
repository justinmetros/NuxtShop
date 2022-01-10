<template>
  <div>
    <template v-html="description" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  description: string;
}>();

const { description } = toRefs(props);
</script>
