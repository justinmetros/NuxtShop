import { gql } from "graphql-tag";

export const productByHandle = gql`
  query product($handle: String!) {
    productByHandle(handle: $handle) {
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
      descriptionHtml
      handle
      id
      images(first: 20) {
        edges {
          cursor
          node {
            altText
            id
            transformedSrc(maxWidth: 2048)
          }
        }
      }
      onlineStoreUrl
      options(first: 3) {
        id
        name
        values
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      productType
      tags
      title
      variants(first: 100) {
        edges {
          cursor
          node {
            availableForSale
            id
            priceV2 {
              amount
              currencyCode
            }
            quantityAvailable
            selectedOptions {
              name
              value
            }
            sku
            title
          }
        }
      }
      vendor
    }
  }
`;
