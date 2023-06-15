import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function TeamCreatedBy() {
  const { name, title, createdBy } = useSelector(
    (state: RootState) => state.teamSlice
  );

  return (
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
  );
}
