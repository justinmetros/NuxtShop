<template>
  <div class="flex w-full pb-4 mb-4 border-b-2 border-black">
    <img
      :src="image"
      :alt="item.merchandise.product.title"
      :width="imageWidth"
      :height="imageHeight"
      class="self-start block object-contain w-20 h-auto mr-4"
    />
    <div class="flex items-start justify-between w-full text-sm">
      <div>
        <div class="text-base">{{ item.merchandise.product.title }}</div>
        <div v-for="option in variantOptions" :key="option.value" class="flex">
          <template v-if="option.value !== 'Default Title'">
            <div class="mr-2">{{ option.name }}:</div>
            <div>{{ option.value }}</div>
          </template>
        </div>
        <div>QTY: {{ item.quantity }}</div>
        <div>{{ formattedPrice }}</div>
      </div>
      <button class="ml-4">
        <TrashIcon
          class="inline w-4"
          @click="removeItem"
          @keyup.enter="removeItem"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TrashIcon from "@heroicons/vue/solid/TrashIcon.js";
import { formatLocalePrice } from "~/utils/money";
import { useCartStore } from "~/stores/cart";

// TO-DO: Add item type def
const props = defineProps<{
  item: any;
}>();

const cartStore = useCartStore();

const image = props.item?.merchandise?.product?.featuredImage?.thumbnail ?? "";
const imageWidth = props.item?.merchandise?.product?.featuredImage?.width ?? "";
const imageHeight =
  props.item?.merchandise?.product?.featuredImage?.height ?? "";

const id = props.item?.id;
const variantOptions = props.item?.merchandise?.selectedOptions ?? null;

const removeItem = () => cartStore.cartLinesRemove(id);

const price = props.item?.estimatedCost?.totalAmount?.amount ?? "";
const currencyCode = props.item?.estimatedCost?.totalAmount?.currencyCode ?? "";
const formattedPrice = computed(() =>
  formatLocalePrice(price, "en-US", currencyCode)
);
</script>
