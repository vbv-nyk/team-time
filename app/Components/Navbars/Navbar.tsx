import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md">
      <Link href="/" id="teams">
        <h1 id="Logo" className="text-2xl font-bold">
          Team Time
        </h1>
      </Link>
      <div className="flex items-center gap-2 text-sm">
        <a href="#" id="about">
          About
        </a>
        <Link href="/teams" id="teams">
          <div>Teams</div>
        </Link>
        <Link href={`/teams/create`}>
          <button className="p-2 font-bold text-white bg-blue-600 border">
            Create
          </button>
        </Link>
      </div>
    </div>
  );
}
