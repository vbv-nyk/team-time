import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import Link from "next/link";

export default function TeamCard(props: teamInterface) {
  return (
    <div className="flex flex-col items-center w-full gap-2 break-all">
      <Image
        src={props.img}
        width={250}
        height={250}
        alt="Image For Your Project/Team"
      />
      <h1>{props.name}</h1>
      <p>{props.desc}</p>
      <Link href={`/teams/${props.name}`}>
        <button className="p-2 border">View Details</button>
      </Link>
    </div>
  );
}
