"use client";
import TeamCard from "../Components/Team-Card/TeamCard";
import Navbar from "../Components/Navbar/Navbar";
import { getTeams } from "../services/queries";
import { useQuery } from "@apollo/client";
import { teamInterface, teamsInterface } from "../services/types";

export default function Page() {
  const {
    loading,
    error,
    data: teamsData,
  } = useQuery<teamsInterface>(getTeams);

  if (loading) return <div>Loading...</div>;

  console.log(teamsData);
  const teams = teamsData?.teams.map((team: teamInterface) => (
    <TeamCard {...team} key={team.id} />
  ));

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div className="text-2xl font-bold">Teams</div>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
          {teams}
        </div>
      </div>
    </>
  );
}
