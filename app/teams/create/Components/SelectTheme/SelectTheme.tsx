import { useState } from "react";
import Avani from "./Templates/AVANI/Avani";
import ThemeControls from "./ThemeControls";
import Clean from "./Templates/CLEAN/Clean";
import Dark from "./Templates/DARK/Dark";

enum ThemeOption {
  CLEAN = "CLEAN",
  AVANI = "AVANI",
  DARK = "DARK",
  SIRI = "SIRI",
  ADHYA = "ADHYA",
}

export default function SelectTheme(props: { setStep: Function }) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeOption>(
    ThemeOption.CLEAN
  );

  function setTheme(theme: ThemeOption) {
    setSelectedTheme(theme);
  }

  function ThemeSelect(theme: ThemeOption) {
    switch (theme) {
      case ThemeOption.AVANI:
        return <Avani />;
      case ThemeOption.DARK:
        return <Dark />;
        // Render the component for WINI theme
        break;
      case ThemeOption.SIRI:
        // Render the component for SIRI theme
        break;
      case ThemeOption.ADHYA:
        // Render the component for ADHYA theme
        break;
      case ThemeOption.CLEAN:
        return <Clean />;
        break;
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
            onClick={() => setTheme(theme)}
          >
            {theme}
          </div>
        ))}
      </div>
      <div className="col-span-3 ">{ThemeSelect(selectedTheme)}</div>
      <div className="flex flex-col items-center col-start-2 col-end-5 gap-4 p-6 bg-white">
        {/* <ElementsPanel /> */}
        <ThemeControls setStep={props.setStep} />
      </div>
    </div>
  );
}
