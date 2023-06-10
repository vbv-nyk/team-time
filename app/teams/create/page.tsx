"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import TeamCard from "@/app/Components/Team-Card/TeamCard";
import { useMutation } from "@apollo/client";
import { FormEvent, useRef, useState } from "react";

export default function Page() {
  const tagFieldRef = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[]>([]);

  function createTeam(e: FormEvent) {
    e.preventDefault();
  }
  function addTag(e: FormEvent) {
    e.preventDefault();
    console.log(tagFieldRef);
    if (tagFieldRef.current?.value) {
      const tagFieldValue = tagFieldRef.current.value.toLowerCase();
      if (!tags.includes(tagFieldValue)) setTags([...tags, tagFieldValue]);
      tagFieldRef.current.value = "";
    }
  }

  function removeTag(e: FormEvent, index: number) {
    e.preventDefault();
    const newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  }
  const addedTags = tags.map((tag, i) => (
    <div className="flex items-center gap-1 px-1 py-2" key={i}>
      <div className="px-5 py-2 text-xs font-extrabold text-white bg-indigo-600 rounded-3xl">
        {tag}
      </div>
      <button
        onClick={(e) => removeTag(e, i)}
        className="px-4 py-2 text-xs font-extrabold text-white rounded-full bg-slate-500"
      >
        {"x"}
      </button>
    </div>
  ));

  return (
    <div>
      <Navbar />
      <div className="flex-row-reverse items-center justify-center gap-5 sm:flex">
        <form className="flex flex-col items-start gap-4 p-2">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <label htmlFor="team-name" className="text-xs font-semibold">
                Team Name
              </label>
              <input
                id="team-name"
                type="text"
                className="bg-transparent  min-w-[200px] border-b outline-none border-b-black"
              />
            </div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="team-title"
                className="text-xs font-semibold whitespace-nowrap"
              >
                Display Title
              </label>
              <input
                id="team-title"
                type="text"
                className="bg-transparent min-w-[200px] border-b outline-none border-b-black"
              />
            </div>
          </div>
          <div className="flex flex-col items-start self-start w-full gap-4">
            <div className="flex items-center gap-4">
              <label htmlFor="team-reqs" className="text-xs font-semibold">
                Add Tags
              </label>
              <input
                id="team-title"
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

            <div className="flex flex-wrap ">{addedTags}</div>
          </div>
        </form>
        <section className="flex flex-col items-center justify-center gap-2 m-4">
          <h1 className="text-xl font-semibold">Preview</h1>
          <TeamCard
            desc="ASDAS"
            id="asda"
            name="asda"
            img="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/uploads/2017/03/msteamshero_0.png?itok=Etuo8PEv"
            reqs={tags}
            viewStyle="card"
          />
        </section>
      </div>
    </div>
  );
}
