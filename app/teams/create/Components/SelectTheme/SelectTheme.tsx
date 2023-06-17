import { useState } from "react";
import Avani from "./Templates/Standard/Standard";
import ElementsPanel from "./ElementsPanel";
import ThemeControls from "./ThemeControls";
import { ThemeOption } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";
import themeSlice, {
  setCurrentThemeColors,
  setTheme,
} from "@/app/redux/themeSlice";
import { RootState } from "@/app/redux/store";
import { avaniColors, cleanColors, darkColors } from "@/app/services/colors";
import StandardTemplate from "./Templates/Standard/Standard";

export default function SelectTheme(props: { setStep: Function }) {
  const { editing, currentTheme } = useSelector(
    (state: RootState) => state.themeSlice
  );

  const dispatch = useDispatch();
  const editingStyle = {};
  const previewStlye = {};

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
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col grid-cols-4 sm:grid">
      {editing && (
        <div className="flex row-span-2 gap-5 py-5 rounded-lg bg-slate-50 md:flex-col">
          {Object.values(ThemeOption).map((theme) => (
            <div
              key={theme}
              className="text-center hover:cursor-pointer"
              onClick={() => ThemeSelect(theme)}
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
        <div className="flex flex-col items-center col-start-2 col-end-5 gap-4 p-6 bg-white">
          {/* <ElementsPanel /> */}
          <ThemeControls setStep={props.setStep} />
        </div>
      </div>
    </div>
  );
}
