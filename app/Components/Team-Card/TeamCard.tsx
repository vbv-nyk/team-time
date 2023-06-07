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

  const tags = props.reqs.map((req, i) => (
    <div key={i} className="px-3 py-1 bg-blue-800 rounded-full">
      {req}
    </div>
  ));
  return (
    <Link href={`/teams/${props.name}`}>
      <div
        style={containerStyle}
        className="items-center w-full gap-4 py-4 break-all shadow-sm shadow-neutral-600"
      >
        <div className="flex items-center gap-2 text-sm">
          <h1 className="font-semibold">{props.name}: </h1>
          <div> Posted By {"Vaibhav Nayak"}</div>
        </div>
        <div>
          <p className="px-1 text-xl hyphens-auto"> {props.desc}</p>
        </div>
        <Image
          src={props.img}
          height={300}
          width={300}
          className="w-full"
          alt="Image For Your Project/Team"
        />
        <div className="flex flex-wrap justify-center gap-3 overflow-x-scroll text-xs font-bold text-white">
          {tags}
        </div>
      </div>
    </Link>
  );
}
