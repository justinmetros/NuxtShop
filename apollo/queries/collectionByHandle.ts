import { gql } from "graphql-tag";

export const collectionByHandle = gql`
  query collection(
    $handle: String!
    $numProducts: Int
    $sortKey: ProductCollectionSortKeys
    $reverse: Boolean
  ) {
    collectionByHandle(handle: $handle) {
      description
      descriptionHtml
      handle
      id
      image {
        altText
        height
        transformedSrc(maxWidth: 3000)
        width
      }
      title
      products(first: $numProducts, sortKey: $sortKey, reverse: $reverse) {
        edges {
          cursor
          node {
            availableForSale
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
            handle
            id
            images(first: 2) {
              edges {
                node {
                  height
                  id
                  url
                  width
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
            productType
            tags
            title
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
