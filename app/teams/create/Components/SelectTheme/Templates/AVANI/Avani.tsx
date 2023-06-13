import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import ElementsPanel from "../../ElementsPanel";
import ThemeControls from "../../ThemeControls";

export default function Avani(props: teamInterface) {
  const { name, title, createdBy, img, reqs } = props;

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
      <div className="image-section">
        <Image
          src={img}
          height={2000}
          width={2000}
          alt="Image describing project"
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        {/* <h1 className="text-lg text-[#592121] font-medium ">
          What We&apos;re Trying To Achieve
        </h1>
        <textarea className="w-full p-4 bg-transparent border-2 min-h-[100px] outline-none " /> */}
      </div>
      <div className="flex flex-col self-start gap-4 p-6 bg-white">
        <ElementsPanel />
        <ThemeControls />
      </div>
    </div>
  );
}
