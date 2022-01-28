import { gql } from "graphql-tag";
import { cartFields } from "~/apollo/fragments/cartFields";
import { cartLines } from "~/apollo/fragments/cartLines";

export const cart = gql`
  ${cartFields}
  ${cartLines}
  fragment cart on Cart {
    ...cartFields
    ...cartLines
  }
`;
