"use client";
import { FormEvent } from "react";

export default function Page() {
  function createTeam(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <form className="flex flex-col items-start gap-2 p-2 w-fit">
        <div>
          <h1>Team Name</h1>
          <input className="p-4 border" max={36} />
        </div>
        <div>
          <h1>Team Description</h1>
          <textarea
            className="p-4 border resize-none"
            rows={10}
            cols={80}
            maxLength={5000}
          />
        </div>
        <div>
          <h1>Requirements</h1>
          <input className="p-4 border" />
        </div>
        <button className="self-center p-4 border" onClick={createTeam}>
          Create Team
        </button>
      </form>
    </div>
  );
}
