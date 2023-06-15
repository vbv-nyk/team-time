import { RootState } from "@/app/redux/store";
import { updateAchieveReq } from "@/app/redux/teamSlice";
import { loremIpsum } from "@/app/services/constants";
import { AnyAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

interface headerTextAreaInterface {
  header: string;
  onChangeFunction: Function;
}

export default function HeaderTextArea(props: headerTextAreaInterface) {
  const { placeholder } = useSelector((state: RootState) => state.teamSlice);
  const { header, onChangeFunction } = props;
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full col-start-2 col-end-4 gap-4">
      <h1 className="text-xl font-medium text-avani-mheader ">{header}</h1>
      <textarea
        className="bg-transparent border-none min-h-[100px] outline-none rounded-sm text-[#4626ff] resize-none "
        placeholder={loremIpsum}
        onChange={(e) => dispatch(onChangeFunction(e.target.value))}
        value={placeholder[header]}
      />
    </div>
  );
}
