import { ApolloProvider } from "@/lib/apollo/ApolloProvider";
import { CacheProvider } from "@chakra-ui/next-js";
import {
  ChakraProvider,
  Container,
  Flex,
  HStack,
  extendTheme,
} from "@chakra-ui/react";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";

import {
  ConnectButton,
  RainbowKitProvider,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";

import { goerli } from "@wagmi/core/chains";
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { WagmiConfig } from "wagmi";

import Link from "next/link";
import { configureChains, createConfig, mainnet, sepolia } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    config: {
      initialColorMode: "dark",
      //useSystemColorMode: true,
    },
  });

  const { chains, publicClient, webSocketPublicClient } = configureChains(
    [mainnet, goerli, sepolia],
    [
      alchemyProvider({
        apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string,
      }),
      publicProvider(),
    ]
  );

  const { connectors } = getDefaultWallets({
    appName: "Mol whiteboard",
    projectId: process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID as string,
    chains,
  });

  const wagmiConfig = createConfig({
    connectors,
    publicClient,
  });

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <ApolloProvider>
              <Container maxW="full">
                <HStack justify="center" w="full" justifyContent="space-evenly">
                  <Flex>Logo</Flex>
                  <Flex justify="space-between" gap={2}>
                    <Link href="/ipnfts">IPNFTs</Link>
                    <Link href="/value">Trade</Link>
                  </Flex>
                  <ConnectButton />
                </HStack>
              </Container>
              <Container maxW="container.lg" mt={6}>
                <Component {...pageProps} />
              </Container>
            </ApolloProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  );
}
