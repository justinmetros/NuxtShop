import { writeFileSync } from "fs";
import fetch from "node-fetch";
import { config } from "dotenv";

config();

/*
 * Create framentTypes file so gql can understand relationships with Unions and Interfaces
 * https://github.com/nuxt-community/apollo-module/issues/70
 * https://blog.commutatus.com/whats-going-on-with-the-heuristic-fragment-matcher-in-graphql-apollo-client-e721075e92be
 */

fetch(process.env.SHOPIFY_STOREFRONT_ENDPOINT, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Shopify-Storefront-Access-Token":
      process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },
  credentials: "omit",
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      (type) => type.possibleTypes !== null
    );
    result.data.__schema.types = filteredData;
    writeFileSync(
      "./apollo/fragmentTypes.json",
      JSON.stringify(result.data),
      (err) => {
        if (err) {
          console.error("Error writing fragmentTypes file", err);
        } else {
          console.log("Fragment types successfully extracted!");
        }
      }
    );
  });
