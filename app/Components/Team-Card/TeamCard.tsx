import Image from "next/image";

interface teamData{
  imageUrl: string,
  name: string,
  description: string,
}

export default function TeamCard(props:teamData) {
  return (
    <div className="flex flex-col items-center w-full break-all">
      <Image
        src={props.imageUrl}
        width={250}
        height={250}
        alt="Image For Your Project/Team"
      />
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button className="p-2 bg-gray-500 border">View Details</button>
    </div>
  );
}
