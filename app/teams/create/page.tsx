"use client";
import Navbar from "@/app/Components/Navbar/Navbar";
import { useMutation } from "@apollo/client";
import { FormEvent, MutableRefObject, useRef, useState } from "react";

export default function Page() {
  function createTeam(e: FormEvent) {
    e.preventDefault();
  }
  function addTag(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <Navbar />
      <form className="flex flex-col items-center justify-center w-full gap-2 p-2">
        <div className="flex flex-row flex-wrap items-center gap-4">
          <div className="flex items-center w-full gap-2">
            <label htmlFor="team-name" className="text-xs font-semibold">
              Team Name
            </label>
            <input
              id="team-name"
              type="text"
              className="bg-transparent  min-w-[200px] border-b outline-none border-b-black"
            />
          </div>
          <div className="flex items-center w-full gap-2">
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
        <div className="flex items-center">
          <label htmlFor="team-reqs" className="text-xs font-semibold">
            Add tags
          </label>
          <button
            id="team-reqs"
            className="px-2 font-bold rounded-full"
            onClick={addTag}
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
}
