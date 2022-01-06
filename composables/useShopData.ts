// import { useState } from "#app";
// import { useQuery, useResult } from "@vue/apollo-composable";
// import { shopQuery } from "~~/apollo/queries/shop";
// import { useShopStore } from "~/stores/shop";

// export const useShopData = () => {
//   const { result, loading, error, onResult } = useQuery(shopQuery, null, {
//     fetchPolicy: "cache-and-network",
//   });
//   const description = useResult(result, null, (data) => data.shop.description);

//   onResult((queryResult) => {
//     const shopStore = useShopStore();
//     shopStore.setShopDescription(queryResult.data?.shop?.description ?? "");
//   });

//   return useState("shopDataQuery", () => {
//     return {
//       description,
//       loading,
//       error,
//     };
//   });
// };
