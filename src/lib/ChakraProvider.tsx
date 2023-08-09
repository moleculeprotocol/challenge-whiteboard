import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider as ChakraChakraProvider } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraChakraProvider>{children}</ChakraChakraProvider>
    </CacheProvider>
  );
}
