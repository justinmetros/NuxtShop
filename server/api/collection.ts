import { useQuery } from "h3";
import { apolloClient } from "../apolloClient";
import { collectionByHandle } from "~/apollo/queries/collectionByHandle";

export default async (req) => {
  const { handle } = useQuery(req);
  try {
    const { data } = await apolloClient.query({
      query: collectionByHandle,
      variables: {
        handle,
      },
    });
    if (!data.collectionByHandle) {
      console.log("error");
      throw new Error("getCollectionByHandle: collection not found");
    }
    return data.collectionByHandle;
  } catch (e) {
    return e;
  } finally {
  }
};
