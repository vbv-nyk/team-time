import TeamDetails from "../../Components/TeamDetails/TeamDetails";

export default function Page({ params }: { params: { name: string } }) {
  const { name } = params;
  return (
    <TeamDetails
      name={name}
      description={"This is the first team ever created on the platform"}
      requirements={[
        "UI/UX Designer",
        "Web Develloper",
        "Machine learning engineer",
      ]}
    />
  );
}
