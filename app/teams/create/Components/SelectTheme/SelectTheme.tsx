import { teamInterface } from "@/app/services/types";
import { useState } from "react";
import Avani from "./Templates/AVANI/Avani";
import ElementsPanel from "./ElementsPanel";
import ThemeControls from "./ThemeControls";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

// interface posterInterface extends teamInterface {
//   images: [string];
// }

export default function SelectTheme(props: { setStep: Function }) {
  //create elements common to all themes
  //use redux toolkit to share them across these elements
  const { img } = useSelector((store: RootState) => store.teamSlice);

  enum themeNames {
    AVANI,
    ASHI,
    SIRI,
    ADHYA,
  }
  const [type, setType] = useState(themeNames.AVANI);
  const themeOptions = Object.keys(themeNames).filter((theme) =>
    isNaN(Number(theme))
  );
  console.log(themeNames);
  const themeOptionsJSX = themeOptions.map((themeOption, index) => {
    return <div key={index}>{themeOption}</div>;
  });

  function ThemeSelect(type: themeNames) {
    switch (type) {
      case themeNames.AVANI:
        return <Avani />;
    }
  }

  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-3">
      <div className="flex gap-5 py-5 rounded-lg bg-slate-50 md:flex-col">
        {themeOptionsJSX}
      </div>
      <div className="col-span-2">{ThemeSelect(type)}</div>

      <div className="flex flex-col items-center col-start-2 col-end-4 gap-4 p-6 bg-white">
        {/* <ElementsPanel /> */}
        <ThemeControls setStep={props.setStep} />
      </div>
    </div>
  );
}
