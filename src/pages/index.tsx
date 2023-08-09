import { Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <VStack>
      <Text>IPNFTs</Text>
      <Link href="/overview">IPNFT Overview</Link>
    </VStack>
  );
}
