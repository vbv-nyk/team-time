import { RootState } from "@/app/redux/store";
import {
  updateAchieveReq,
  updateContactReq,
  updateSources,
} from "@/app/redux/teamSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Clean() {
  const { name, title, createdBy, img, reqs, placeholder } = useSelector(
    (state: RootState) => state.teamSlice
  );
  const dispatch = useDispatch();
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
  return (
    <div className="flex flex-col gap-3 p-2">
      <div className="text-4xl font-extrabold tracking-wide text-gray-800">
        <div>{name}</div>
      </div>
      <div className="text-2xl font-extrabold tracking-wide text-gray-700">
        {title}
      </div>
      <div className="font-extrabold tracking-wide ">
        <div className="text-lg text-gray-600">How To Contact Us</div>
        {/* <div className="text-gray-500 text-md">
          {placeholder["How To Contact Us"] || loremIpsum}
        </div> */}
        <textarea
          className="w-full bg-transparent border-none min-h-[100px] outline-none rounded-sm text-gray-500 resize-none 600"
          placeholder={loremIpsum}
          onChange={(e) => dispatch(updateContactReq(e.target.value))}
          value={placeholder["How To Contact Us"]}
        />
      </div>
      <div className="font-extrabold tracking-wide text-gray-600">
        <div className="text-lg text-gray-600">
          Sources For More Information
        </div>
        {/* <div className="text-gray-500 text-md">
          {placeholder["Sources for More Information"] || loremIpsum}
        </div> */}
        <textarea
          className="w-full bg-transparent border-none min-h-[100px] outline-none rounded-sm text-gray-500 resize-none 600"
          placeholder={loremIpsum}
          onChange={(e) => dispatch(updateSources(e.target.value))}
          value={placeholder["Sources for More Information"]}
        />
      </div>
      <div className="font-extrabold tracking-wide text-gray-600 ">
        <div className="text-lg text-gray-600">
          What Are We Trying To Achieve
        </div>
        {/* <div className="tracking-wider text-gray-500 text-md">
          {placeholder["What Are We Trying To Achieve"] || loremIpsum}
        </div> */}
        <textarea
          className="w-full bg-transparent border-none min-h-[100px] outline-none rounded-sm text-gray-500 resize-none "
          placeholder={loremIpsum}
          onChange={(e) => dispatch(updateAchieveReq(e.target.value))}
          value={placeholder["What Are We Trying To Achieve"]}
        />
      </div>
    </div>
  );
}
