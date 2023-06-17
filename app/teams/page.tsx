"use client";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Navbar from "../Components/Navbars/Navbar";
import TeamCard from "../Components/Team-Card/TeamCard";
import { getTeams } from "../services/queries";
import { teamInterface, teamsInterface } from "../services/types";

export default function Page() {
  const {
    loading,
    error,
    data: teamsData,
  } = useQuery<teamsInterface>(getTeams);

  const [viewStyle, setViewStyle] = useState("card");

  function changeStyle() {
    // viewStyle === "list" ? setViewStyle("card") : setViewStyle("list");
  }

  if (loading) return <div>Loading...</div>;

  const teams = teamsData?.teams.map((team: teamInterface) => (
    <TeamCard key={team.id} />
  ));

  return (
    <div className="">
      <Navbar />
      <div className="p-2">
        <div className="mb-4 text-lg font-bold">Teams</div>
        {viewStyle === "card" && (
          <div>
            <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-5">
              {teams}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
