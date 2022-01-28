import { gql } from "graphql-tag";
import { cart } from "~/apollo/fragments/cart";

export const cartCreate = gql`
  ${cart}
  mutation cartCreate {
    cartCreate {
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
