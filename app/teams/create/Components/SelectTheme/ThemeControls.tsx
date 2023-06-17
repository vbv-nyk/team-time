import { RootState } from "@/app/redux/store";
import { setEditing } from "@/app/redux/themeSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeControls() {
  const { currentThemeColors } = useSelector(
    (state: RootState) => state.themeSlice
  );
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap items-center content-around justify-center col-start-1 gap-3 text-base">
      <div className="flex gap-2">
        <button
          style={{ color: currentThemeColors.mediumHeader }}
          className="px-4 py-1 font-extrabold hover:cursor-pointer hover:border-transparent"
        >
          Save As Draft
        </button>
        <button
          style={{ color: currentThemeColors.mediumHeader }}
          onClick={() => dispatch(setEditing(false))}
          className="px-4 py-1 font-extrabold hover:cursor-pointer hover:border-transparent"
        >
          Preview
        </button>
      </div>
      <div>
        <Link href={"/teams/create/"}>
          <label
            style={{ color: currentThemeColors.mediumHeader }}
            className="px-4 py-1 font-extrabold hover:cursor-pointer hover:border-transparent"
          >
            Go Back
          </label>
        </Link>
      </div>
    </div>
  );
}
