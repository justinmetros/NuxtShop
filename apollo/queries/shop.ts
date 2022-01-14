import gql from "graphql-tag";

export const shopQuery = gql`
  query shop {
    shop {
      description
      moneyFormat
    }
    localization {
      country {
        currency {
          isoCode
          name
          symbol
        }
        isoCode
        name
      }
    }
  }
`;
