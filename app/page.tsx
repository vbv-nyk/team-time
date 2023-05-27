import CreateTeam from "./Components/Forms/CreateTeam";
import Navbar from "./Components/Navbar/Navbar";
import TeamCard from "./Components/Team-Card/TeamCard";
import TeamDetails from "./Components/Team-Details/TeamDetails";
import TeamsContainer from "./Components/Teams-Container/TeamsContainer";

export default function Home() {
  return (
    <>
      <TeamDetails
        name={"Team 1"}
        description={"This is the first team ever created on the platform"}
        requirements={[
          "UI/UX Designer",
          "Web Developer",
          "Machine learning engineer",
        ]}
      />
    </>
  );
}
