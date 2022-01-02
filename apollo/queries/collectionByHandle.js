import { gql } from "graphql-tag";

export const collectionByHandle = gql`
  query collectionByHandle(
    $handle: String!
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collectionByHandle(handle: $handle) {
      title
      description
      handle
      id
      image {
        altText
        originalSrc
        transformedSrc(maxWidth: 3000)
      }
      products(first: 24, sortKey: $sortKey, reverse: $reverse) {
        edges {
          cursor
          node {
            id
            description
            availableForSale
            handle
            title
            id
            tags
            productType
            variants(first: 100) {
              edges {
                node {
                  id
                  title
                  priceV2 {
                    amount
                  }
                  compareAtPriceV2 {
                    amount
                  }
                  availableForSale
                  sku
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
            images(first: 2) {
              edges {
                node {
                  id
                  transformedSrc(maxWidth: 1024)
                }
              }
            }
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
