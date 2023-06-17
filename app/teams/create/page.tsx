"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import TeamCard from "@/app/Components/Team-Card/TeamCard";
import { FormEvent, useState } from "react";
import AddedTags from "./Components/TagComponents/addedTags";
import TagsComponent from "./Components/TagComponents/tagsComponent";
import SelectTheme from "./Components/SelectTheme/SelectTheme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { updateName, updateTitle } from "@/app/redux/teamSlice";
import { setEditing } from "@/app/redux/themeSlice";

export default function Page() {
  const { name, title } = useSelector((state: RootState) => state.teamSlice);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);

  function createTeam(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center ">
      <Navbar />
      {step === 1 && (
        <div className="flex flex-col items-center justify-end gap-1 sm:flex-row-reverse sm:flex">
          <form className="flex flex-col items-start gap-4 p-2 grow-0">
            <div className="text-lg font-light">Enter Team Details</div>
            <div className="flex flex-wrap items-center justify-start gap-4 sm:justify-normal ">
              <div className="flex flex-wrap items-center gap-3 ">
                <label
                  htmlFor="team-name"
                  className="text-xs font-semibold w-max"
                >
                  Team Name
                </label>
                <input
                  id="team-name"
                  type="text"
                  value={name}
                  onInput={(e: any) => dispatch(updateName(e.target.value))}
                  maxLength={20}
                  className="bg-transparent border-b outline-none border-b-black"
                />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <label
                  htmlFor="team-title"
                  className="text-xs font-semibold whitespace-nowrap"
                >
                  Display Title
                </label>
                <input
                  id="team-title"
                  value={title}
                  type="text"
                  onInput={(e: any) => dispatch(updateTitle(e.target.value))}
                  className="bg-transparent border-b outline-none border-b-black"
                  maxLength={50}
                />
              </div>
              <TagsComponent />
            </div>
            <AddedTags />
          </form>
          <section className="flex flex-col justify-center gap-2 p-2 sm:m-4 ">
            <h1 className="text-lg font-light text-center">Preview</h1>
            <TeamCard />
            <button
              className="px-4 py-2 text-xs font-extrabold text-white bg-green-700 sm:self-end"
              onClick={() => {
                dispatch(setEditing(true));
                setStep(2);
              }}
            >
              Next
            </button>
          </section>
        </div>
      )}
      {step === 2 && <SelectTheme setStep={setStep} />}
    </div>
  );
}
