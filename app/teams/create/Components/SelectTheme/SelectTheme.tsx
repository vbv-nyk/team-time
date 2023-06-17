import ThemeControls from "./ThemeControls";
import { ThemeOption } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentThemeColors } from "@/app/redux/themeSlice";
import { RootState } from "@/app/redux/store";
import {
  avaniColors,
  cleanColors,
  darkColors,
  vibrantColors,
} from "@/app/services/colors";
import StandardTemplate from "./Templates/Standard/Standard";
import ColorfulNavbar from "@/app/Components/Navbars/ColorfulNavbar.tsx";

export default function SelectTheme() {
  const { editing, currentTheme, currentThemeColors } = useSelector(
    (state: RootState) => state.themeSlice
  );

  const dispatch = useDispatch();
  function ThemeSelect(theme: ThemeOption) {
    switch (theme) {
      case ThemeOption.AVANI:
        dispatch(setCurrentThemeColors(avaniColors));
        break;
      case ThemeOption.DARK:
        dispatch(setCurrentThemeColors(darkColors));
        break;
      case ThemeOption.CLEAN:
        dispatch(setCurrentThemeColors(cleanColors));
        break;
      case ThemeOption.VIBRANT:
        dispatch(setCurrentThemeColors(vibrantColors));
        break;

      default:
        return null;
    }
  }

  return (
    <div>
      <ColorfulNavbar />
      <div
        style={{ background: currentThemeColors.background }}
        className="flex flex-col h-screen grid-cols-4 sm:grid"
      >
        {editing && (
          <div
            style={{ backgroundColor: currentThemeColors.background }}
            className="flex row-span-2 gap-5 py-5 bg-slate-50 md:flex-col"
          >
            {Object.values(ThemeOption).map((theme) => (
              <div
                key={theme}
                className="text-center hover:cursor-pointer"
                onClick={() => ThemeSelect(theme)}
                style={{ color: currentThemeColors.mediumHeader }}
              >
                {theme}
              </div>
            ))}
          </div>
        )}
        <div
          style={{ gridColumnStart: editing ? "2" : "1", gridColumnEnd: "-1" }}
          className="flex flex-col "
        >
          <div>{<StandardTemplate />}</div>
          <div
            style={{ backgroundColor: currentThemeColors.background }}
            className="flex flex-col items-center col-start-2 col-end-5 gap-4 p-6 bg-white"
          >
            {/* <ElementsPanel /> */}
            <ThemeControls />
          </div>
        </div>
      </div>
    </div>
  );
}
