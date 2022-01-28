<template>
  <div v-if="variants && variants.length" class="mb-3">
    <select
      class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      :aria-label="label"
      @change="handleChange($event)"
    >
      <option selected disabled>{{ label }}</option>
      <option
        v-for="variant in variants"
        :key="variant.node.id"
        :disabled="!variant.node.availableForSale"
        :value="variant.node.id"
      >
        {{ variant.node.title }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { Ref } from "nuxt3/dist/app/compat/capi";
import { useProductStore } from "~/stores/product";

const props = defineProps<{
  label: string;
  variants: Ref;
}>();

const { label, variants } = toRefs(props);

const productStore = useProductStore();

const handleChange = (e: Event) => {
  productStore.setSelectedVariantId((<HTMLSelectElement>e.target).value);
};
</script>
