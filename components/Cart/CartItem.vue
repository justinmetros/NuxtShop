<template>
  <div class="flex pb-4 mb-4 border-b-2 border-black">
    <img
      :src="image"
      :alt="item.merchandise.product.title"
      class="block mr-4"
    />
    <div>
      <div>
        <div>{{ item.merchandise.product.title }}</div>
        <div>qty: {{ item.quantity }}</div>
        <div>{{ item.estimatedCost.totalAmount.amount }}</div>
      </div>
      <button>
        <CloseIcon
          class="inline w-4"
          @click="removeItem"
          @keyup.enter="removeItem"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from "@heroicons/vue/solid/XIcon.js";
import { useCartStore } from "~/stores/cart";

// TO-DO: Add item type def
const props = defineProps<{
  item: any;
}>();

const cartStore = useCartStore();

const image = props.item?.merchandise?.product?.featuredImage?.thumbnail ?? "";
const id = props.item?.id;

const removeItem = () => cartStore.cartLinesRemove(id);
</script>
