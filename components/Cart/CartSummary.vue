<template>
  <div class="py-4 mb-4 border-b-2 border-black">
    <div class="flex justify-between">
      <p>Subtotal:</p>
      <p>
        {{ formatPrice(subtotalAmount.amount, subtotalAmount.currencyCode) }}
      </p>
    </div>
    <div class="flex justify-between">
      <p>Estimated Tax:</p>
      <p>
        {{ formatPrice(totalTaxAmount.amount, totalTaxAmount.currencyCode) }}
      </p>
    </div>
    <div v-if="totalDutyAmount" class="flex justify-between">
      <p>Duties:</p>
      <p>
        {{ formatPrice(totalDutyAmount.amount, totalDutyAmount.currencyCode) }}
      </p>
    </div>
    <div class="flex justify-between">
      <p>Estimated Total:</p>
      <p>{{ formatPrice(totalAmount.amount, totalAmount.currencyCode) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatLocalePrice } from "~/utils/money";
import { useCartStore } from "~/stores/cart";
const cartStore = useCartStore();

const subtotalAmount = cartStore?.cart?.estimatedCost?.subtotalAmount;
const totalAmount = cartStore?.cart?.estimatedCost?.totalAmount;
const totalDutyAmount = cartStore?.cart?.estimatedCost?.totalDutyAmount;
const totalTaxAmount = cartStore?.cart?.estimatedCost?.totalTaxAmount;

function formatPrice(price: string, currencyCode: string) {
  const p = +price;
  return formatLocalePrice(p, "en-US", currencyCode);
}
</script>
