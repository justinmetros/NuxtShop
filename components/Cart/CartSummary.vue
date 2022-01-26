<template>
  <div class="pb-4 mb-4 border-b-2 border-black">
    <div class="flex justify-between">
      <p>Subtotal:</p>
      <p>
        {{ subtotalAmount }}
      </p>
    </div>
    <div class="flex justify-between">
      <p>Estimated Tax:</p>
      <p>
        {{ totalTaxAmount }}
      </p>
    </div>
    <div v-if="totalDutyAmount" class="flex justify-between">
      <p>Duties:</p>
      <p>
        {{ totalDutyAmount }}
      </p>
    </div>
    <div class="flex justify-between">
      <p>Estimated Total:</p>
      <p>{{ totalAmount }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCartStore } from "~/stores/cart";

const cartStore = useCartStore();
const { subtotalAmount, totalTaxAmount, totalDutyAmount, totalAmount } =
  storeToRefs(cartStore);
</script>
