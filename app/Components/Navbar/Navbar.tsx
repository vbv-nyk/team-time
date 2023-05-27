import Link from "next/link";

export default function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 id="Logo" className="text-3xl font-bold">
          Team Time
        </h1>
        <div className="flex items-center gap-2">
          <a href="#" id="about">
            About
          </a>
          <Link href="/teams" id="teams">
            Teams
          </Link>
          <Link href={`/teams/create`}>
            <button className="p-2 font-bold text-white bg-blue-600 border">
              Create
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
