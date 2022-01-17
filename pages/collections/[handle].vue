<template>
  <div>
    <LoaderPage v-if="loading" />
    <div v-else-if="error">Error</div>
    <div v-else>
      <Html>
        <Head v-if="collection?.title && collection?.description">
          <Title>{{ collection?.title || "" }}</Title>
          <Meta name="description" :content="collection?.description || ''" />
        </Head>
      </Html>
      <header class="mb-4 text-center">
        <p>{{ collection.title }}</p>
        <div>
          {{ collection.descriptionHtml }}
        </div>
      </header>

      <section
        class="grid grid-cols-2 gap-4 mx-4 md:mx-auto md:max-w-6xl md:grid-cols-4"
      >
        <ProductCard
          v-for="(product, index) in collection.products.edges"
          :index="index"
          :key="product.node.id"
          :product="product.node"
        />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~~/apollo/queries/collectionByHandle";

const route = useRoute();
const handle = route.params.handle;

const { result, loading, error } = useQuery(collectionByHandle, { handle });
const collection = useResult(result, null, (data) => data.collectionByHandle);
</script>
