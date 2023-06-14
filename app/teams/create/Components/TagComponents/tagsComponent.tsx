import { RootState } from "@/app/redux/store";
import teamSlice, { updateReqs } from "@/app/redux/teamSlice";
import { FormEvent, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TagsComponent() {
  const tagFieldRef = useRef<HTMLInputElement>(null);
  const { reqs } = useSelector((state: RootState) => state.teamSlice);
  const dispatch = useDispatch();

  function addTag(e: FormEvent) {
    e.preventDefault();
    if (reqs.length > 5) return;
    console.log(tagFieldRef);
    if (tagFieldRef.current?.value) {
      const tagFieldValue = tagFieldRef.current.value.toLowerCase();
      if (!reqs.includes(tagFieldValue))
        dispatch(updateReqs([...reqs, tagFieldValue]));
      tagFieldRef.current.value = "";
    }
  }

  return (
    <div className="flex items-center gap-4">
      <label htmlFor="team-reqs" className="text-xs font-semibold w-max">
        Add Tags
      </label>
      <input
        id="team-reqs"
        maxLength={30}
        type="text"
        ref={tagFieldRef}
        className="bg-transparent max-w-[200px] border-b outline-none border-b-black text-center"
      />
      <button
        id="team-reqs"
        className="px-2 py-1 font-bold rounded-full hover:text-white hover:bg-blue-800 bg-slate-300"
        onClick={addTag}
      >
        Add
      </button>
    </div>
  );
}
