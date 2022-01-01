import { useQuery, useResult } from "@vue/apollo-composable";
import gql from "graphql-tag";

const ShopQuery = gql`
  query {
    shop {
      description
    }
  }
`;

export function useShopData() {
  const { result, loading, error } = useQuery(ShopQuery);

  const shop = useResult(result, null, (data) => data.shop);

  return {
    shop,
    loading,
    error,
  };
}
