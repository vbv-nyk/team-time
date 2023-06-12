import { teamInterface } from "@/app/services/types";
import { useState } from "react";
import Avani from "./Templates/AVANI/Avani";

export default function SelectTheme(props: teamInterface) {
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
        return <Avani {...props} />;
    }
  }

  return (
    <div className="flex flex-col gap-2 md:grid md:grid-cols-3">
      <div className="flex gap-5 py-5 rounded-lg bg-slate-50 md:flex-col">
        {themeOptionsJSX}
      </div>
      <div className="col-span-2">{ThemeSelect(type)}</div>
    </div>
  );
}
