<template>
  <div>
    <Html>
      <Head>
        <Title>NuxtShop</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
    <div class="p-4 m-4 border-2 border-black">Welcome to NuxtShop</div>
    <FeaturedProducts
      collectionHandle="frontpage"
      :numberProducts="4"
      title="Featured Products"
    />
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useShopStore } from "~/stores/shop";

const shopStore = useShopStore();
const { description } = storeToRefs(shopStore);
</script>
