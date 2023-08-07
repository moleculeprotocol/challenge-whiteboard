"use client";
import { gql, useQuery } from "@apollo/client";
import { ApolloProvider } from "@/lib/apollo/ApolloProvider";

export default function Page() {
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
    <section>
      <h1>IPNFTs</h1>
      {data.ipnfts.map((i: any) => (
        <p key={i.id}>{i.id}</p>
      ))}
    </section>
  );
}
