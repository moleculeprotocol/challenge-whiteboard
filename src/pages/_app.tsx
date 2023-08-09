import type { AppProps } from "next/app";
import { ApolloProvider } from "@/lib/apollo/ApolloProvider";

import { ChakraProvider } from "@/lib/ChakraProvider";
import { Container } from "@chakra-ui/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider>
      <ChakraProvider>
        <Container maxW="container.lg">
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </ApolloProvider>
  );
}
