import { useState } from "react";
import Avani from "./Templates/AVANI/Avani";
import ElementsPanel from "./ElementsPanel";
import ThemeControls from "./ThemeControls";
import Clean from "./Templates/CLEAN/Clean";
import Dark from "./Templates/DARK/Dark";
import { ThemeOption } from "@/app/services/types";
import { useDispatch, useSelector } from "react-redux";
import themeSlice, { setTheme } from "@/app/redux/themeSlice";
import { RootState } from "@/app/redux/store";

export default function SelectTheme(props: { setStep: Function }) {
  const { currentTheme } = useSelector((state: RootState) => state.themeSlice);

  const dispatch = useDispatch();

  function ThemeSelect(theme: ThemeOption) {
    switch (theme) {
      case ThemeOption.AVANI:
        return <Avani />;
      case ThemeOption.DARK:
        return <Dark />;
      case ThemeOption.CLEAN:
        return <Clean />;
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-4">
      <div className="flex row-span-2 gap-5 py-5 rounded-lg bg-slate-50 md:flex-col">
        {Object.values(ThemeOption).map((theme) => (
          <div
            key={theme}
            className="text-center hover:cursor-pointer"
            onClick={() => dispatch(setTheme(theme))}
          >
            {theme}
          </div>
        ))}
      </div>
      <div className="col-span-3 ">{ThemeSelect(currentTheme)}</div>
      <div className="flex flex-col items-center col-start-2 col-end-5 gap-4 p-6 bg-white">
        {/* <ElementsPanel /> */}
        <ThemeControls setStep={props.setStep} />
      </div>
    </div>
  );
}
