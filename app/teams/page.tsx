import TeamCard from "../Components/Team-Card/TeamCard";
import Navbar from "../Components/Navbar/Navbar";

export default function Page() {
  const teamsData = [
    {
      imageUrl: "/TeamWork.png",
      name: "Team Name",
      description: "This team does so and so and so so lkasdjlaks",
    },
    {
      imageUrl: "/TeamWork.png",
      name: "Team Name",
      description: "This team does so and so and so so lkasdjlaks",
    },
  ];

  const teams = teamsData.map((team, index) => (
    <TeamCard {...team} key={index} />
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
