import { gql } from "graphql-tag";
import { cart } from "~/apollo/fragments/cart";

export const cartLinesAdd = gql`
  ${cart}
  mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
    cartLinesAdd(lines: $lines, cartId: $cartId) {
      cart {
        ...cart
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
