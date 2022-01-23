<template>
  <section>
    <LoaderPage v-if="loading" />
    <div v-else-if="error">Error</div>
    <div v-else>
      <Html>
        <Head v-if="collection?.title && collection?.description">
          <Title>{{ collection?.title || "" }}</Title>
          <Meta name="description" :content="collection?.description || ''" />
        </Head>
      </Html>
      <CollectionHeader
        :title="collection.title"
        :description="collection.descriptionHtml"
      />
      <ProductGrid>
        <ProductCard
          v-for="(product, index) in collection.products.edges"
          :index="index"
          :key="product.node.id"
          :product="product.node"
        />
      </ProductGrid>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQuery, useResult } from "@vue/apollo-composable";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";

const route = useRoute();
const handle = route.params.handle;

const { result, loading, error } = useQuery(collectionByHandle, {
  handle,
  numProducts: 48,
});
const collection = useResult(result, [], (data) => data.collectionByHandle);
</script>
