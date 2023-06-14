import { RootState } from "@/app/redux/store";
import { updateReqs } from "@/app/redux/teamSlice";
import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddedTags() {
  const { reqs } = useSelector((state: RootState) => state.teamSlice);
  const dispatch = useDispatch();
  function removeTag(e: FormEvent, index: number) {
    e.preventDefault();
    const newTags = reqs.filter((reqs, i) => i !== index);
    dispatch(updateReqs(newTags));
  }

  const addedTags = reqs.map((req, i) => (
    <div className="flex items-start px-1 py-2" key={i}>
      <div className="px-2 py-2 text-xs font-extrabold text-white bg-indigo-600 ">
        {req}
      </div>
      <button
        onClick={(e) => removeTag(e, i)}
        className="px-2 py-2 text-xs font-extrabold text-white bg-red-500"
      >
        {"x"}
      </button>
    </div>
  ));

  return (
    <div className="flex flex-col items-center self-start w-full gap-4 sm:items-start">
      <div className="flex flex-wrap">{addedTags}</div>
    </div>
  );
}
