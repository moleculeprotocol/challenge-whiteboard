import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
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
        <Flex direction="column">
          <Heading>IPT #{iptId}</Heading>
          <Text>Locked Token Contract: 0x</Text>
        </Flex>
        <Flex direction="column" gap={6}>
          <FormControl>
            <FormLabel>Lock Amount</FormLabel>
            <InputGroup>
              <Input placeholder="e.g. 1.5" />
              <InputRightAddon>
                <Text fontSize="xs">Symbol</Text>
              </InputRightAddon>
            </InputGroup>
            <FormHelperText>Your balance: ?</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Beneficiary</FormLabel>
            <InputGroup>
              <Input placeholder="0xf00ba7" />
              <InputRightAddon>
                <Text fontSize="xs">their eth balance</Text>
              </InputRightAddon>
            </InputGroup>
            <FormHelperText>Lock amount for this account</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Lock until</FormLabel>
            <InputGroup>
              <Input placeholder="2023-08-31 15:00" />
            </InputGroup>
          </FormControl>
          <Button colorScheme="purple" isDisabled>
            Lock!
          </Button>
        </Flex>
      </VStack>
    </form>
  );
};

export default IPTPage;
