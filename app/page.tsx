"use client";
import Navbar from "./Components/Navbar/Navbar";
import { useQuery, gql } from "@apollo/client";
import { getTeams } from "./services/quries";

export default function Home() {
  return (
    <>
      <Navbar />
    </>
  );
}
