import { gql } from "graphql-tag";
import { cart } from "~/apollo/fragments/cart";

export const cartLinesRemove = gql`
  ${cart}
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(lineIds: $lineIds, cartId: $cartId) {
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
