import { teamInterface } from "@/app/services/types";
import { useState } from "react";
import Avani from "./Templates/AVANI/Avani";

export default function SelectTheme(props: teamInterface) {
  enum themeNames {
    AVANI,
  }
  const [type, setType] = useState(themeNames.AVANI);
  switch (type) {
    case themeNames.AVANI:
      return <Avani />;
  }
}
