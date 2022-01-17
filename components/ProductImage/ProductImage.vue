<template>
  <img
    :alt="alt"
    :height="height"
    :loading="lazy ? 'lazy' : 'eager'"
    :srcset="srcset"
    :sizes="sizes"
    :width="width"
    src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  height: string | number;
  lazy?: boolean;
  sizes?: string;
  srcset: string;
  width: string | number;
}>();

const { alt, height, lazy, sizes, srcset, width } = toRefs(props);
</script>
