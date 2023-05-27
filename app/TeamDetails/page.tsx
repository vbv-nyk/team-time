import TeamDetails from "./TeamDetails";

export default function Page() {
  return (
    <TeamDetails
      name={"Team 1"}
      description={"This is the first team ever created on the platform"}
      requirements={[
        "UI/UX Designer",
        "Web Developer",
        "Machine learning engineer",
      ]}
    />
  );
}
