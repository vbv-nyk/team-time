"use client";
import Navbar from "./Components/Navbar/Navbar";
import { useQuery, gql } from "@apollo/client";
import { getTeams } from "./services/queries";

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
