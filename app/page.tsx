"use client";
import Navbar from "./Components/Navbar/Navbar";
import { useQuery, gql } from "@apollo/client";

export default function Home() {
  // const client = ...
  const GET_LOCATIONS = gql`
    query Teams {
      teams {
        name
        desc
        reqs
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(loading, error, data);
  return (
    <>
      <Navbar />
    </>
  );
}
