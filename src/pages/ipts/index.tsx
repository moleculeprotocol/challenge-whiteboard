import { gql, useQuery } from "@apollo/client";
import { Heading, VStack } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

const IPTOverview: NextPage = () => {
  const GET_IPTS = gql`
    query IPTs {
      ipts {
        id
        symbol
        ipnft {
          id
          tokenURI
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_IPTS);

  if (loading) return <p>Loading IPTs...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <VStack w="full">
      <Heading>IPTs</Heading>
      {data.ipts.map((ipt: any) => (
        <Link key={ipt.id} href={`/ipts/${ipt.id}`}>
          {ipt.symbol} ({ipt.ipnft.id})
        </Link>
      ))}
    </VStack>
  );
};

export default IPTOverview;
