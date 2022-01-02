import gql from "graphql-tag";

export const shopQuery = gql`
  query shop {
    shop {
      description
    }
  }
`;
