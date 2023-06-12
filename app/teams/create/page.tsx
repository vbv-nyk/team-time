"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import TeamCard from "@/app/Components/Team-Card/TeamCard";
import { useMutation } from "@apollo/client";
import { FormEvent, useRef, useState } from "react";
import AddedTags from "./Components/TagComponents/addedTags";
import TagsComponent from "./Components/TagComponents/tagsComponent";
import SelectTheme from "./Components/SelectTheme/SelectTheme";

export default function Page() {
  const [tags, setTags] = useState<string[]>([]);
  const [teamName, setTeamName] = useState("");
  const [teamTitle, setTeamTitle] = useState("");
  const [editorState, setEditorState] = useState();
  const [step, setStep] = useState(1);

  function createTeam(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="flex flex-col justify-center gap-1">
      <Navbar />
      {step === 1 && (
        <div className="flex flex-col items-center justify-end gap-1 sm:flex-row-reverse sm:flex">
          <form className="flex flex-col items-start gap-4 p-2 grow-0">
            <div className="text-lg font-light">Enter Team Details</div>
            <div className="flex flex-wrap items-center justify-start gap-4 sm:justify-normal ">
              <div className="flex items-center gap-3 ">
                <label
                  htmlFor="team-name"
                  className="text-xs font-semibold w-max"
                >
                  Team Name
                </label>
                <input
                  id="team-name"
                  type="text"
                  onInput={(e: any) => setTeamName(e.target.value)}
                  maxLength={20}
                  className="bg-transparent border-b outline-none border-b-black"
                />
              </div>
              <div className="flex items-center gap-2">
                <label
                  htmlFor="team-title"
                  className="w-full text-xs font-semibold whitespace-nowrap"
                >
                  Display Title
                </label>
                <input
                  id="team-title"
                  type="text"
                  onInput={(e: any) => setTeamTitle(e.target.value)}
                  className="bg-transparent border-b outline-none border-b-black"
                  maxLength={50}
                />
              </div>
              <TagsComponent tags={tags} setTags={setTags} />
            </div>
            <AddedTags tags={tags} setTags={setTags} />
          </form>
          <section className="flex flex-col justify-center gap-2 p-2 sm:m-4 ">
            <h1 className="text-lg font-light">Preview</h1>
            <TeamCard
              isEditing={true}
              createdBy={"Vaibhav Nayak"}
              desc={teamTitle}
              id="asda"
              name={teamName}
              img="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2017/03/msteamshero_0.png?itok=Etuo8PEv"
              reqs={tags}
              viewStyle="card"
            />
            <button
              className="px-4 py-2 text-xs font-extrabold text-white bg-green-700 sm:self-end"
              onClick={() => setStep(2)}
            >
              Next
            </button>
          </section>
        </div>
      )}
      {step === 2 && (
        <SelectTheme
          createdBy={"Vaibhav Nayak"}
          desc={teamTitle}
          id="asda"
          name={teamName}
          img="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2017/03/msteamshero_0.png?itok=Etuo8PEv"
          reqs={tags}
        />
      )}
    </div>
  );
}
