// Use to make API Gql call to shopify
import { useApolloClient } from "@vue/apollo-composable";
import { productByHandle } from "~~/apollo/queries/productByHandle";

async function getProductByHandle(handle: string | string[]) {
  // start loading
  try {
    const { resolveClient } = useApolloClient();
    const apolloClient = resolveClient();
    const { data } = await apolloClient.query({
      query: productByHandle,
      variables: {
        handle,
      },
    });
    console.log(data.productByHandle);
    if (!data.productByHandle) {
      console.log("error");
      throw new Error("getProductByHandle: product not found");
    }
    return data.productByHandle;
  } catch (e) {
    return e;
  } finally {
    // stop loading
  }
}

export default async (req, res) => {
  console.log(req);
  // const data = await getProductByHandle()
  return true;
  // return {
  //   // data,
  // };
};
