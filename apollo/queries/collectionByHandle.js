import { gql } from "graphql-tag";

export const collectionByHandle = gql`
  query collection(
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
      products(first: 48, sortKey: $sortKey, reverse: $reverse) {
        edges {
          cursor
          node {
            id
            compareAtPriceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
              }
            }
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
                  availableForSale
                  sku
                }
              }
            }
            priceRange {
              maxVariantPrice {
                amount
                currencyCode
              }
              minVariantPrice {
                amount
                currencyCode
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
