import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";

interface teamCardInterface extends teamInterface {
  viewStyle: string;
  isEditing: boolean;
}

export default function TeamCard(props: teamCardInterface) {
  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: props.viewStyle === "list" ? "row" : "column",
  };

  function openFilePicker() {}

  const tags = props.reqs.map((req, i) => (
    <div key={i} className="px-3 py-1 bg-blue-800 rounded-full">
      {req}
    </div>
  ));
  return (
    <div
      style={containerStyle}
      className="items-center sm:w-[500px] w-full gap-4 py-2 break-all shadow-sm shadow-neutral-600"
    >
      <div className="flex items-center gap-2 text-sm">
        <h1 className="font-semibold">{props.name}: </h1>
        <div> Posted By {"Vaibhav Nayak"}</div>
      </div>
      <div>
        <p className="px-1 text-xl hyphens-auto"> {props.desc}</p>
      </div>
      {props.isEditing && (
        <label
          htmlFor="image-picker"
          className="relative self-end px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:cursor-pointer"
        >
          Edit
          <input type="file" id="image-picker" className="hidden" />
        </label>
      )}
      <div>
        <Link href={`/teams/${props.name}`}>
          <Image
            src={props.img}
            height={500}
            width={500}
            className="w-full mt-[-50px]"
            alt="Image For Your Project/Team"
          />
        </Link>
        <div className="flex flex-wrap justify-center w-full gap-3 mt-2 text-xs font-bold text-white">
          {tags}
        </div>
      </div>
    </div>
  );
}
