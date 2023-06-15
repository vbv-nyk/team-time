import { RootState } from "@/app/redux/store";
import { updateReqDesc } from "@/app/redux/teamSlice";
import { requirementsColors } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";

export default function Requirements(props: requirementsColors) {
  const { reqs } = useSelector((state: RootState) => state.teamSlice);
  function capitaliseReq(reqName: string) {
    return reqName
      .split(" ")
      .map(
        (reqSubName) => reqSubName[0].toUpperCase() + reqSubName.substring(1)
      )
      .join(" ");
  }
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  const dispatch = useDispatch();

  const reqSection = reqs.map((req) => (
    <div key={req.name} className="flex flex-col gap-1">
      <div className="font-bold">{capitaliseReq(req.name)}</div>
      <textarea
        className="bg-transparent border-none min-h-[100px] outline-none rounded-sm w-full resize-none "
        placeholder={loremIpsum}
        onChange={(e) =>
          dispatch(updateReqDesc({ name: req.name, desc: e.target.value }))
        }
        value={req.desc}
      />
    </div>
  ));
  return <>{reqSection}</>;
}
