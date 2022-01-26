import { gql } from "graphql-tag";

export const cartLinesAdd = gql`
  mutation cartLinesAdd($lines: [CartLineInput!]!, $cartId: ID!) {
    cartLinesAdd(lines: $lines, cartId: $cartId) {
      cart {
        attributes {
          key
          value
        }
        checkoutUrl
        createdAt
        discountCodes {
          applicable
          code
        }
        estimatedCost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
          totalTaxAmount {
            amount
            currencyCode
          }
          totalDutyAmount {
            amount
            currencyCode
          }
        }
        id
        lines(first: 50) {
          edges {
            cursor
            node {
              attributes {
                key
                value
              }
              discountAllocations {
                discountedAmount {
                  amount
                  currencyCode
                }
              }
              estimatedCost {
                subtotalAmount {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
              }
              id
              merchandise {
                ... on ProductVariant {
                  availableForSale
                  compareAtPriceV2 {
                    amount
                    currencyCode
                  }
                  currentlyNotInStock
                  id
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    handle
                    id
                    featuredImage {
                      ... on Image {
                        thumbnail: url(
                          transform: { maxWidth: 160, maxHeight: 160 }
                        )
                      }
                      altText
                      height
                      width
                    }
                    tags
                    title
                  }
                }
              }
              quantity
            }
          }
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
`;
