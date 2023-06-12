"use client";
import TeamCard from "../Components/Team-Card/TeamCard";
import Navbar from "../Components/Navbar/Navbar";
import { getTeams } from "../services/queries";
import { useQuery } from "@apollo/client";
import { teamInterface, teamsInterface } from "../services/types";
import { useState } from "react";

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

  console.log(teamsData);
  const teams = teamsData?.teams.map((team: teamInterface) => (
    <TeamCard {...team} key={team.id} viewStyle={viewStyle} isEditing={false} />
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
