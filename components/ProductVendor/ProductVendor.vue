<template>
  <div>
    <component v-if="vendor" :is="element">
      {{ vendor }}
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  vendor: string;
}>();

const { tag, vendor } = toRefs(props);
const element = tag.value || "div";
</script>
