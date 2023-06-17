import { RootState } from "@/app/redux/store";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const { currentThemeColors } = useSelector(
    (state: RootState) => state.themeSlice
  );

  return (
    <div
      style={{ background: currentThemeColors.background }}
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
