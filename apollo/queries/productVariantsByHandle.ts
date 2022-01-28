import { gql } from "graphql-tag";
import { productVariants } from "~/apollo/fragments/productVariants";

export const productVariantsByHandle = gql`
  ${productVariants}
  query product($handle: String!) {
    productByHandle(handle: $handle) {
      ...productVariants
    }
  }
`;
