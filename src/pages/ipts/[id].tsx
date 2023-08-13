import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const IPTPage = () => {
  const router = useRouter();

  const iptId = router.query.id as string;
  return (
    <form>
      <VStack gap={6}>
        <Heading>IPT #{iptId}</Heading>
        <Flex direction="row" gap={2}>
          <FormControl>
            <FormLabel>Buy Amount</FormLabel>
            <InputGroup>
              <Input placeholder="e.g. 1.5" />
              <InputRightAddon>
                <Text fontSize="xs">Symbol</Text>
              </InputRightAddon>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel>Stake Amount</FormLabel>
            <Input isDisabled value="0" />
          </FormControl>
        </Flex>
      </VStack>
    </form>
  );
};

export default IPTPage;
