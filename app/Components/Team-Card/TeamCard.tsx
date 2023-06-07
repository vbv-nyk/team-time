import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

interface teamCardInterface extends teamInterface {
  viewStyle: string;
}

export default function TeamCard(props: teamCardInterface) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: props.viewStyle === "list" ? "row" : "column",
  };

  return (
    <div style={containerStyle} className="items-center gap-2 break-all w-max">
      <Image
        src={props.img}
        width={250}
        height={250}
        alt="Image For Your Project/Team"
      />
      <div>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <Link href={`/teams/${props.name}`}>
          <button className="p-2 border">View Details</button>
        </Link>
      </div>
    </div>
  );
}
