<template>
  <div class="flex tracking-wide">
    <div v-if="priceVaries">
      {{ formatPrice(priceRange?.minVariantPrice?.amount) }}
      -
      {{ formatPrice(priceRange?.maxVariantPrice?.amount) }}
    </div>
    <div v-else>
      {{ formatPrice(priceRange?.minVariantPrice?.amount) }}
    </div>

    <div v-if="isOnSale" class="ml-2 text-gray-800 line-through">
      <div v-if="compareAtPriceVaries">
        {{ formatPrice(compareAtPriceRange?.minVariantPrice?.amount) }}
        -
        {{ formatPrice(compareAtPriceRange?.maxVariantPrice?.amount) }}
      </div>
      <div v-else>
        {{ formatPrice(compareAtPriceRange?.minVariantPrice?.amount) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";
import { formatLocalePrice } from "~/utils/money";

const props = defineProps<{
  priceRange: PriceRange;
  compareAtPriceRange: PriceRange;
}>();

const shopStore = useShopStore();
const { localization } = storeToRefs(shopStore);
const currencyCode = localization.value?.country?.currency?.isoCode ?? "USD";

const priceVaries =
  props?.priceRange?.minVariantPrice?.amount <
  props?.priceRange?.maxVariantPrice?.amount;

const compareAtPriceVaries =
  props?.compareAtPriceRange?.minVariantPrice?.amount <
  props?.compareAtPriceRange?.maxVariantPrice?.amount;

const isOnSale =
  props?.priceRange?.minVariantPrice?.amount <
  props?.compareAtPriceRange?.minVariantPrice?.amount;

function formatPrice(price: number) {
  return formatLocalePrice(price, "en-US", currencyCode);
}
</script>
