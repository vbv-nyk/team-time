"use client";
import { FormEvent } from "react";

export default function CreateTeam() {
  function createTeam(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="flex flex-col items-center gap-2 p-2 w-fit">
        <div>
          <h1>Team Name</h1>
          <input className="border" />
        </div>
        <div>
          <h1>Team Description</h1>
          <textarea className="border" />
        </div>
        <div>
          <h1>Requirements</h1>
          <input className="border" />
        </div>
        <button className="p-2 border" onClick={createTeam}>
          Create Team
        </button>
      </form>
    </div>
  );
}
