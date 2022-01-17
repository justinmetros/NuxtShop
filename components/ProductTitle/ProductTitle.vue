<template>
  <div>
    <component v-if="title" :is="tag || 'div'">
      {{ title }}
    </component>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  title: string;
}>();

const { tag, title } = toRefs(props);
</script>
