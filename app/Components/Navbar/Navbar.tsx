import Link from "next/link";

interface navbarInterface {
  backgroundColor?: string;
}

export default function Navbar(props: navbarInterface) {
  return (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      className="flex items-center justify-between py-2 shadow-sm"
    >
      <Link href="/" id="teams">
        <h1 id="Logo" className="font-bold text-md">
          Team Time
        </h1>
      </Link>
      <div className="flex items-center gap-2 text-sm">
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
  );
}
