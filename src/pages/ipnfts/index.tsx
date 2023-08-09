import { gql, useQuery } from "@apollo/client";
import { Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";

const Page: NextPage = () => {
  const GET_IPNFTS = gql`
    query IPNFTs {
      ipnfts {
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_IPNFTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <VStack>
      <Heading>IPNFTs</Heading>
      {data.ipnfts.map((i: any) => (
        <p key={i.id}>{i.id}</p>
      ))}
    </VStack>
  );
};

export default Page;
