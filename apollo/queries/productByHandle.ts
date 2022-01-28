import { gql } from "graphql-tag";
import { productVariants } from "~/apollo/fragments/productVariants";

export const productByHandle = gql`
  ${productVariants}
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
            height
            id
            url
            width
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
      ...productVariants
      vendor
    }
  }
`;
