"use client";
import Navbar from "./Components/Navbar/Navbar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function Home() {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });
  // const client = ...

  client
    .query({
      query: gql`
        query Teams {
          teams {
            name
            desc
            reqs
            id
          }
        }
      `,
    })
    .then((result) => console.log(result));

  return (
    <>
      <Navbar />
    </>
  );
}
