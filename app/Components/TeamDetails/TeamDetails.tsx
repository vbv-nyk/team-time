import Navbar from "../Navbar/Navbar";

interface TeamDetails {
  name: String;
  description: String;
  requirements: String[];
}
export default function TeamDetails(props: TeamDetails) {
  const requirementTags = props.requirements.map((req, i) => (
    <div key={i}>{req}</div>
  ));
  return (
    <div>
      <Navbar />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div className="flex flex-row gap-2">{requirementTags}</div>
    </div>
  );
}
