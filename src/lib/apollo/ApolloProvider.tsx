"use client";

import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from "@apollo/client";

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/elmariachi111/schrotti-galoppi-schmacko-1",
    cache: new InMemoryCache(),
  });

  return <Provider client={client}>{children}</Provider>;
};
