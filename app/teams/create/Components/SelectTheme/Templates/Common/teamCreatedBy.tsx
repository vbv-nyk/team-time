import { RootState } from "@/app/redux/store";
import { useSelector } from "react-redux";
import { teamCreatedByInterface } from "@/app/services/types";

export default function TeamCreatedBy(props: teamCreatedByInterface) {
  const { name, title, createdBy } = useSelector(
    (state: RootState) => state.teamSlice
  );

  const { createdByColor, teamNameColor, titleColor } = props;

  const teamNameStyle = {
    color: teamNameColor,
  };

  const createdByStyle = {
    color: createdByColor,
  };

  const titleStyle = {
    color: titleColor,
  };

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        style={teamNameStyle}
        className="text-3xl font-bold tracking-wide text-center"
      >
        {name}
      </div>
      <div className="flex flex-col gap-2 font-medium tracking-wide">
        <div className="text-2xl text-center" style={titleStyle}>
          {title}
        </div>
        <div style={createdByStyle} className="self-end text-xs font-semibold">
          By {createdBy || "Vaibhav Nayak"}
        </div>
      </div>
    </div>
  );
}
