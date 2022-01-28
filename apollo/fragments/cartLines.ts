import { gql } from "graphql-tag";

export const cartLines = gql`
  fragment cartLines on Cart {
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
                    thumbnail: url(transform: { maxWidth: 160, maxHeight: 160 })
                  }
                  altText
                  height
                  width
                }
                tags
                title
              }
              selectedOptions {
                name
                value
              }
            }
          }
          quantity
        }
      }
    }
  }
`;
