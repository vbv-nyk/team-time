"use client";
import TeamCard from "../Components/Team-Card/TeamCard";
import Navbar from "../Components/Navbar/Navbar";
import { getTeams } from "../services/quries";
import { useQuery } from "@apollo/client";
import { teamInterface, teamsInterface } from "../services/types";
import { useState } from "react";

export default function Page() {
  const {
    loading,
    error,
    data: teamsData,
  } = useQuery<teamsInterface>(getTeams);

  const [viewStyle, setViewStyle] = useState("list");

  function changeStyle() {
    viewStyle === "list" ? setViewStyle("grid") : setViewStyle("list");
  }

  if (loading) return <div>Loading...</div>;

  console.log(teamsData);
  const teams = teamsData?.teams.map((team: teamInterface) => (
    <TeamCard {...team} key={team.id} viewStyle={viewStyle} />
  ));

  return (
    <div className="p-4">
      <Navbar />

      <div className="mb-4 text-2xl font-bold text-center">Teams</div>
      <button onClick={changeStyle} className="px-3 py-2 border">
        {viewStyle}
      </button>
      {viewStyle === "grid" && (
        <div>
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
            {teams}
          </div>
        </div>
      )}
      {viewStyle === "list" && (
        <div className="flex flex-col gap-4">{teams}</div>
      )}
    </div>
  );
}
