import { teamInterface } from "@/app/services/types";
import Image from "next/image";
import ElementsPanel from "../../ElementsPanel";
import ThemeControls from "../../ThemeControls";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";

export default function Avani() {
  const { name, title, createdBy, img, reqs, placeholder } = useSelector(
    (state: RootState) => state.teamSlice
  );
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col gap-8 p-1 rounded-lg sm:p-4 bg-avani-background">
      <div className="flex flex-col items-center gap-1">
        <div className="text-3xl font-bold text-center text-avani-lheader">
          {name}
        </div>
        <div className="flex flex-col gap-2 font-medium">
          <div className="text-2xl text-center text-avani-mheader">{title}</div>
          <div className="self-end text-xs font-light text-avani-paragraph">
            By {createdBy || "Vaibhav Nayak"}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center grid-cols-3 gap-8 lg:grid">
        <Image
          src={
            img ||
            `https://storage.googleapis.com/pai-images/b5db887d057b40178ca2bbdf8cb7510d.png`
          }
          height={2000}
          width={2000}
          className="col-start-1 "
          alt="Image describing project"
        />
        <div className="flex flex-col w-full col-start-2 col-end-4 gap-4">
          <h1 className="text-lg font-medium text-avani-mheader ">
            What We&apos;re Trying To Achieve
          </h1>
          <textarea
            className="bg-transparent border-none min-h-[100px] outline-none rounded-sm text-[#4626ff] resize-none placeholder-[#4726ff9d]"
            placeholder={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            }
            onChange={(e) => dispatch(updateAchieveReq(e.target.value))}
            value={placeholder["What Are We Trying To Achieve"]}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium text-avani-mheader ">
          How To Contact Us
        </h1>
        <textarea
          placeholder={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          }
          value={placeholder["How To Contact Us"]}
          onChange={(e) => dispatch(updateContactReq(e.target.value))}
          className="w-full text-[#4626ff] resize-none placeholder-[#4726ff9d]  bg-transparent min-h-[100px] outline-none "
        />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-lg font-medium text-avani-mheader ">
          Sources for More Information
        </h1>
        <textarea
          placeholder={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          }
          onChange={(e) => dispatch(updateSources(e.target.value))}
          value={placeholder["Sources for More Information"]}
          className="w-full text-[#4626ff] resize-none placeholder-[#4726ff9d] bg-transparent min-h-[100px] outline-none "
        />
      </div>
    </div>
  );
}
