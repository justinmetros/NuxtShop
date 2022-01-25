<template>
  <div class="container mx-auto">
    <Html>
      <Head>
        <Title>NuxtShop</Title>
        <Meta name="description" :content="description" />
      </Head>
    </Html>
    <div
      class="flex items-center justify-center p-8 my-8 text-2xl border-2 border-black min-h-[8rem] md:min-h-[12rem]"
    >
      Welcome to NuxtShop
    </div>
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
