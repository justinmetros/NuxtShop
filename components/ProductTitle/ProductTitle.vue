<template>
  <component
    v-if="title"
    :is="tag || 'div'"
    :variant="variant"
    :class="classes"
  >
    {{ title }}
  </component>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  title: string;
  variant?: string;
}>();

const { tag, title, variant } = toRefs(props);
const cardClasses = "text-base";
const productClasses = "text-2xl";
const classes = variant.value === "card" ? cardClasses : productClasses;
</script>
