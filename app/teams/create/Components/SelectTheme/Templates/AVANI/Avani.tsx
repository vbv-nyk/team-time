import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import ElementsPanel from "../../ElementsPanel";
import ThemeControls from "../../ThemeControls";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function Avani() {
  const { name, title, createdBy, img, reqs } = useSelector(
    (state: RootState) => state.teamSlice
  );

  return (
    <div className="flex flex-col gap-5 bg-[#e6f0e8] rounded-lg p-10">
      <div className="flex flex-col items-center gap-1">
        <div className="text-4xl  text-[#4626ff] font-bold">{name}</div>
        <div className="flex flex-col font-medium">
          <div className="text-2xl text-[#800000] text-center">{title}</div>
          <div className="self-end text-xs text-[#592121] font-light">
            By {createdBy}
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src={
            img ||
            `https://storage.googleapis.com/pai-images/b5db887d057b40178ca2bbdf8cb7510d.png`
          }
          height={2000}
          width={2000}
          className="max-w-[300px] min-w-[250px]"
          alt="Image describing project"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-[#592121]  font-medium ">
          What We&apos;re Trying To Achieve
        </h1>
        <textarea className="w-full p-4 bg-transparent border-b-black border-2 min-h-[100px] outline-none rounded-sm" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-[#592121] font-medium ">
          How To Contact Us
        </h1>
        <textarea className="w-full p-4 bg-transparent border-b-black border-2 min-h-[100px] outline-none " />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-[#592121] font-medium ">
          Sources for More Information
        </h1>
        <textarea className="w-full p-4 bg-transparent border-b-black border-2 min-h-[100px] outline-none " />
      </div>
    </div>
  );
}
