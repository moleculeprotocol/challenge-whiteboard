import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from "@apollo/client";

const IPNFT_SUBGRAPH_URL_GOERLI =
  "https://api.thegraph.com/subgraphs/name/elmariachi111/schrotti-galoppi-schmacko-1";

const client = new ApolloClient({
  uri: IPNFT_SUBGRAPH_URL_GOERLI,
  cache: new InMemoryCache(),
});

export const ApolloProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider client={client}>{children}</Provider>;
};
