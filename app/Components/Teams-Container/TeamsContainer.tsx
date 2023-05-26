import TeamCard from "../Team-Card/TeamCard";

export default function TeamsContainer() {
  const teamsData = [{
    imageUrl:"/TeamWork.png",
    name:"Team Name",
    description:"This team does so and so and so so lkasdjlaks",
  },
  {
    imageUrl:"/TeamWork.png",
    name:"Team Name",
    description:"This team does so and so and so so lkasdjlaks",
  },]

  const teams = teamsData.map((team,index)=><TeamCard {...team} key={index}/>)

  return (
    <div className="p-10">
      <div className="text-2xl font-bold">Teams</div>
      <div className="grid grid-cols-4 gap-3">
        {teams}
      </div>
    </div>
  );
}
