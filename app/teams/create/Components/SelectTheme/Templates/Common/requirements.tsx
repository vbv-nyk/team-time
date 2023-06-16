import { RootState } from "@/app/redux/store";
import { updateReqDesc } from "@/app/redux/teamSlice";
import { loremIpsum } from "@/app/services/constants";
import { requirementsColors } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";

export default function Requirements(props: requirementsColors) {
  const { reqs } = useSelector((state: RootState) => state.teamSlice);
  const { reqDescColor, reqNameColor } = props;
  function capitaliseReq(reqName: string) {
    return reqName
      .split(" ")
      .map(
        (reqSubName) => reqSubName[0].toUpperCase() + reqSubName.substring(1)
      )
      .join(" ");
  }
  const reqNameStyle = {
    color: reqNameColor,
  };

  const reqDescStyle = {
    color: reqDescColor,
  };

  const dispatch = useDispatch();

  const reqSection = reqs.map((req) => (
    <div key={req.name} className="flex flex-col gap-1">
      <div style={reqNameStyle} className="font-semibold">
        {capitaliseReq(req.name)}
      </div>
      <textarea
        className="bg-transparent border-none min-h-[100px] outline-none rounded-sm w-full resize-none "
        style={reqDescStyle}
        placeholder={loremIpsum}
        onChange={(e) =>
          dispatch(updateReqDesc({ name: req.name, desc: e.target.value }))
        }
        value={req.desc}
      />
    </div>
  ));
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">{reqSection}</div>
    </div>
  );
}
