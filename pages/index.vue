<template>
  <div>
    <div>Index</div>
    <div>
      <NuxtLink to="/test">To Test</NuxtLink>
    </div>
    <!-- <div v-if="loading" class="m-3 p-3">loading</div>
    <div v-else class="m-3 p-3">{{ shop.description }}</div> -->
  </div>
</template>

<script setup>
const { data } = await useAsyncData("shop", () => {
  const { shop, loading } = useShopData();
  console.log(shop.value);
  console.log(loading.value);
});
console.log(data);
</script>
