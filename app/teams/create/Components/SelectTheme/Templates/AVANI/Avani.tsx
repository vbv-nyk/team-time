import { teamInterface } from "@/app/services/types";
import Image from "next/image";

export default function Avani(props: teamInterface) {
  const { name, title, createdBy, img, reqs } = props;
  return (
    <div className="flex flex-col gap-5 bg-[#e6f0e8] rounded-lg p-10">
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl  text-[#4626ff] font-bold">{name}</div>
        <div className="flex flex-col font-medium">
          <div className="text-2xl text-[#800000] text-center">{title}</div>
          <div className="self-end text-xs text-[#7d5656] font-light">
            By {createdBy}
          </div>
        </div>
      </div>
      <div className="image-section">
        <Image
          src={img}
          height={2000}
          width={2000}
          alt="Image describing project"
          className="w-full"
        />
      </div>
      <div className="flex gap-2">
        <button className="px-4 py-2 font-bold border-2 border-blue-600 hover:bg-blue-600 hover:border-transparent hover:text-white">
          Add Section
        </button>
        <button className="px-4 py-2 font-bold border-2 border-red-600 hover:bg-red-600 hover:border-transparent hover:text-white">
          Save As Draft
        </button>
        <button className="px-4 py-2 font-bold border-2 border-green-600 hover:bg-green-600 hover:border-transparent hover:text-white">
          Create Team
        </button>
      </div>
    </div>
  );
}
