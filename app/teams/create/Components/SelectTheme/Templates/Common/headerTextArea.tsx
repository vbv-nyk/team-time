import { RootState } from "@/app/redux/store";
import { loremIpsum } from "@/app/services/constants";
import { headerTextAreaInterface } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderTextArea(props: headerTextAreaInterface) {
  const { placeholder } = useSelector((state: RootState) => state.teamSlice);
  const { editing } = useSelector((state: RootState) => state.themeSlice);
  const { header, onChangeFunction, headerColor, paragraphColor } = props;
  const headerStyle = {
    color: headerColor,
  };
  const paragraphStyle = {
    color: paragraphColor,
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full gap-4">
      {((!editing && placeholder[header]) || editing) && (
        <h1 style={headerStyle} className="text-xl font-bold tracking-wider ">
          {header}
        </h1>
      )}
      {editing && (
        <textarea
          style={paragraphStyle}
          className="bg-transparent border-none min-h-[80px]  outline-none rounded-sm text-[#4626ff] h-max tracking-wide resize-none "
          placeholder={loremIpsum}
          onChange={(e) => dispatch(onChangeFunction(e.target.value))}
          value={placeholder[header]}
        />
      )}
      {!editing && placeholder[header] && (
        <p
          style={paragraphStyle}
          className="w-full tracking-wide break-words whitespace-pre-line bg-transparent border-none rounded-sm outline-none resize-none h-max"
        >
          {placeholder[header].trim()}
        </p>
      )}
    </div>
  );
}
